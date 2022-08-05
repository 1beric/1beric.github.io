import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import TerminalIcon from "@mui/icons-material/Terminal";
import GamepadIcon from "@mui/icons-material/Gamepad";

const projects = {
  BERYL_SONGS: {
    id: "BERYL_SONGS",
    title: "Beryl Song-Writing Studio",
    language: "React",
    date: "April 2022",
    description:
      "Beryl Song-Writing Studio is more than just a 'smart timer' for artists — musicians, vocalists, and producers — to have a guideline on how to spend their time. The web app provides artists with the ability to customize their flow and set limits on how long to spend on certain aspects of their song-writing journey. It also provides workspaces such as a machine-learning-aided lyric generator and a notes tab for organizing thoughts.",
    icon: <MusicNoteIcon />,
    website: "https://1beric.github.io/beryl-song-writing-studio",
    github: "https://github.com/1beric/beryl-song-writing-studio",
  },
  BERYL_WEB_GAMES: {
    id: "BERYL_WEB_GAMES",
    title: "Beryl Web Games",
    language: "React",
    date: "May 2022",
    description:
      "What started as a 'free-form workspace' for me to develop my react skills became a web game studio with various games implemented. The readME.md file on the github repository contains my aspirations for future games to implement, but it current houses games such as mastermind, farm-life, and an abstract art creator. Through the many takeaways I have from the app, the biggest one I have learned is code organization and how important it is to be consistent between projects.",
    icon: <VideogameAssetIcon />,
    website: "https://1beric.github.io/beryl-web-games",
    github: "https://github.com/1beric/beryl-web-games",
  },
  BERYL_ENGINE: {
    id: "BERYL_ENGINE",
    title: "Beryl Engine",
    language: "Java",
    date: "March 2020",
    description:
      "Beryl Game Engine is a 3D game engine written in Java with the intent to introduce users to game design. It utilizes a complex rendering system that is easy-to-use through the exposure of high-level classes. An Entity Component System (ECS) is the heart of the project, allowing the user to create custom components with ease and start new projects without hassle. A library of components is also available in the game engine for users to take advantage of without needing to implement everything on their own.",
    icon: <GamepadIcon />,
    website: "https://github.com/1beric/BerylEngine",
    github: "https://github.com/1beric/BerylEngine",
  },
  "C--_COMPILER": {
    id: "C--_COMPILER",
    title: "C-- Compiler",
    language: "C",
    date: "January 2021",
    description:
      "I wrote a grammar using a limited feature-set of C to teach myself more about compilers. While designing and implementing the compiler, I learned about LL(1) parsing, syntax analysis, designing an efficient symbol table with “smart” type checking, and many three-address code optimizations—register allocation/reallocation, data-flow analysis, jump to jump elimination, common subexpression elimination, loop optimizations, and inlining. In the future, I plan to create a compiler for an object-oriented programming (OOP) language to understand the nuances between compiling OOP and procedural languages.",
    icon: <TerminalIcon />,
    website: "https://github.com/1beric/C--Compiler",
    github: "https://github.com/1beric/C--Compiler",
  },
};

export default projects;
