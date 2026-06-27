import XLoader from "./XLoader";

// The complete array of your 12 custom style variants
export const LOADER_VARIANTS = [
   "pendulum" /* Variant 1: travelX */,
   "spin" /* Variant 2: collapse */,
   "pulse" /* Variant 3: teleport */,
   "draw-in" /* Variant 4: heartbeat & crossWhip */,
   "shift" /* Variant 5: hyperspin & slice */,
   "flop" /* Variant 6: pendulum keyframes */,
   "glitch" /* Variant 7: snake */,
   "target" /* Variant 8: radarcalc & sweep */,
   "bounce" /* Variant 9: dnaSync */,
   "alternate" /* Variant 10: spinSpiral & vortexRing */,
   "vortex" /* Variant 11: satelliteSpin & beadExpand */,
   "echo" /* Variant 12: eclipse */,
];

function App() {
   return (
      <div
         style={{
            display: "grid",
            placeItems: "center",
            height: "100vh",
            backgroundColor: "#f3f4f6",
         }}
      >
         {/* Simply swap "draw-in" with any string from the LOADER_VARIANTS array above */}
         <XLoader variant="draw-in" size={50} color="#3DA5A3" speed="1s" />
      </div>
   );
}

export default App;
