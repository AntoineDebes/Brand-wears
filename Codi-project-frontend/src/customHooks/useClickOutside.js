import { useRef, useEffect } from "react";

export let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (e) => {
      try {
        if (!domNode.current.contains(e.target)) {
          handler();
        }
      } catch {
        return;
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
