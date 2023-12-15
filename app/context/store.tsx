import { create } from 'zustand';

type Flashcard = {
    id: number;
    front: string;
    back: string;
    status: 'new' | 'learn' | 'due'; // New status property
};

type Deck = {
    id: number;
    name: string;
    cards: Flashcard[];
};

type DeckStore = {
    decks: Deck[];
    addDeck: (newDeck: Deck) => void;
    removeDeck: (deckId: number) => void;
    addCardToDeck: (deckId: number, newCard: Flashcard) => void;
    removeCardFromDeck: (deckId: number, cardId: number) => void;
    updateCardInDeck: (deckId: number, updatedCard: Flashcard) => void;
    moveCardStatus: (deckId: number, cardId: number, newStatus: 'new' | 'learn' | 'due') => void; // Method to update card status
};

export const useDeckStore = create<DeckStore>((set) => ({
    decks: [],
    addDeck: (newDeck) => set((state) => ({ decks: [...state.decks, newDeck] })),
    removeDeck: (deckId) => set((state) => ({ decks: state.decks.filter((deck) => deck.id !== deckId) })),
    addCardToDeck: (deckId, newCard) =>
        set((state) => ({
            decks: state.decks.map((deck) =>
                deck.id === deckId ? { ...deck, cards: [...deck.cards, { ...newCard, status: 'new' }] } : deck
            ),
        })),
    removeCardFromDeck: (deckId, cardId) =>
        set((state) => ({
            decks: state.decks.map((deck) =>
                deck.id === deckId ? { ...deck, cards: deck.cards.filter((card) => card.id !== cardId) } : deck
            ),
        })),
    updateCardInDeck: (deckId, updatedCard) =>
        set((state) => ({
            decks: state.decks.map((deck) =>
                deck.id === deckId ? {
                    ...deck, cards: deck.cards.map((card) =>
                        card.id === updatedCard.id ? updatedCard : card
                    )
                } : deck
            ),
        })),
    moveCardStatus: (deckId, cardId, newStatus) =>
        set((state) => ({
            decks: state.decks.map((deck) =>
                deck.id === deckId ? {
                    ...deck, cards: deck.cards.map((card) =>
                        card.id === cardId ? { ...card, status: newStatus } : card
                    )
                } : deck
            ),
        })),
}));
