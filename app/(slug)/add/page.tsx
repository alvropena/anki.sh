"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function TextareaFront() {
  return <Textarea placeholder="" />
}
function TextareaBack() {
  return <Textarea placeholder=""/>
}


function AddCard() {
  const [frontContent, setFrontContent] = useState('');
  const [backContent, setBackContent] = useState('');

  const handleSave = () => {
    // Add your save logic here
    console.log('Card Saved:', { frontContent, backContent });
  };

  return (
    <div className="p-6 shadow-md rounded-md">
      <Label>Type</Label>
      <Button>Basic</Button>
      
      <Label>Deck</Label>
      <Button>Economics</Button>
      <div className="mb-4">
        <Label>Front</Label>
        <TextareaFront />
      </div>

      <div className="mb-4">
        <Label className='mb-4'>Back</Label>
        <TextareaBack />
      </div>

      <div>
        <Label htmlFor='tags'>Tags</Label>
        <Input id="tags" value="" className="col-span-3" />
      </div>

      <div className='flex flex-row justify-between mt-4'>
        <div className='flex flex-row gap-4'>
          <Button variant={'outline'}>
            Help
          </Button>
          <Button variant={'outline'}>
            Add
          </Button>
          <Button variant={'outline'}>
            History
          </Button>
        </div>
        <Button onClick={handleSave} variant={'outline'}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default AddCard;
