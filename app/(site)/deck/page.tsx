import { CustomStudy } from '@/components/custom-study'
import { DescriptionDeck } from '@/components/description-deck'
import { OptionsDialog } from '@/components/options-dialog'
import { StudyNowDialog } from '@/components/study-now-dialog'
import React from 'react'

function Deck() {
    return (
        <div>
            <h1 className='text-xl font-bold'>Economics</h1>
            <div className='flex flex-row items-center justify-center gap-10'>
                <div>
                    <p>New: { }</p>
                    <p>Learning: { }</p>
                    <p>To review: { }</p>
                </div>
                <StudyNowDialog />
            </div>
            <div className='flex flex-row items-center justify-center gap-4 m-4'>
                <OptionsDialog />
                <CustomStudy />
                <DescriptionDeck />
            </div>
        </div>
    )
}

export default Deck