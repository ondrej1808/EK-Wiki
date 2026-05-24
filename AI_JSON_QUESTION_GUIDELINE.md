# AI Guideline for JSON Question Generation

Use this guideline when generating new question cards for the `json/` datasets in this project.

## Goal

Create cards that match the existing study-card style used by the MA1A, LAGA, ZEOA, and similar sets:

- one card = one concept, one relation, or one comparison
- questions should be short, precise, and answerable in a single study pass
- open questions should behave like micro-prompts, not like broad essay prompts
- answers should be structured, compact, and easy to scan

## Core rules

1. Keep each question narrow.
   - Ask about one definition, one theorem, one law, one method, one property, or one small comparison.
   - Avoid multi-part prompts that require several unrelated facts.

2. Prefer micro-prompts for open cards.
   - Good: `Kirchhoffovy zákony`
   - Better than: `Vysvětli všechny základní zákony obvodů`
   - If a topic is broad, split it into multiple cards.

3. Make the answer usable for revision.
   - Include the definition first.
   - Then add the key relation, formula, condition, or consequence.
   - Add a short example or note only if it clarifies the idea.

4. Keep wording consistent with the source material.
   - Use the terminology that appears in the notes or textbook.
   - Do not rewrite the topic into a different pedagogical style unless the dataset already does so.

5. Use topic hierarchy in `subsetPath`.
   - The first item is the domain or course tag, for example `MA1A`, `LAGA`, `ZEOA`, `FY2`.
   - The next items should narrow the topic logically.
   - Do not flatten the hierarchy into a single long string.

6. Use `answer_parts` for structured answers.
   - Put the main explanation in `text`.
   - Use `title` only if it helps separate a subsection.
   - Use `image` only when a diagram, graph, circuit, or visual cue is genuinely needed.

7. Do not overfill the answer.
   - Aim for a revision answer that can be reviewed in about 15-45 seconds.
   - If the explanation becomes long, split the topic into another card.

## Open question style

Open questions should look like this:

- `Struktura lineárního prostoru.`
- `Cramerovo pravidlo`
- `Kirchhoffovy zákony`
- `Théveninův teorém`

These are compact prompts that force recall without extra noise.

## Closed question style

Use closed questions only when the task is naturally multiple-choice.

- `question`: one short stem
- `options`: plausible distractors, same style and length
- `correctIndex`: exactly one correct answer
- `explanation`: brief reason why the correct option is right

Keep distractors realistic. Do not make the correct option obviously longer, more technical, or grammatically different.

## Domain-specific writing hints

### MA1A

- Focus on small algebraic and analytic concepts.
- Split broad function topics into smaller cards, for example domain, monotonicity, limits, derivatives, asymptotes.
- Prefer direct prompts over verbose theory questions.

### LAGA

- Keep prompts tightly bound to one algebraic object or theorem.
- If a proof is large, turn it into a theorem card plus a separate consequence or usage card.
- Ask for the statement, the condition, or the key property rather than the full derivation unless the derivation itself is the learning target.

### ZEOA

- Include formulas, circuit relations, and assumptions explicitly.
- If a theorem has both statement and computation steps, keep the statement in the main answer and the procedure in a short follow-up block.
- Add diagrams only when the visual structure matters, such as circuit replacement, source transformation, or equivalent network sketches.

### DRN

- No direct DRN example was visible in the current workspace, so apply the same micro-prompt rule set.
- Keep the prompt local to the exact topic and split it whenever the answer would need multiple independent subtopics.

## Recommended JSON shape

### Open card

```json
{
  "type": "open",
  "question": "Théveninův teorém",
  "subsetPath": ["ZEOA", "Elementární a obecné metody analýzy obvodů"],
  "answer_parts": [
    {
      "title": "",
      "text": "Libovolný lineární obvod lze z pohledu svorek A, B nahradit zdrojem napětí U_th sériově s odporem R_th."
    }
  ]
}
```

### Closed card

```json
{
  "type": "closed",
  "question": "Které tvrzení platí pro Kirchhoffův zákon proudový?",
  "options": [
    "Součet proudů v uzlu je roven nule.",
    "Součet napětí ve smyčce je roven nule.",
    "Napětí na rezistoru je vždy konstantní."
  ],
  "correctIndex": 0,
  "explanation": "Proudový Kirchhoffův zákon říká, že algebraický součet proudů v uzlu je roven nule."
}
```

## Generation checklist

Before accepting a generated card, verify:

- the question is narrow enough to answer from memory
- the answer is not overloaded with unrelated facts
- the topic path is specific and consistent
- formulas use the same notation as the source material
- images are only included when they add real value
- closed questions have exactly one correct option

## Practical filter

If a prompt sounds like this, it is too broad:

- `Vysvětli vše o ...`
- `Shrň celou kapitolu ...`
- `Popiš kompletně ...`

Rewrite it into micro-prompts instead:

- definition
- key property
- formula
- special case
- comparison
- usage

## Final principle

When in doubt, make the card smaller.
The best cards in this repo are precise enough that the learner can answer quickly and move on.
