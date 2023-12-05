import React from 'react'
import { Button } from '@/components/ui/button'
import { CreateDeck } from '@/components/create-deck';
import { InputFile } from '@/components/input-file';

function Footer() {
    return (
        <div className='flex gap-4 justify-center mt-4'>
            <Button variant={'outline'}>Get Shared</Button>
            <CreateDeck />
            <InputFile />
        </div>
    )
}


export default Footer;