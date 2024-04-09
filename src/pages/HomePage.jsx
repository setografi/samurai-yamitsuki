import React from "react";
import NavbarEvent from "../components/NavbarEvent";
import ParallexEvent from "../components/ParallexEvent";
import MusicPlayer from "../components/MusicPlayer";
import TextLeft from "../components/TextLeft";

function HomePage() {
  return (
    <>
      <NavbarEvent />
      <ParallexEvent />
      <MusicPlayer />
      <TextLeft />
    </>
  );
}

export default HomePage;
