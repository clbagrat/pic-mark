import { useEffect, useRef, useState } from "react";
import './mark.css';

type MarkProps = {
  x: number,
  y: number,
  text: string
};

export const Mark = ({ x, y, text }: MarkProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsVisible(true)
  }, []);

  useEffect(() => {
    document.body.addEventListener('mousedown', (e: MouseEvent) => {
      if (!e.composedPath().includes(ref.current!)) {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div ref={ref} className="mark" style={{ left: x, top: y }} onClick={(e) => {
      setIsVisible(true);
      e.stopPropagation();
    }}>
      <div className="point" />
      <div className={`text ${isVisible && 'visible'}`}>{text}</div>
    </div>
  );
};
