import React, { useEffect, useRef, useState } from 'react';
import './Typewriter.css'; // Import your CSS file

const TypewriterComponent = () => {
  const aText = "Tu presencia aquí no es casualidad ... Es un regalo del destino... Bienvenido a tu nueva vida.";

  const iSpeed = 60;

  const [displayText, setDisplayText] = useState('');
  const charIndexRef = useRef(0);

  useEffect(() => {
    const typewriter = () => {
      if (charIndexRef.current < aText.length) {
        setDisplayText(aText.slice(0, charIndexRef.current + 1));
        charIndexRef.current += 1;
        setTimeout(typewriter, iSpeed);
      }
    };

    // Reset charIndexRef when the component mounts
    charIndexRef.current = 0;

    typewriter(); // Start the typewriter effect

  }, [aText, iSpeed]);

  return <div className="TypedText"id="typedtext">{displayText}</div>;
};

export default TypewriterComponent;
