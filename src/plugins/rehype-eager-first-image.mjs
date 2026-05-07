import { visit, EXIT } from "unist-util-visit";

export default function rehypeEagerFirstImage() {
  return (tree) => {
    let promoted = false;
    visit(tree, "element", (node) => {
      if (promoted) return EXIT;
      if (node.tagName === "img") {
        node.properties = node.properties ?? {};
        node.properties.loading = "eager";
        node.properties.decoding = "async";
        delete node.properties.fetchpriority;
        delete node.properties.fetchPriority;
        promoted = true;
        return EXIT;
      }
    });
  };
}
