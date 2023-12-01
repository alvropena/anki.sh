import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxDemo() {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Time
            </label>
        </div>
    )
}

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
        </RadioGroup>
    )
}

export default function ReviewCard() {
    return (
        <div>
            <h1 className='text-2xl'>Reviews</h1>
            <div>
                <p>The number of questions you have answered.</p>
                <CheckboxDemo />
                <RadioGroupDemo />
            </div>
            <div>
                <p>Graph</p>
            </div>
            <div>
                <p>Days studied: 1 of 31 3%</p>
                <p>Total: 3 reviews</p>
                <p>Average for days studied: 3 reviews/day</p>
                <p>Average over period: 0 reviews/day</p>
            </div>
        </div>
    )
}