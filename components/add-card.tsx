import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
import { useCardStore } from '@/app/context/store'; // Import your store

export function AddCard() {
    const { addCard } = useCardStore(); // Get the addCard function from your store
    const [front, setFront] = useState<string>('');
    const [back, setBack] = useState<string>('');

    const handleAddCard = () => {
        addCard({ id: Date.now(), front, back });
        setFront('');
        setBack('');
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
