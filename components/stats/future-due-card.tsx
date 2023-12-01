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
                <RadioGroupItem value="three-months" id="r2" />
                <Label htmlFor="r2">3 months</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-year" id="r3" />
                <Label htmlFor="r3">1 year</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="r4" />
                <Label htmlFor="r3">all</Label>
            </div>
        </RadioGroup>
    )
}


function FutureDueCard() {
    return (
        <div>
            <div>
                <h1 className='text-2xl'>Future Due</h1>
                <p>The number of reviews due in the future</p>
                <RadioGroupDemo />
            </div>
            <div>
                <p>Graph</p>
            </div>
            <div>
                <p>Total: 3 reviews</p>
                <p>Average: 0 reviews/day</p>
                <p>Due tomorrow: 0 reviews</p>
            </div>
        </div>
    )
}

export default FutureDueCard