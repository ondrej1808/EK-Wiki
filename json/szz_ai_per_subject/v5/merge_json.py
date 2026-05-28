import json
import os

def merge_json_ordered(output_filename="SZZ.json"):
    order = [
        "LAGA", "MA1A", "DRN", "MA2A", "KANA", "STP", "FY1", "FY2",
        "ZEOA", "EO1", "EMB", "DITA", "DATA", "ELPA", "EMPA", "ELD",
        "SEE", "SAS", "TBK", "CZS", "AVT", "MIT", "TSI"
    ]
    merged_questions = []
    processed_files = set()
    for code in order:
        filename = f"{code}.json"
        if os.path.exists(filename):
            try:
                with open(filename, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    questions = data.get("questions", data) if isinstance(data, dict) else data
                    merged_questions.extend(questions)
                    processed_files.add(filename)
                    print(f"Přidáno dle pořadí: {filename}")
            except Exception as e:
                print(f"Chyba při čtení {filename}: {e}")
    for filename in os.listdir('.'):
        if filename.endswith('.json') and filename not in processed_files and filename != output_filename:
            try:
                with open(filename, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    questions = data.get("questions", data) if isinstance(data, dict) else data
                    merged_questions.extend(questions)
                    print(f"Přidáno dodatečně: {filename}")
            except Exception as e:
                print(f"Chyba při čtení {filename}: {e}")
    final_data = {"title": "SZZ - Elektronika a komunikace", "questions": merged_questions}
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(final_data, f, ensure_ascii=False, indent=2)
    print(f"\nHotovo! Vytvořeno: {output_filename}")
    print(f"Celkem otázek: {len(merged_questions)}")

if __name__ == '__main__':
    merge_json_ordered()
