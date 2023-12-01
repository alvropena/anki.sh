import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import TodayCard from '@/components/stats/today-card'
import FutureDueCard from '@/components/stats/future-due-card'
import CalendarCard from '@/components/stats/calendar-card'
import ReviewCard from '@/components/stats/review-card'
import CardCountsCard from '@/components/stats/card-counts-card'
import ReviewIntervalsCard from '@/components/stats/review-intervals-card'
import CardEaseCard from '@/components/stats/card-ease-card'
import HourlyBreakdownCard from '@/components/stats/hourly-breakdown-card'
import AnswerButtonsCard from '@/components/stats/answer-button-card'
import AddedCard from '@/components/stats/added-card'

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
      <div className="grid grid-cols-3 gap-4">
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <TodayCard />
  </div>
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <FutureDueCard />
  </div>
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <CalendarCard />
  </div>
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <ReviewCard />
  </div>
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <CardCountsCard />
  </div>
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <ReviewIntervalsCard />
  </div>
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <CardEaseCard />
  </div>
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <HourlyBreakdownCard />
  </div>
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <AnswerButtonsCard />
  </div>
  <div className="col-span-3 md:col-span-2 lg:col-span-1">
    <AddedCard />
  </div>
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