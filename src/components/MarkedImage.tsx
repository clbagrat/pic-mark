import { FC, MouseEventHandler, useState } from 'react'
import {Mark} from './Mark';
import './markedImage.css';

type MarkedImageProps = {
  src: string;
}

type MarkData = {
  x: number,
  y: number,
  text: string
}

export const MarkedImage: FC<MarkedImageProps> = ({src}) => {
  const [marks, setMarks] = useState<MarkData[]>([])

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const text = window.prompt?.("name?");

    if (text) {
      setMarks([
        ...marks,
        {
          x: e.clientX,
          y: e.clientY,
          text,
        },
      ]);
    }
  }

  return (
    <div className="markedImageContainer" onClick={handleClick}>
      {marks.map((mark, i) => {
        return <Mark {...mark} key={i}/> 
      })}
      <img className="image" src={src} />
    </div>
  );
}
