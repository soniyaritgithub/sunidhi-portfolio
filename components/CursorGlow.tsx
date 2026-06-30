"use client";

import {
  useEffect,
  useState,
} from "react";

export default function CursorGlow() {

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (
      e: MouseEvent
    ) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );

  }, []);

  return (
    <div
      className="glow"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
      }}
    />
  );
}