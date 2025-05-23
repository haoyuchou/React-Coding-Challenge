//import Image from "next/image";
//import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
"use client";
import React, { useState, useEffect, useMemo } from "react";
import NodeCard from "../../components/Node Card/NodeCard";
import { Node } from "../../typings/node.type";
import { Edge } from "../../typings/edge.type";
import PreFillForm from "../../components/Pre Fill/PreFillForm";
import buildTree from "../../lib/buildTree";
import findAncestor from "../../lib/findAncestor";

export default function Home() {
  const [nodesArray, setNodesArray] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [selectedNode, setSelectedNode] = useState("");
  const [ancestors, setAncestors] = useState<{ id: string; name: string }[]>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://localhost:3000/api/v1/your-value/actions/blueprints/your-blueprint-id/graph"
      );
      const nodes = await res.json();
      setNodesArray(nodes.nodes);
      setEdges(nodes.edges);
    }

    fetchData();
  }, []);

  console.log("edges: ", edges);
  console.log("nodesArray: ", nodesArray);

  const nodesMap: Record<string, Node> = {};

  for (let i = 0; i < nodesArray.length; i++) {
    nodesMap[nodesArray[i]?.id] = nodesArray[i];
  }
  console.log("nodes map: ", nodesMap);

  const tree = useMemo(() => buildTree(edges, nodesArray), [edges, nodesArray]);

  useEffect(() => {
    if (selectedNode) {
      const res = findAncestor(selectedNode, tree);
      setAncestors(res);
    }
  }, [selectedNode, tree]);

  return (
    <div className="">
      <div className="flex">
        {nodesArray.map((node, i) => {
          return (
            <NodeCard
              onClick={() => {
                setSelectedNode(node.id);
              }}
              key={i}
              node={node}
            />
          );
        })}
      </div>

      {selectedNode && (
        <div className="m-10">{<PreFillForm ancestors={ancestors} />}</div>
      )}
    </div>
  );
}
