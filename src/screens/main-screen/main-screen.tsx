import { AnimatePresence } from "motion/react";
import { WelcomePopup } from "./welcome-popup";
import { useEffect, useState } from "react";

export function MainScreen() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 1000);
  });

  return (
    <div className="bg-background w-screen h-screen">
      <AnimatePresence>{showPopup ? <WelcomePopup /> : null}</AnimatePresence>
    </div>
  );
}
