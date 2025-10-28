import React from 'react';

const Bento = () => {
  const overlayIds = [
    '1760057918272',
    '1760057942145', 
    '1760057948843',
    '1760057999319',
    '1760058011364',
    '1760058017913',
    '1760058026843',
    '1760058050498',
    '1760058061196',
    '1760058069825'
  ];

  return (
    <div>
      {overlayIds.map(id => (
        <div key={id} className={`grid-item-overlay-${id}`}></div>
      ))}
    </div>
  );
};

export default Bento;