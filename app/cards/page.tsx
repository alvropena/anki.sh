"use client"

import React from 'react';
import { useCardStore } from '@/app/context/store';

const MyComponent: React.FC = () => {
    const { cards, addCard, removeCard, updateFrontCard, updateBackCard } = useCardStore();

    // Example: Adding a new card
    const handleAddCard = () => {
        const newCard = { id: Date.now(), front: 'New Front', back: 'New Back' };
        addCard(newCard);
    };

    // Example: Removing a card
    const handleRemoveCard = (cardId: number) => {
        removeCard(cardId);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Flashcards</h2>
            <ul>
                {cards.map((card) => (
                    <li key={card.id} className="mb-4 p-4 border border-gray-200 rounded">
                        <div className="mb-2">
                            <strong>ID:</strong> {card.id}
                        </div>
                        <div className="mb-2">
                            <strong>Front:</strong> {card.front}
                            <button
                                className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
                                onClick={() => updateFrontCard(card.id, 'Updated Front')}
                            >
                                Update Front
                            </button>
                        </div>
                        <div className="mb-2">
                            <strong>Back:</strong> {card.back}
                            <button
                                className="ml-2 px-2 py-1 bg-green-500 text-white rounded"
                                onClick={() => updateBackCard(card.id, 'Updated Back')}
                            >
                                Update Back
                            </button>
                        </div>
                        <button
                            className="px-2 py-1 bg-red-500 text-white rounded"
                            onClick={() => handleRemoveCard(card.id)}
                        >
                            Remove Card
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;
