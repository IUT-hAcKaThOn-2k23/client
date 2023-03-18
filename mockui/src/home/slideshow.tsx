import { useState } from 'react';

interface Card {
  title: string;
  imageSrc: string;
}

const cards: Card[] = [
  { title: 'Card 1', imageSrc: 'https://via.placeholder.com/150' },
  { title: 'Card 2', imageSrc: 'https://via.placeholder.com/150' },
  { title: 'Card 3', imageSrc: 'https://via.placeholder.com/150' },
  { title: 'Card 4', imageSrc: 'https://via.placeholder.com/150' },
  { title: 'Card 5', imageSrc: 'https://via.placeholder.com/150' },
  { title: 'Card 6', imageSrc: 'https://via.placeholder.com/150' },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handlePrevClick}>Prev</button>
      <div style={{ display: 'flex', overflowX: 'scroll', scrollBehavior: 'smooth' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              display: 'inline-block',
              width: '25%',
              margin: '0 10px',
              backgroundColor: index === currentIndex ? 'lightblue' : 'white',
            }}
          >
            <h2>{card.title}</h2>
            <img src={card.imageSrc} alt={card.title} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Slideshow;
