import React from 'react';
import PropTypes from 'prop-types';

const TreeNode = React.memo(function TreeNode({ node, level, isExpanded, onToggle, renderContent }) {
  const isFolder = node.type === 'folder';
  const expanded = isFolder && isExpanded(node.id);

  const handleToggle = () => {
    if (isFolder) onToggle(node.id);
  };

  const handleKeyDown = (e) => {
    if (isFolder && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onToggle(node.id);
    }
  };

  return (
    <div role={level === 0 ? 'tree' : undefined}>
      <div
        role="treeitem"
        aria-expanded={isFolder ? expanded : undefined}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={handleToggle}
        style={{
          marginLeft: level * 20,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          cursor: isFolder ? 'pointer' : 'default',
          userSelect: 'none',
          padding: '2px 4px',
        }}
      >
        {isFolder && (
          <button
            onClick={(e) => { e.stopPropagation(); onToggle(node.id); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 10 }}
            tabIndex={-1}
            aria-hidden="true"
          >
            {expanded ? '▼' : '▶'}
          </button>
        )}
        <span>{isFolder ? '📁' : '📄'}</span>
        {renderContent ? renderContent(node) : <span>{node.name}</span>}
      </div>
      {isFolder && expanded && node.children?.map(child => (
        <TreeNode
          key={child.id}
          node={child}
          level={level + 1}
          isExpanded={isExpanded}
          onToggle={onToggle}
          renderContent={renderContent}
        />
      ))}
    </div>
  );
});

TreeNode.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['folder', 'file']).isRequired,
    children: PropTypes.array,
  }).isRequired,
  level: PropTypes.number,
  isExpanded: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  renderContent: PropTypes.func,
};

export default TreeNode;
