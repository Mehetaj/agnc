import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={15}
      outerSize={18}
      color='76, 127, 252'
      outerAlpha={0.2}
      innerScale={1}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
        }
      ]}
    />
    
    </div>
  );
}