import React, { useState } from 'react';
// import Accordion from './components/accordion';
// import Search from './components/search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is react?',
    content: 'React is a front end Js framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a fave js library amoung engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
]

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
]

export default () => {

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options} />
      <Translate />
    </div >
  );
};

/*   <Accordion items={items} />
     <Search /> 

*/
