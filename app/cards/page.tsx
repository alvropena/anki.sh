import Footer from '@/components/footer'
import React from 'react'

function Page() {
    return (
        <div>
            Cards!
        </div>
    )
}

export default Page

// "use client"

// import React, { useState, useEffect } from 'react';
// import { useDeckStore } from '@/app/context/store';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { MoreDropdown } from '@/app/cards/more-dropdown';

// const MyComponent: React.FC = () => {
//     const { cards, addCard, removeCard, updateFrontCard, updateBackCard } = useDeckStore();
//     const [showBack, setShowBack] = useState(false);
//     const [cardVisible, setCardVisible] = useState(false);
//     const [currentCardIndex, setCurrentCardIndex] = useState(0);

//     const dummyCards = [
//         { front: '¿Qué es la oferta y la demanda?', back: 'La oferta y la demanda son conceptos fundamentales en economía. La demanda se refiere a la cantidad de bienes o servicios que los consumidores están dispuestos a comprar a diferentes precios. La oferta, por otro lado, representa la cantidad de bienes o servicios que los productores están dispuestos a ofrecer en el mercado a diferentes precios.' },
//         { front: 'Explique el concepto de inflación.', back: 'La inflación es el aumento generalizado y sostenido de los precios de bienes y servicios en una economía durante un período de tiempo. Cuando hay inflación, cada unidad de moneda compra menos bienes y servicios que en el pasado. La inflación puede ser causada por diversos factores, como el aumento de la demanda, los costos de producción más altos, o la expansión excesiva de la oferta monetaria.' },
//         { front: '¿Qué es el PIB?', back: 'El Producto Interno Bruto (PIB) es la medida del valor total de todos los bienes y servicios producidos en un país durante un período específico. Es una forma de evaluar y comparar el rendimiento económico de diferentes países o la evolución de una economía a lo largo del tiempo. El PIB se divide comúnmente en tres categorías: PIB a precios de mercado, PIB a costos de factores y PIB real.' },
//     ];


//     useEffect(() => {
//         // This effect will be triggered when showBack changes
//         if (showBack) {
//             setCardVisible(true);
//         }
//     }, [showBack]);

//     const handleShowCard = () => {
//         setShowBack(!showBack);
//     };

//     const handleNextCard = () => {
//         setCardVisible(false);
//         setShowBack(false);
//         setCurrentCardIndex((prevIndex) => (prevIndex + 1) % dummyCards.length);
//     };

//     return (
//         <div className="flex flex-col items-center">
//             <div className="mb-2">
//                 <strong>{dummyCards[currentCardIndex].front}</strong>
//             </div>
//             {cardVisible && showBack && (
//                 <div className="mb-2">
//                     {dummyCards[currentCardIndex].back}
//                 </div>
//             )}
//             <div className='flex flex-row items-center gap-4'>
//                 <Button variant={'outline'}>Edit</Button>
//                 {!cardVisible && (
//                     <Button onClick={handleShowCard} variant={'outline'}>Show Answer</Button>
//                 )}
//                 {cardVisible && (
//                     <div className='flex flex-row gap-4'>
//                         <div className='flex flex-col items-center'>
//                             <Label>&lt;1m</Label>
//                             <Button onClick={handleNextCard} variant={'outline'}>Again</Button>
//                         </div>
//                         <div className='flex flex-col items-center'>
//                             <Label>&lt;6m</Label>
//                             <Button onClick={handleNextCard} variant={'outline'}>Hard</Button>
//                         </div>
//                         <div className='flex flex-col items-center'>
//                             <Label>10m</Label>
//                             <Button onClick={handleNextCard} variant={'outline'}>Good</Button>
//                         </div>
//                         <div className='flex flex-col items-center'>
//                             <Label>5d</Label>
//                             <Button onClick={handleNextCard} variant={'outline'}>Easy</Button>
//                         </div>
//                     </div>
//                 )}
//                 <MoreDropdown />
//             </div>
//         </div>
//     );
// };

// export default MyComponent;
