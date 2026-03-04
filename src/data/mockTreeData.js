export const mockTreeData = {
  id: 'root',
  name: 'Root Folder',
  type: 'folder',
  children: [
    {
      id: 'f1',
      name: 'Documents',
      type: 'folder',
      children: [
        { id: 'f1a', name: 'Resume.pdf', type: 'file' },
        { id: 'f1b', name: 'CoverLetter.docx', type: 'file' }
      ]
    },
    {
      id: 'f2',
      name: 'Photos',
      type: 'folder',
      children: [
        { id: 'f2a', name: 'Vacation', type: 'folder', children: [ { id: 'f2a1', name: 'beach.png', type: 'file' } ] }
      ]
    },
    { id: 'file1', name: 'todo.txt', type: 'file' },
     {
      id: 'f4',
      name: 'Documents',
      type: 'folder',
      children: [
        { id: 'f1a', name: 'docs.pdf', type: 'file' },
        { id: 'f1b', name: 'CoverLetter.docx', type: 'file' }
      ]
    }
  ]
};
