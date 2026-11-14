// Debounce helper
function debounce(fn, ms = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

const items = [1, 2, 3].map(n => n * 2);
console.log(`items: ${items.join(", ")}`, /re(gex)?/i.test("regex"));
