import Search from '@/components/search'
import { Heart, Flag, Clock, Tag, Circle, BookMarked } from 'lucide-react'
import React from 'react'


function Browse() {
    return (
        <div className='ml-4'>
            <Search />
            <div className='flex flex-row items-center gap-2 mt-2'>
                <Heart size={18} />
                <p>Saved Searches</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <Clock size={18} />
                <p>Today</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <Flag size={18} />
                <p>Flags</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <Circle size={18} />
                <p>Card State</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <BookMarked size={18} />
                <p>Decks</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <p>Note Types</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <Tag size={18} />
                <p>Tags</p>
            </div>
        </div>
    )
}

export default Browse