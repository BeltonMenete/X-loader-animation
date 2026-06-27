import { memo, useMemo } from "react";
import "./XLoader.css";

const XLoader = ({
   variant = "pendulum", // Default style if none is passed
   size = 35,
   color = "black",
   speed = "1.2s",
   bgOpacity = 0.1,
}) => {
   // useMemo garante que o objeto de estilos só seja recalculado se as props mudarem
   const styleVariables = useMemo(
      () => ({
         "--uib-size": `${size}px`,
         "--uib-color": color,
         "--uib-speed": speed,
         "--uib-bg-opacity": bgOpacity,
      }),
      [size, color, speed, bgOpacity],
   );

   return (
      <svg
         className="x-container"
         data-variant={variant} /* Triggers the specific CSS animation style */
         viewBox="0 0 35 35"
         style={styleVariables}
         aria-label="Carregando..."
         role="img"
      >
         {/* TRACK (Fundo) */}
         <line
            className="track"
            x1="5"
            y1="5"
            x2="30"
            y2="30"
            strokeWidth="5"
            strokeLinecap="round"
         />
         <line
            className="track"
            x1="30"
            y1="5"
            x2="5"
            y2="30"
            strokeWidth="5"
            strokeLinecap="round"
         />

         {/* CAR (Animação) */}
         <line
            className="car bar-1"
            x1="5"
            y1="5"
            x2="30"
            y2="30"
            strokeWidth="5"
            strokeLinecap="round"
            pathLength="100"
         />
         <line
            className="car bar-2 delay"
            x1="30"
            y1="5"
            x2="5"
            y2="30"
            strokeWidth="5"
            strokeLinecap="round"
            pathLength="100"
         />
      </svg>
   );
};

// memo evita re-renders inúteis se as propriedades forem idênticas
export default memo(XLoader);
