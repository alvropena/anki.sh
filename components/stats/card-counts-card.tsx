import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxDemo() {
    return (
        <div className="flex items-center space-x-2 mt-2">
            <Checkbox id="terms" />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Separate suspended/buried cards
            </label>
        </div>
    )
}
export default function CardCountsCard() {
    return (
        <div>
            <h1 className='text-2xl'>Card Counts</h1>
            <div className='flex flex-col items-center gap-2'>
                <CheckboxDemo />
            </div>
        </div>
    )
}