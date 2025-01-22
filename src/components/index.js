import {useState} from 'react';
import './index.css';

const data = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces, maintained by Facebook.",
    },
    {
      title: "What are hooks?",
      content:
        "Hooks are functions that let you use React state and lifecycle features in functional components.",
    },
    {
      title: "What is JSX?",
      content:
        "JSX is a syntax extension for JavaScript that looks similar to XML or HTML, used in React to describe the UI.",
    },
  ];

const Accordion = () =>{
    const [activeIndex , setActiveIndex] = useState(null);
    
    return (
        <>
            <h3>Accordion Application</h3>
            <ul>
                {data.map((item , index) => <li>
                    <h4 key={index}>{item.title}</h4>
                    <span>+</span>
                    </li>)}

            </ul>
        </>
    )
}

export default Accordion