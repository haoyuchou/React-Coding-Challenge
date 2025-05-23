import { TreeNode } from "../typings/treeNode.type";


function findAncestor(
    targetId: string,
    tree: Record<string, TreeNode>
  ): { id: string; name: string }[] {
    const result: { id: string; name: string }[] = [];
  
    function dfs(node: TreeNode): boolean {
      for (const childId in node.children) {
        const child = node.children[childId];
  
        if (child.id === targetId || dfs(child)) {
          result.push({ id: node.id, name: node.name });
          return true;
        }
      }
      return false;
    }
  
    for (const rootId in tree) {
      if (dfs(tree[rootId])) break;
    }
  
    return result.reverse(); // optional: reverse to go from root → parent → ...
  }
  
export default findAncestor;