export type TreeNode = {
  name: string;
  id: string;
  children: Record<string, TreeNode>;
};
