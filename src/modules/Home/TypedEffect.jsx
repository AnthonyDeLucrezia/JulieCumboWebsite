import React, { useEffect, useRef } from "react";
import Typed from "./typed.js";

const TypedEffect = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "Confort, souci du travail bien fait et confiance retrouvée, telles sont nos priorités.",
      ],
      typeSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

export { TypedEffect as default };
