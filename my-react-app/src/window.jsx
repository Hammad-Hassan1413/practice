import React, { useState, useEffect } from "react";

function Window() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  });
  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default Window;
