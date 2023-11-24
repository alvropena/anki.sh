import React from 'react';

interface TextDisplayProps {
  textData: { slideNumber: number; text: string }[];
  onCardPress: (slideNumber: number) => void;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ textData, onCardPress }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Extracted Text</h2>
      {textData.map((slide, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-md shadow-md mb-4 cursor-pointer"
          onClick={() => onCardPress(slide.slideNumber)}
        >
          <h3 className="text-lg font-semibold mb-2">Slide {slide.slideNumber}</h3>
          <p>{slide.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TextDisplay;
