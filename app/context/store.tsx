import create from 'zustand';

type Flashcard = {
    id: number;
    front: string;
    back: string;
};

type CardStore = {
    cards: Flashcard[];
    addCard: (newCard: Flashcard) => void;
    removeCard: (cardId: number) => void;
    updateFrontCard: (cardId: number, front: string) => void;
    updateBackCard: (cardId: number, back: string) => void;
};

export const useCardStore = create<CardStore>((set) => ({
    cards: [],
    addCard: (newCard) => set((state) => ({ cards: [...state.cards, newCard] })),
    removeCard: (cardId) => set((state) => ({ cards: state.cards.filter((card) => card.id !== cardId) })),
    updateFrontCard: (cardId, front) =>
        set((state) => ({
            cards: state.cards.map((card) =>
                card.id === cardId ? { ...card, front } : card
            ),
        })),
    updateBackCard: (cardId, back) =>
        set((state) => ({
            cards: state.cards.map((card) =>
                card.id === cardId ? { ...card, back } : card
            ),
        })),
}));
