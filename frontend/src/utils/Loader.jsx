import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader border-t-transparent border-solid rounded-full w-16 h-16 border-4 border-green-500 animate-spin"></div>
    </div>
  );
};

export default Loader;
