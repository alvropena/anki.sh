import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue='deck'>
      <div className='flex flex-row'>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="deck" id="r1" />
          <Label htmlFor="r1">Deck</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="collection" id="r2" />
          <Label htmlFor="r2">Collection</Label>
        </div>
        <Input placeholder='deck:current'></Input>
      </div>
    </RadioGroup>
  )
}

function RadioGroupTwo() {
  return (
    <RadioGroup defaultValue='deck'>
      <div className='flex flex-row'>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="deck" id="r1" />
          <Label htmlFor="r1">Last 12 months</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="collection" id="r2" />
          <Label htmlFor="r2">All history</Label>
        </div>
      </div>
    </RadioGroup>
  )
}



function Stats() {
  return (
    <div>
      <div className='flex flex-col items-center mt-4'>
        <RadioGroupDemo />
        <RadioGroupTwo />
      </div>
      <div>
        Stats
      </div>
      <div className='flex flex-row items-center justify-between mx-4'>
        <div className='flex gap-4 items-center'>
          <Label>Deck</Label>
          <Button variant={'outline'}>Business::The Personal MBA</Button>
        </div>
        <div>
          <Button variant={'outline'}>Save PDF</Button>
        </div>
      </div>
    </div>
  )
}

export default Stats