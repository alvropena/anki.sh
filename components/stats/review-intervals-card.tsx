import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


function RadioGroupDemo() {
    return (
        <RadioGroup defaultValue="comfortable" className='flex flex-row'>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">1 month</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">50%</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">95%</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">all</Label>
            </div>
        </RadioGroup>
    )
}

export default function ReviewIntervalsCard() {
    return (
        <div>
            <h1 className='text-2xl'>Review Intervals</h1>
            <div>
                <p>Delays until reviews are shown again.</p>
                <RadioGroupDemo />
            </div>
        </div>
    )
}