import { useState } from "react";

type Link={
  id: number;
  url: string;
  text: string;
}
const navinks = [
  {
    id: 1,
    url: 'some url',
    text: 'some Text'
  },
  {
    id: 2,
    url: 'some url',
    text: 'some Text'
  },
  {
    id: 3,
    url: 'some url',
    text: 'some Text'
  },
]

function Component() {
  // const [text,setText] = useState('shakeAndBake');
  const [number,setNumber] = useState(1);
  const [list,setList] = useState<string[]>([]);
  const [links,setLinks] = useState(navinks);
  return (
    <div>
      <h2 className='mb-1'>React & Typescript</h2>
      <button className="btn btn-center" onClick={()=>{
        // setText("typeScript")
        setNumber(34)
        setList(['Hello','world'])
        setLinks([...links,{id: 4,url: 'hello',text:'wolrd'}])
      }}>click me</button>
      <h2>State</h2>
    </div>
  );
}
export default Component;
