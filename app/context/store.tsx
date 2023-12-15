import { create } from 'zustand';

type Flashcard = {
    id: number;
    front: string;
    back: string;
    status: 'new' | 'learn' | 'due';
};

type Deck = {
    id: number;
    name: string;
    cards: Flashcard[];
    subdecks: Deck[];
};

type DeckStore = {
    decks: Deck[];
    addDeck: (parentId: number | null, newDeck: Deck) => void;
    removeDeck: (deckId: number) => void;
    addCardToDeck: (deckId: number, newCard: Flashcard) => void;
    removeCardFromDeck: (deckId: number, cardId: number) => void;
    updateCardInDeck: (deckId: number, updatedCard: Flashcard) => void;
    moveCardStatus: (deckId: number, cardId: number, newStatus: 'new' | 'learn' | 'due') => void;
};

const findAndAddSubdeck = (decks: Deck[], parentId: number, newDeck: Deck): Deck[] => {
    return decks.map(deck => {
        if (deck.id === parentId) {
            return { ...deck, subdecks: [...deck.subdecks, newDeck] };
        } else {
            return { ...deck, subdecks: findAndAddSubdeck(deck.subdecks, parentId, newDeck) };
        }
    });
};

const recursivelyRemoveDeck = (decks: Deck[], deckId: number): Deck[] => {
    return decks.reduce<Deck[]>((acc, deck) => {
        if (deck.id !== deckId) {
            const updatedSubdecks = recursivelyRemoveDeck(deck.subdecks, deckId);
            return [...acc, { ...deck, subdecks: updatedSubdecks }];
        }
        return acc;
    }, []);
};


export const useDeckStore = create<DeckStore>((set) => ({
    decks: [],
    addDeck: (parentId, newDeck) => set((state) => {
        if (parentId !== null && !state.decks.some(deck => deck.id === parentId)) {
            console.error("Parent deck not found.");
            return state;
        }
        if (parentId === null) {
            return { decks: [...state.decks, { ...newDeck, subdecks: [] }] };
        } else {
            return { decks: findAndAddSubdeck(state.decks, parentId, { ...newDeck, subdecks: [] }) };
        }
    }),
    removeDeck: (deckId) => set((state) => ({
        decks: recursivelyRemoveDeck(state.decks, deckId)
    })),
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
