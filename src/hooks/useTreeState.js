import { useState, useCallback } from 'react';

// Custom hook to manage expanded/collapsed state per node
export function useTreeState(initialExpandedIds = []) {
  const [expandedIds, setExpandedIds] = useState(() => new Set(initialExpandedIds));

  const toggleNodeExpand = useCallback((nodeId) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      next.has(nodeId) ? next.delete(nodeId) : next.add(nodeId);
      const action = prev.has(nodeId) ? 'collapse' : 'expand';
      console.table([{ nodeId, action, expandedAfter: [...next].join(', ') || '(none)' }]);
      return next;
    });
  }, []);

  const isExpanded = useCallback((nodeId) => expandedIds.has(nodeId), [expandedIds]);

  return { expandedIds, toggleNodeExpand, isExpanded };
}
