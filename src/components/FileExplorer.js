import React from 'react';
import { mockTreeData } from '../data/mockTreeData';
import TreeNode from './TreeNode';

export default function FileExplorer() {
  return (
    <div>
      <TreeNode node={mockTreeData} level={0} />
    </div>
  );
}
