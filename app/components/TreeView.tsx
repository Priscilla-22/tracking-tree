"use client"
import React from 'react';
import { TreeItem } from '../types/types';
import TreeNode from './TreeNode';

interface TreeViewProps {
  data: TreeItem[];
}

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div className="p-4">
      {data.map((item) => (
        <TreeNode key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TreeView;