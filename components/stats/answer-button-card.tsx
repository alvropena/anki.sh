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
        </RadioGroup>
    )
}


function AnswerButtonsCard() {
    return (
        <div>
            <h1 className='text-2xl'>Answer Buttons</h1>
            <div className='flex flex-col items-center gap-2'>
                <p className='mt-2'>The number of times you have pressed each button.</p>
                <RadioGroupDemo />
            </div>
        </div>
    )
}

export default AnswerButtonsCard