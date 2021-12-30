import React, { useState } from "react";



const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(null);
  const [countIndex, setCountIndex] = useState(0);

  const onTitleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index);
    }
  }

  const onButtonClick = () => {
    const count = 1 + countIndex;

    setCountIndex(count)
  }


  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
          onClick={() => onTitleClick(index)}
          className={`title + ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content + ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
      <button
        onClick={() => onButtonClick()}
      >click me</button>
      <h1>Current Count: {countIndex}</h1>
    </div>
  )
};

export default Accordion;