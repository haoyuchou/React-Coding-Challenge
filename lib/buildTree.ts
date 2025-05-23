import { TreeNode } from "../typings/treeNode.type";
import { Edge } from "../typings/edge.type";
import { Node } from "../typings/node.type";

function buildTree(edges: Edge[], nodeArray: Node[]): Record<string, TreeNode> {
  const nodeMap: Record<string, Node> = {};
  for (const node of nodeArray) {
    nodeMap[node.id] = node;
  }

  console.log("nodeMap: ", nodeMap);

  const childMap: Record<string, TreeNode> = {};
  const parents = new Set<string>();
  const children = new Set<string>();

  for (const { source, target } of edges) {
    if (!childMap[source]) {
      childMap[source] = {
        id: source,
        name: nodeMap[source]?.data.name || source,
        children: {},
      };
    }
    if (!childMap[target]) {
      childMap[target] = {
        id : target,
        name: nodeMap[target]?.data.name || target,
        children: {},
      };
    }
    childMap[source].children[target] = childMap[target];
    parents.add(source);
    children.add(target);
  }

  const roots = [...parents].filter((p) => !children.has(p));
  const tree: Record<string, TreeNode> = {};

  for (const root of roots) {
    tree[root] = childMap[root];
  }

  return tree;
}

export default buildTree;
