import React from 'react'
import { Button } from '@/components/ui/button'
import { CreateDeck } from './create-deck';

function Footer() {
    return (
        <div className='flex gap-4 justify-center mt-4'>
            <Button variant={'outline'}>Get Shared</Button>
            <CreateDeck />
            <Button variant={'outline'}>Import File</Button>
        </div>
    )
}


export default Footer;