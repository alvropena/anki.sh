"use client";

import React, { useState } from 'react';
import { useDeckStore } from '@/app/context/store';
//shadcn-ui
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';

export function AddCard() {
    const { decks, addCardToDeck } = useDeckStore(state => ({ decks: state.decks, addCardToDeck: state.addCardToDeck }));
    const [selectedDeckId, setSelectedDeckId] = useState(decks.length > 0 ? decks[0].id : null);
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const handleAddCard = () => {
        if (selectedDeckId) {
            // Add the 'status' field with a default value of 'new'
            addCardToDeck(selectedDeckId, { id: Date.now(), front, back, status: 'new' });
            setFront('');
            setBack('');
        }
    };


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">Add</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new card</DialogTitle>
                    <DialogDescription>
                        Create a new card. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>

                <div>
                    <div className="flex flex-row items-center">
                        <Label>Type</Label>
                        <Button variant={'outline'}>Basic</Button>
                        <Label>Deck</Label>
                        <Button variant={'outline'}>Economics</Button>
                    </div>
                    <div className="mb-4">
                        <Label>Front</Label>
                        <Textarea placeholder="" value={front} onChange={(e) => setFront(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <Label className='mb-4'>Back</Label>
                        <Textarea placeholder="" value={back} onChange={(e) => setBack(e.target.value)} />
                    </div>

                    <div>
                        <Label htmlFor='tags'>Tags</Label>
                        <Input id="tags" value="" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex gap-4'>
                            <Button type="reset" variant={"outline"}>Help</Button>
                            <Button
                                type="submit"
                                variant={"outline"}
                                onClick={handleAddCard}
                            >
                                Add
                            </Button>
                            <Button type="submit" variant={"outline"}>History</Button>
                        </div>
                        <div>
                            <Button type="submit" variant={"outline"}>Close</Button>
                        </div>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
