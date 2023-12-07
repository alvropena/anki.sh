"use client"

import React from 'react';
import { useCardStore } from '@/app/context/store';

const MyComponent: React.FC = () => {
    const { cards, addCard, removeCard, updateFrontCard, updateBackCard } = useCardStore();

    // Example: Adding a new card
    const handleAddCard = () => {
        const newCard: Flashcard = { id: Date.now(), front: 'New Front', back: 'New Back' };
        addCard(newCard);
    };

    // Example: Removing a card
    const handleRemoveCard = (cardId: number) => {
        removeCard(cardId);
    };

    // Rest of your component code...

    return (
        <div>
            <h2>Flashcards</h2>
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                        <div>
                            <strong>ID:</strong> {card.id}
                        </div>
                        <div>
                            <strong>Front:</strong> {card.front}
                            <button onClick={() => updateFrontCard(card.id, 'Updated Front')}>
                                Update Front
                            </button>
                        </div>
                        <div>
                            <strong>Back:</strong> {card.back}
                            <button onClick={() => updateBackCard(card.id, 'Updated Back')}>
                                Update Back
                            </button>
                        </div>
                        <button onClick={() => handleRemoveCard(card.id)}>Remove Card</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddCard}>Add Card</button>
        </div>
    );
};

export default MyComponent;
