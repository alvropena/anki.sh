"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

function AddCard() {
  const [frontContent, setFrontContent] = useState('');
  const [backContent, setBackContent] = useState('');

  const handleSave = () => {
    // Add your save logic here
    console.log('Card Saved:', { frontContent, backContent });
  };

  return (
    <div className="p-6 shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Front</label>
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded-md"
          placeholder="Enter front content here"
          value={frontContent}
          onChange={(e) => setFrontContent(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Back</label>
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded-md"
          placeholder="Enter back content here"
          value={backContent}
          onChange={(e) => setBackContent(e.target.value)}
        />
      </div>

      <Button onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}

export default AddCard;
