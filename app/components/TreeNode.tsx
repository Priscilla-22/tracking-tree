"use client"
import React, { useState } from 'react';
import { TreeItem } from '../types/types';
import DropdownDetails from './DropdownDetails';

interface TreeNodeProps {
  item: TreeItem;
}

const TreeNode: React.FC<TreeNodeProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="ml-4">
      <div className="flex items-center">
        {item.children && (
          <button onClick={toggleOpen} className="mr-2">
            {isOpen ? '▼' : '►'}
          </button>
        )}
        <span onClick={toggleDetails} className="cursor-pointer">
          {item.name}
        </span>
      </div>
      {showDetails && <DropdownDetails details={item.details} />}
      {isOpen && item.children && (
        <div className="ml-4">
          {item.children.map((child) => (
            <TreeNode key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;