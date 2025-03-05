
import React from 'react'

const App = () => {
  return (
    <div>
      app
    </div>
  )
}

export default App





































// import React, { useState } from "react";

// const RandomCircles = () => {
//   const [circles, setCircles] = useState([]);
//   const [bgColor, setBgColor] = useState("white");

//   const handleClick = (event) => {
//     const radius = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
//     const newCircle = {
//       id: Date.now(),
//       x: event.clientX,
//       y: event.clientY,
//       radius,
//     };

//     setCircles((prevCircles) => {
//       let updatedCircles;
//       if (prevCircles.length >= 2) {
//         updatedCircles = [newCircle];
//       } else {
//         updatedCircles = [...prevCircles, newCircle];
//       }
//       checkIntersection(updatedCircles);
//       return updatedCircles;
//     });
//   };

//   const checkIntersection = (circles) => {
//     if (circles.length < 2) {
//       setBgColor("white");
//       return;
//     }

//     const [circle1, circle2] = circles;
//     const distance = Math.sqrt(
//       Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2)
//     );

//     if (distance < circle1.radius + circle2.radius) {
//       setBgColor("red"); // Change background to red if circles intersect
//     } else {
//       setBgColor("white"); // Default background
//     }
//   };

//   return (
//     <div
//       onClick={handleClick}
//       style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden", backgroundColor: bgColor }}
//     >
//       {circles.map((circle) => (
//         <div
//           key={circle.id}
//           style={{
//             position: "absolute",
//             width: circle.radius * 2,
//             height: circle.radius * 2,
//             borderRadius: "50%",
//             backgroundColor: "blue",
//             left: circle.x - circle.radius,
//             top: circle.y - circle.radius,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default RandomCircles;

// import React, { useState } from "react";

// const RandomCircles = () => {
//   const [circles, setCircles] = useState([]);

//   const handleClick = (event) => {
//     // const radius = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
//     const radius = Math.floor(Math.random() * (200 - 20 +1) + 20);
//     const newCircle = {
//       id: Date.now(),
//       x: event.clientX,
//       y: event.clientY,
//       radius,
//     };

//     setCircles((prevCircles) => {
//       if (prevCircles.length >= 2) {
//         return [newCircle];
//       }
//       return [...prevCircles, newCircle];
//     });
//   };

//   return (
//     <div onClick={handleClick} style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}>
//       {circles.map((circle) => (
//         <div
//           key={circle.id}
//           style={{
//             position: "absolute",
//             width: circle.radius * 2,
//             height: circle.radius * 2,
//             borderRadius: "50%",
//             backgroundColor: "blue",
//             left: circle.x - circle.radius,
//             top: circle.y - circle.radius,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default RandomCircles;

// import React, { useState } from 'react';

// // Function to generate a random radius between 20 and 200 pixels
// const getRandomRadius = () => Math.floor(Math.random() * (200 - 20 + 1)) + 20;

// // Function to calculate the distance between two points
// const calculateDistance = (x1, y1, x2, y2) => {
//   const dx = x2 - x1;
//   const dy = y2 - y1;
//   return Math.sqrt(dx * dx + dy * dy);
// };

// const CircleApp = () => {
//   const [circles, setCircles] = useState([]);
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   const handleClick = (e) => {
//     const radius = getRandomRadius();
//     const newCircle = {
//       x: e.clientX,
//       y: e.clientY,
//       radius,
//     };

//     let updatedCircles = [...circles, newCircle];

//     // If more than two circles, reset the circles array
//     if (updatedCircles.length > 2) {
//       updatedCircles = [newCircle];
//       setIsIntersecting(false);
//     } else if (updatedCircles.length === 2) {
//       // Check for intersection
//       const [circle1, circle2] = updatedCircles;
//       const distance = calculateDistance(
//         circle1.x,
//         circle1.y,
//         circle2.x,
//         circle2.y
//       );
//       if (distance < circle1.radius + circle2.radius) {
//         setIsIntersecting(true);
//       } else {
//         setIsIntersecting(false);
//       }
//     }

//     setCircles(updatedCircles);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       style={{
//         width: '100vw',
//         height: '100vh',
//         backgroundColor: isIntersecting ? 'red' : 'white',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {circles.map((circle, index) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             left: circle.x - circle.radius,
//             top: circle.y - circle.radius,
//             width: circle.radius * 2,
//             height: circle.radius * 2,
//             borderRadius: '50%',
//             backgroundColor: 'blue',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CircleApp;






// Write a code using React to create a circle of random radius within the closed interval [20px, 200px] with the center at the coordinates wherever the user clicks on the viewport. Additionally, there should be utmost 2 circles on the screen. When this limit is exceeded, all circles should vanish. Furthermore, you’ll get bonus points for determining if the circles are intersecting and based on that changing the background color of the viewport.


// import React, { useState } from 'react';

// // Function to generate a random radius between 20 and 200 pixels
// const getRandomRadius = () => Math.floor(Math.random() * (200 - 20 + 1)) + 20;

// // Function to calculate the distance between two points
// const calculateDistance = (x1, y1, x2, y2) => {
//   const dx = x2 - x1;
//   const dy = y2 - y1;
//   return Math.sqrt(dx * dx + dy * dy);
// };

// const CircleApp = () => {
//   const [circles, setCircles] = useState([]);
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   const handleClick = (e) => {
//     const radius = getRandomRadius();
//     const newCircle = {
//       x: e.clientX,
//       y: e.clientY,
//       radius,
//     };

//     let updatedCircles = [...circles, newCircle];

//     // If more than two circles, reset the circles array
//     if (updatedCircles.length > 2) {
//       updatedCircles = [newCircle];
//       setIsIntersecting(false);
//     } else if (updatedCircles.length === 2) {
//       // Check for intersection
//       const [circle1, circle2] = updatedCircles;
//       const distance = calculateDistance(
//         circle1.x,
//         circle1.y,
//         circle2.x,
//         circle2.y
//       );
//       if (distance < circle1.radius + circle2.radius) {
//         setIsIntersecting(true);
//       } else {
//         setIsIntersecting(false);
//       }
//     }

//     setCircles(updatedCircles);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       style={{
//         width: '100vw',
//         height: '100vh',
//         backgroundColor: isIntersecting ? 'red' : 'white',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {circles.map((circle, index) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             left: circle.x - circle.radius,
//             top: circle.y - circle.radius,
//             width: circle.radius * 2,
//             height: circle.radius * 2,
//             borderRadius: '50%',
//             backgroundColor: 'blue',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CircleApp;









// import React, { useState } from 'react';

// // Function to generate a random radius between 20 and 200 pixels
// const getRandomRadius = () => Math.floor(Math.random() * (200 - 20 + 1)) + 20;

// // Function to calculate the distance between two points
// const calculateDistance = (x1, y1, x2, y2) => {
//   const dx = x2 - x1;
//   const dy = y2 - y1;
//   return Math.sqrt(dx * dx + dy * dy);
// };

// const CircleApp = () => {
//   const [circles, setCircles] = useState([]);
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   const handleClick = (e) => {
//     const radius = getRandomRadius();
//     const newCircle = {
//       x: e.clientX,
//       y: e.clientY,
//       radius,
//     };

//     let updatedCircles = [...circles, newCircle];

//     // If more than two circles, reset the circles array
//     if (updatedCircles.length > 2) {
//       updatedCircles = [newCircle];
//       setIsIntersecting(false);
//     } else if (updatedCircles.length === 2) {
//       // Check for intersection
//       const [circle1, circle2] = updatedCircles;
//       const distance = calculateDistance(
//         circle1.x,
//         circle1.y,
//         circle2.x,
//         circle2.y
//       );
//       if (distance < circle1.radius + circle2.radius) {
//         setIsIntersecting(true);
//       } else {
//         setIsIntersecting(false);
//       }
//     }

//     setCircles(updatedCircles);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       style={{
//         width: '100vw',
//         height: '100vh',
//         backgroundColor: isIntersecting ? 'red' : 'white',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {circles.map((circle, index) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             left: circle.x - circle.radius,
//             top: circle.y - circle.radius,
//             width: circle.radius * 2,
//             height: circle.radius * 2,
//             borderRadius: '50%',
//             backgroundColor: 'blue',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CircleApp;