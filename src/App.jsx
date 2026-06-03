import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Portfolio from "./components/Portfolio";
import LiveWallpaper from "./components/LiveWallpaper";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <LiveWallpaper />
      {!entered && <SplashScreen onEnter={() => setEntered(true)} />}
      {entered && <Portfolio />}
    </>
  );
}
