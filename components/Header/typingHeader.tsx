// import React, { useEffect, useRef } from 'react';
// // import Typed from 'typed.js';

// interface TypedProps {
//   strings: string[];
//   typeSpeed?: number;
//   loop?: boolean;
//   showCursor?: boolean;
//   backDelay?: number;
//   backSpeed?: number
// }

// const TypedComponent: React.FC<TypedProps> = ({ strings, typeSpeed = 30, loop = true, showCursor = false, backDelay = 5000,backSpeed= 10 }) => {
//   const typedElement = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (typedElement.current) {
//       const typedInstance = new Typed(typedElement.current, {
//         strings,
//         typeSpeed,
//         loop,
//         showCursor,
//         backDelay,
//         backSpeed
//       });

//       return () => {
//         typedInstance.destroy();
//       };
//     }
//   }, [strings, typeSpeed, loop, showCursor, backDelay,backSpeed]);

//   return <div className="element" ref={typedElement}></div>;
// };

// export default TypedComponent;
