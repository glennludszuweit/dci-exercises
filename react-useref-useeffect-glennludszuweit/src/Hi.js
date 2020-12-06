import React, { useRef, useEffect } from 'react';

function Hi() {
  const hiRef = useRef(null);

  useEffect(() => {
    hiRef.current.style.color === 'green'
      ? setInterval(() => (hiRef.current.style.color = 'red'), 2000)
      : setInterval(() => (hiRef.current.style.color = 'green'), 2000);
  }, [hiRef]);

  return (
    <div>
      <p style={{ color: 'green' }} ref={hiRef}>
        Hello World
      </p>
    </div>
  );
}

export default Hi;
