import React, { useMemo } from 'react';
import { mockTreeData } from '../data/mockTreeData';
import TreeNode from './TreeNode';
import { useTreeState } from '../hooks/useTreeState';

// Flatten the nested tree into a flat array for console.table
function flattenTree(node, depth = 0) {
  const row = { id: node.id, name: node.name, type: node.type, depth, children: node.children?.length ?? 0 };
  if (node.children) {
    return [row, ...node.children.flatMap(c => flattenTree(c, depth + 1))];
  }
  return [row];
}

export default function FileExplorer() {
  const { expandedIds, isExpanded, toggleNodeExpand } = useTreeState(['root']);

  const flatNodes = useMemo(() => flattenTree(mockTreeData), []);

  console.group('%c FileExplorer render', 'color: #4a9eff; font-weight: bold');
  console.table(flatNodes);
  console.log('%c expandedIds (Set)', 'color: #f0a500', [...expandedIds]);
  console.groupEnd();

  return (
    <div role="tree" aria-label="File Explorer">
      <TreeNode
        node={mockTreeData}
        level={0}
        isExpanded={isExpanded}
        onToggle={toggleNodeExpand}
      />
    </div>
  );
}
