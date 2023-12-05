import Search from '@/components/search';
import { Heart, Flag, Clock, Tag, Circle, BookMarked } from 'lucide-react';
import React from 'react';

function Browse() {
    return (
        <div>
            <div className='flex justify-center items-center m-4'>
                <p>Browse (1 of 396 cards selected)</p>
            </div>
            <div className="grid grid-cols-12 gap-4 m-4">

                {/* Left Sidebar (2 columns) */}
                <div className="col-span-2">
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

                {/* Middle Content (6 columns) */}
                <div className="col-span-8">
                    <p>Holaaaaa</p>
                </div>

                {/* Right Sidebar (4 columns) */}
                <div className="col-span-2">
                    {/* Add content for the right sidebar here */}
                    <div className="flex flex-row items-center gap-2">
                        <p>Right Sidebar</p>
                    </div>
                    {/* Add other right sidebar content here */}
                </div>
            </div>
        </div>
    );
}

export default Browse;
