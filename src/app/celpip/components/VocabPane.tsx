// @ts-nocheck
/* eslint-disable */

// The "Vocab Bank" tab pane: filter pills + word cards.
// variant "labeled"  → Meaning:/Example: labels + a type badge (tasks 1–4)
// variant "compact"  → bare meaning + violet example, no badge (tasks 5–8, writing)
export function VocabPane({
  words,
  types,
  filter,
  onFilter,
  active,
  variant = "labeled",
}) {
  const labeled = variant === "labeled";
  return (
    <div
      id="pane-vocab"
      className={`pane ${active === "vocab" ? "active" : ""} space-y-4`}
    >
      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => onFilter(type)}
            className={`vocab-filter-btn ${
              filter === type ? "filter-active" : "filter-inactive"
            } px-4 py-1.5 rounded-full border text-xs font-medium`}
          >
            {type === "all" && labeled ? "All Words" : type}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {words.map((word) => (
          <div
            key={word.word}
            className="bg-white rounded-xl border border-mist p-4"
          >
            <p className="text-sm font-semibold text-ink mb-1">{word.word}</p>
            {labeled ? (
              <>
                <p className="text-xs text-slate mb-2">
                  <strong>Meaning:</strong> {word.meaning}
                </p>
                <p className="text-xs text-slate italic">
                  <strong>Example:</strong> "{word.example}"
                </p>
                <span className="inline-block mt-3 text-xs font-medium text-sapphire bg-sapphire-light px-2 py-1 rounded">
                  {word.type}
                </span>
              </>
            ) : (
              <>
                <p className="text-xs text-slate mb-2">{word.meaning}</p>
                <p className="text-xs text-violet2 italic">"{word.example}"</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
