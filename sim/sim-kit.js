/* ═══════════════════════════════════════════════════════════════
 *  sim-kit.js — shared helpers for wiki simulations (global `SK`)
 *  Vanilla, no deps (KaTeX optional). DPR-aware canvas, theme tokens,
 *  vector drawing, UI builders, animation loop.
 * ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  const css = (name) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  /** Current theme color tokens (read live so dark/light switches work). */
  function theme() {
    return {
      bg:     css('--sk-stage') || '#fff',
      fg:     css('--sk-fg')    || '#0f172a',
      muted:  css('--sk-muted') || '#64748b',
      grid:   css('--sk-grid')  || '#e7edf5',
      axis:   css('--sk-axis')  || '#94a3b8',
      accent: css('--sk-accent')|| '#6d28d9',
      accent2:css('--sk-accent-2')|| '#2563eb',
      pos:    css('--sk-pos')   || '#dc2626',
      neg:    css('--sk-neg')   || '#2563eb',
      mag:    css('--sk-mag')   || '#0d9488',
      ok:     css('--sk-ok')    || '#16a34a',
      warn:   css('--sk-warn')  || '#d97706',
    };
  }

  const mq = global.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  function onTheme(cb) {
    if (mq) mq.addEventListener ? mq.addEventListener('change', cb)
                                : mq.addListener(cb);
  }

  /**
   * Mount a canvas: handles devicePixelRatio scaling, resize, theme change.
   * drawFn(ctx, w, h, t) is called whenever a redraw is needed (w,h in CSS px).
   * Returns { redraw, dims:()=>({w,h}), ctx }.
   */
  function mount(canvas, drawFn) {
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0;

    function resize() {
      const dpr = global.devicePixelRatio || 1;
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      canvas.width  = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      redraw();
    }
    function redraw() { drawFn(ctx, w, h); }

    if (global.ResizeObserver) {
      new ResizeObserver(resize).observe(canvas);
    } else {
      global.addEventListener('resize', resize);
    }
    onTheme(redraw);
    // Initial sizing: call synchronously now (layout for the stage is ready
    // since this script runs at end of body) and again on the next frame +
    // after full load, so it is robust to rAF throttling in headless previews.
    resize();
    requestAnimationFrame(resize);
    global.addEventListener('load', resize, { once: true });

    return { redraw, ctx, dims: () => ({ w, h }) };
  }

  /* ── Drawing helpers ───────────────────────────────────────── */

  /** Arrow from (x0,y0) to (x1,y1). opts: {color,width,head,dash} */
  function arrow(ctx, x0, y0, x1, y1, opts) {
    opts = opts || {};
    const color = opts.color || '#000';
    const width = opts.width || 2;
    const head  = opts.head != null ? opts.head : 7;
    const dx = x1 - x0, dy = y1 - y0;
    const len = Math.hypot(dx, dy);
    if (len < 0.5) return;
    const a = Math.atan2(dy, dx);
    ctx.save();
    ctx.strokeStyle = color; ctx.fillStyle = color;
    ctx.lineWidth = width; ctx.lineCap = 'round';
    if (opts.dash) ctx.setLineDash(opts.dash);
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.setLineDash([]);
    if (head > 0) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 - head * Math.cos(a - 0.4), y1 - head * Math.sin(a - 0.4));
      ctx.lineTo(x1 - head * Math.cos(a + 0.4), y1 - head * Math.sin(a + 0.4));
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }

  function dot(ctx, x, y, r, color) {
    ctx.save(); ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.restore();
  }

  function label(ctx, text, x, y, opts) {
    opts = opts || {};
    ctx.save();
    ctx.fillStyle = opts.color || theme().fg;
    ctx.font = opts.font || '12px system-ui, sans-serif';
    ctx.textAlign = opts.align || 'left';
    ctx.textBaseline = opts.baseline || 'alphabetic';
    if (opts.stroke) { ctx.strokeStyle = opts.stroke; ctx.lineWidth = opts.strokeW || 3;
                       ctx.strokeText(text, x, y); }
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  /** Light background grid. */
  function grid(ctx, w, h, step) {
    const t = theme();
    step = step || 28;
    ctx.save();
    ctx.strokeStyle = t.grid; ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = step; x < w; x += step) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
    for (let y = step; y < h; y += step) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
    ctx.stroke();
    ctx.restore();
  }

  /**
   * 2D axes with origin at (ox,oy), scale px per unit (sx,sy).
   * opts: {xlabel,ylabel, xmin,xmax,ymin,ymax in px-space already handled by caller}
   */
  function axes(ctx, ox, oy, w, h, opts) {
    opts = opts || {};
    const t = theme();
    ctx.save();
    ctx.strokeStyle = t.axis; ctx.fillStyle = t.muted; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, oy); ctx.lineTo(w, oy);   // x axis
    ctx.moveTo(ox, 0); ctx.lineTo(ox, h);   // y axis
    ctx.stroke();
    // arrowheads
    arrow(ctx, w - 12, oy, w - 2, oy, { color: t.axis, width: 1.5, head: 6 });
    arrow(ctx, ox, 12, ox, 2, { color: t.axis, width: 1.5, head: 6 });
    ctx.font = '12px system-ui, sans-serif';
    if (opts.xlabel) { ctx.textAlign = 'right'; ctx.textBaseline = 'top';
                       ctx.fillText(opts.xlabel, w - 6, oy + 6); }
    if (opts.ylabel) { ctx.textAlign = 'left'; ctx.textBaseline = 'top';
                       ctx.fillText(opts.ylabel, ox + 6, 4); }
    ctx.restore();
  }

  /* ── Animation loop ────────────────────────────────────────── */

  function loop(stepFn) {
    let raf = null, last = 0, running = false;
    function frame(ts) {
      if (!running) return;
      const dt = last ? (ts - last) / 1000 : 0;
      last = ts;
      stepFn(dt, ts / 1000);
      raf = requestAnimationFrame(frame);
    }
    const api = {
      start() { if (!running) { running = true; last = 0; raf = requestAnimationFrame(frame); } return api; },
      stop()  { running = false; if (raf) cancelAnimationFrame(raf); raf = null; return api; },
      toggle(){ return running ? api.stop() : api.start(); },
      get running() { return running; },
    };
    return api;
  }

  /* ── UI builders ───────────────────────────────────────────── */

  /** slider({label,min,max,step,value,unit,fmt,oninput}) → {el,row,get,set} */
  function slider(spec) {
    const row = document.createElement('div'); row.className = 'sk-ctrl';
    const lab = document.createElement('label');
    const name = document.createElement('span'); name.textContent = spec.label;
    const val  = document.createElement('span'); val.className = 'sk-val';
    lab.appendChild(name); lab.appendChild(val);
    const inp = document.createElement('input');
    inp.type = 'range';
    inp.min = spec.min; inp.max = spec.max;
    inp.step = spec.step != null ? spec.step : 'any';
    inp.value = spec.value != null ? spec.value : spec.min;
    const fmt = spec.fmt || ((v) => (Math.round(v * 100) / 100));
    function show() { val.textContent = fmt(parseFloat(inp.value)) + (spec.unit ? ' ' + spec.unit : ''); }
    inp.addEventListener('input', () => { show(); spec.oninput && spec.oninput(parseFloat(inp.value)); });
    row.appendChild(lab); row.appendChild(inp); show();
    return { el: inp, row, get: () => parseFloat(inp.value),
             set: (v) => { inp.value = v; show(); } };
  }

  /** toggle({label,value,onchange}) → button that flips on/off */
  function toggle(spec) {
    const btn = document.createElement('button');
    btn.className = 'sk-btn';
    let on = !!spec.value;
    function paint() { btn.classList.toggle('sk-on', on); btn.textContent = spec.label + (on ? ' ✓' : ''); }
    btn.addEventListener('click', () => { on = !on; paint(); spec.onchange && spec.onchange(on); });
    paint();
    return { el: btn, get: () => on, set: (v) => { on = !!v; paint(); } };
  }

  /** button({label,primary,onclick}) */
  function button(spec) {
    const btn = document.createElement('button');
    btn.className = 'sk-btn' + (spec.primary ? ' sk-primary' : '');
    btn.textContent = spec.label;
    btn.addEventListener('click', () => spec.onclick && spec.onclick(btn));
    return { el: btn, set: (t) => btn.textContent = t };
  }

  /** tabs({options:[{label,value}], value, onchange}) → segmented control */
  function tabs(spec) {
    const wrap = document.createElement('div'); wrap.className = 'sk-tabs';
    let cur = spec.value != null ? spec.value : (spec.options[0] && spec.options[0].value);
    const btns = [];
    spec.options.forEach((o) => {
      const b = document.createElement('button');
      b.textContent = o.label;
      b.addEventListener('click', () => { cur = o.value; paint(); spec.onchange && spec.onchange(cur); });
      btns.push({ b, v: o.value }); wrap.appendChild(b);
    });
    function paint() { btns.forEach(({ b, v }) => b.classList.toggle('sk-active', v === cur)); }
    paint();
    return { el: wrap, get: () => cur, set: (v) => { cur = v; paint(); } };
  }

  /** Add controls (from .el/.row of builders) to a container. */
  function controls(container, items) {
    items.forEach((it) => {
      const node = it.row || it.el;
      if (it.row) container.appendChild(it.row);
      else { const w = document.createElement('div'); w.className = 'sk-ctrl';
             w.appendChild(it.el); container.appendChild(w); }
    });
  }

  /* ── Misc ──────────────────────────────────────────────────── */

  /** Render LaTeX into el. KaTeX often loads via `defer`, so if it isn't
   *  ready yet we show raw text now and upgrade once `load` fires. */
  function katex(el, latex, display) {
    function go() {
      if (global.katex) {
        try { global.katex.render(latex, el, { displayMode: !!display, throwOnError: false }); return true; }
        catch (e) { /* fall through */ }
      }
      return false;
    }
    if (!go()) {
      el.textContent = latex;
      global.addEventListener('load', go, { once: true });
    }
  }

  function fmt(n, d) { d = d == null ? 2 : d; return Number(n).toFixed(d); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  /** Pointer position in CSS px relative to a canvas (handles mouse+touch). */
  function pointer(canvas, ev) {
    const r = canvas.getBoundingClientRect();
    const p = ev.touches ? ev.touches[0] : ev;
    return { x: p.clientX - r.left, y: p.clientY - r.top };
  }

  global.SK = {
    theme, onTheme, mount, loop,
    arrow, dot, label, grid, axes,
    slider, toggle, button, tabs, controls,
    katex, fmt, clamp, lerp, pointer,
  };
})(window);
