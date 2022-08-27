import React from "react";

// some configs in tailwind.config.js
// some classes in index.css

export const ToggleButton = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <label htmlFor="toggle-switch">
        <input 
          type="checkbox" 
          id="toggle-switch" 
          className="cursor-pointer h-32 w-64 rounded-full appearance-none bg-white bg-opacity-5 border-2 border-neon checked:bg-gray-600 transition duration-200 relative"  
        />
      </label>
    </div>
  );
};
