This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, clone the repository from [frontendchallengeserver](https://github.com/mosaic-avantos/frontendchallengeserver)
run the server below:

npm start

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## How to extend with new data Source?

To integrate a new data source, ensure it provides a structure matching the defined Node and Edge types. These two data types are all defined in the typings directory. Each Node must include a unique id, metadata in data.name, and connection information defined by Edge pairs (source → target). Once fetched (as shown in fetchData), simply pass the nodes and edges arrays into the buildTree helper to construct the hierarchical tree. The findAncestor function can then be used to dynamically trace the ancestry of any selected node. This modular design allows seamless extension—just fetch, parse, and plug in the new data source following this schema.

Each item inside the forms array have a field_schema. Inside field_schema is a properties object. Currently, we use all the proerpties key for the sub task that can be used when traverse through the DAG form for pre fill.

## Patterns to be paying attention to

When makeing modification, you should be aware of the helper function, which are all inside the lib directory.

The buildTree function constructs a nested tree-like structure from a list of directed edges and a node array. Each node has a unique ID and a name. The function maps each edge’s source and target into a hierarchical TreeNode structure, where each parent node contains its children in a nested children object. It also uses the nodeArray to associate each node ID with a readable name. The function returns a forest (a set of root nodes) that represents all top-level hierarchies in the graph, allowing traversal from any root to its descendants. This is useful for visualizing or processing dependency trees or workflow graphs.

The findAncestor function recursively traverses a tree structure to identify all ancestors of a given node by its targetId. Starting from each root node, it uses depth-first search (DFS) to find a path to the target. If the path exists, each node along that path (except the target itself) is recorded as an ancestor, capturing both its id and name. The function returns the ancestors in order from the root down to the immediate parent. This is particularly useful for understanding hierarchical relationships and lineage within a graph-based tree. We used this function to retrieve the nodes that can be used to prefill for the current selected node.
