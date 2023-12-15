"use client";

import { useState } from 'react';
import { useDeckStore } from '@/app/context/store';
//shadcn-ui
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreateDeck() {
    const [newDeckName, setNewDeckName] = useState('');
    const { decks, addDeck } = useDeckStore(state => ({ decks: state.decks, addDeck: state.addDeck }));

    const handleSaveClick = () => {
        if (newDeckName) {
            const newDeck = {
                id: Date.now(), // Simple ID generation
                name: newDeckName,
                cards: []
            };

            addDeck(newDeck);

            // Log the updated decks list, including the new one
            console.log('Updated Decks List:', [...decks, newDeck]);

            setNewDeckName(''); // Reset the input field
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Create Deck</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create a new deck</DialogTitle>
                    <DialogDescription>
                        Create a new deck. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="items-center ">
                        <Label htmlFor="deck-name">New deck name</Label>
                        <Input id="deck-name" value={newDeckName} onChange={(e) => setNewDeckName(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="deck-list">Select Deck</Label>
                        <Select>
                            <SelectTrigger id="deck-list">
                                <SelectValue placeholder="Select a deck" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                {decks.map(deck => (
                                    <SelectItem key={deck.id} value={deck.name}>{deck.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="reset" variant="outline">Cancel</Button>
                    <Button type="submit" onClick={handleSaveClick}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
