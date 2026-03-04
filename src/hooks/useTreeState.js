import { useState, useCallback } from 'react';

// Custom hook to manage expanded/collapsed state per node
export function useTreeState() {
  
  const [expandedIds] = useState(() => new Set());
 
  return {
    expandedIds,
    // toggleNodeExpand
  };
}
