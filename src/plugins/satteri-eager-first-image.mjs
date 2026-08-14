/**
 * Promote the first image of a document to an eager load, so the largest
 * contentful paint isn't waiting on a lazy image.
 *
 * Passed to `satteri({ hastPlugins: [...] })` as a factory so `promoted`
 * resets for every document.
 */
export default function satteriEagerFirstImage() {
  let promoted = false;
  return {
    name: "eager-first-image",
    element: {
      filter: ["img"],
      visit(node, ctx) {
        if (promoted) return;
        promoted = true;
        ctx.setProperty(node, "loading", "eager");
        ctx.setProperty(node, "decoding", "async");
        for (const key of ["fetchpriority", "fetchPriority"]) {
          if (node.properties?.[key] !== undefined) {
            ctx.setProperty(node, key, null);
          }
        }
      },
    },
  };
}
