"use client";

import React, { useState } from 'react';
import { useDeckStore } from '@/app/context/store'; // Adjust the import path as needed
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateDeck() {
    const [newDeckName, setNewDeckName] = useState('');
    const [parentDeckId, setParentDeckId] = useState<number | null>(null);
    const { decks, addDeck } = useDeckStore(state => ({ decks: state.decks, addDeck: state.addDeck }));

    const handleSaveClick = () => {
        if (newDeckName) {
            const newDeck = {
                id: Date.now(),
                name: newDeckName,
                cards: [],
                subdecks: []
            };

            addDeck(parentDeckId, newDeck);

            setNewDeckName('');
            setParentDeckId(null);
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setParentDeckId(e.target.value ? parseInt(e.target.value) : null);
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
                    <div className="items-center">
                        <Label htmlFor="deck-name">New deck name</Label>
                        <Input id="deck-name" value={newDeckName} onChange={(e) => setNewDeckName(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="parent-deck-list">Select Deck</Label>
                        <Select>
                            <SelectTrigger id="parent-deck-list" disabled={decks.length === 0}>
                                <SelectValue placeholder={decks.length > 0 ? "Select a deck" : "No decks available"} onChange={handleSelectChange} />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                {decks.map(deck => (
                                    <SelectItem key={deck.id} value={deck.id.toString()}>{deck.name}</SelectItem>
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