"use client";
// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";

// Define the type for the cursor position
interface Position {
  x: number;
  y: number;
}

export const CursorDotSingle: React.FC = () => {
  // State to store the cursor's position
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  // Effect to update the cursor's position on mouse move
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div>
      {/* The dot that follows the cursor */}
      <div
        style={{
          position: "fixed",
          width: "10px",
          height: "10px",
          backgroundColor: "#009e66",
          borderRadius: "50%",
          pointerEvents: "none",
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

// export const CursorDotSingle = () => {
//   const [dots, setDots] = useState([]);

//   const handleClick = (e) => {
//     const newDots = [];
//     const numDots = 6; // Number of dots to generate

//     // Generate dots at the click position
//     for (let i = 0; i < numDots; i++) {
//       const angle = (Math.PI * 2 * i) / numDots; // Spread dots evenly in a circular burst
//       const velocity = 100 + Math.random() * 50; // Random velocity
//       const lifetime = 500 + Math.random() * 500; // Random lifetime for each dot

//       newDots.push({
//         id: Math.random(),
//         x: e.clientX,
//         y: e.clientY,
//         angle,
//         velocity,
//         lifetime,
//         startTime: Date.now(),
//       });
//     }

//     setDots((prevDots) => [...prevDots, ...newDots]);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((prevDots) =>
//         prevDots.filter((dot) => Date.now() - dot.startTime < dot.lifetime)
//       );
//     }, 16); // 60 FPS update

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       style={{ height: "100vh", width: "100vw", position: "relative" }}
//       onClick={handleClick}
//     >
//       {dots.map((dot) => {
//         const elapsedTime = Date.now() - dot.startTime;
//         const progress = elapsedTime / dot.lifetime;
//         const moveX = Math.cos(dot.angle) * dot.velocity * progress;
//         const moveY = Math.sin(dot.angle) * dot.velocity * progress;

//         return (
//           <div
//             key={dot.id}
//             style={{
//               position: "fixed",
//               left: dot.x + moveX,
//               top: dot.y + moveY,
//               width: "10px",
//               height: "10px",
//               backgroundColor:"#009e66",
//               borderRadius: "50%",
//               pointerEvents: "none",
//               transform: "translate(-50%, -50%)",
//               opacity: 1 - progress, // Fade out over time
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

interface Dot {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
  lifetime: number;
  startTime: number;
}

export const CursorDot: React.FC = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  const handleClick = (e: MouseEvent) => {
    const newDots: Dot[] = [];
    const numDots = 6; // Number of dots to generate

    // Generate dots at the click position
    for (let i = 0; i < numDots; i++) {
      const angle = (Math.PI * 2 * i) / numDots; // Spread dots evenly in a circular burst
      const velocity = 100 + Math.random() * 50; // Random velocity
      const lifetime = 500 + Math.random() * 500; // Random lifetime for each dot

      newDots.push({
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        angle,
        velocity,
        lifetime,
        startTime: Date.now(),
      });
    }

    setDots((prevDots) => [...prevDots, ...newDots]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) =>
        prevDots.filter((dot) => Date.now() - dot.startTime < dot.lifetime)
      );
    }, 16); // 60 FPS update

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add global click event listener
    const clickListener = (e: MouseEvent) => handleClick(e);
    window.addEventListener("click", clickListener);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("click", clickListener);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed", // Fix to the whole viewport
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Allows clicks to pass through this div
        zIndex: 9999, // Ensure it appears above everything else
      }}
    >
      {dots.map((dot) => {
        const elapsedTime = Date.now() - dot.startTime;
        const progress = elapsedTime / dot.lifetime;
        const moveX = Math.cos(dot.angle) * dot.velocity * progress;
        const moveY = Math.sin(dot.angle) * dot.velocity * progress;

        return (
          <div
            key={dot.id}
            style={{
              position: "fixed",
              left: dot.x + moveX,
              top: dot.y + moveY,
              width: "10px",
              height: "10px",
              backgroundColor: "#009e66",
              borderRadius: "50%",
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
              opacity: 1 - progress, // Fade out over time
            }}
          />
        );
      })}
    </div>
  );
};
