import React from 'react';
import PropTypes from 'prop-types';

// Implement recursive rendering, expand/collapse logic, memoization, and custom content support
export default function TreeNode({ node, level }) {
  return (
    <div style={{ marginLeft: level * 16 }}>
      <span>{node.name}</span>{' '}
      <span style={{ color: '#aaa', fontSize: 12 }}>({node.type})</span>
      {/* Expand/collapse, icons, children rendering to be implemented */}
    </div>
  );
}

TreeNode.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['folder', 'file']).isRequired,
    children: PropTypes.array,
  }).isRequired,
  level: PropTypes.number,
};
