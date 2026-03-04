import React from 'react';
import FileExplorer from './components/FileExplorer';

export default function App() {
  return (
    <div style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h2>TaskFolders File Explorer</h2>
      <FileExplorer />
    </div>
  );
}
