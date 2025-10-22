import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <div> app js</div>
    </>
  );
}

export default App;
