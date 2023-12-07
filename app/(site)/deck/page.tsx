import { CustomStudy } from '@/components/custom-study'
import { DescriptionDeck } from '@/components/description-deck'
import { OptionsDialog } from '@/components/options-dialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
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
                <Link href={'/cards'}>
                    <Button>Study Now</Button>
                </Link>
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