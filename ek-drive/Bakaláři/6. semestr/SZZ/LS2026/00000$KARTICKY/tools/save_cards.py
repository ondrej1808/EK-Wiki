#!/usr/bin/env python3
"""
Save a JSON file into the workspace `json/` folder.
Usage:
  python tools/save_cards.py <source-file> <dest-rel-path>
If <source-file> is '-' read from stdin.
Example:
  python tools/save_cards.py cards_export.json json/my_cards.json
"""
import sys
from pathlib import Path

def main():
    if len(sys.argv) < 3:
        print('Usage: save_cards.py <source-file|- for stdin> <dest-rel-path>')
        sys.exit(2)
    src = sys.argv[1]
    dest = sys.argv[2]
    if src == '-':
        data = sys.stdin.read()
    else:
        data = Path(src).read_text(encoding='utf-8')

    dest_path = Path(dest)
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    dest_path.write_text(data, encoding='utf-8')
    print(f'Wrote {dest_path.resolve()}')

if __name__ == '__main__':
    main()
