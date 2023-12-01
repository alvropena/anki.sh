import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
    return (
        <RadioGroup defaultValue="comfortable" className='flex flex-row'>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">1 month</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">3 months</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">1 year</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">all</Label>
            </div>
        </RadioGroup>
    )
}


function AddedCard() {
    return (
        <div className='m-4 bg-gray-200'>
            <h1 className='text-2xl p-2'>Added</h1>
            <div className='flex flex-col items-center gap-2'>
                <p>The number of new cards you have added.</p>
                <RadioGroupDemo />
            </div>
        </div>
    )
}

export default AddedCard