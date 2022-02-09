import { Accordion } from './components/Accordion';
import { Search } from './components/Search';
import { Dropdown } from './components/Dropdown';
import { useState } from 'react';
import { Translate } from './components/Translate';
import { Route } from './components/Route';
import { Header } from './components/Header';

const items = [
  {
    title: 'What is react?',
    content: 'React is a front end js framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library amon engineers',
  },
  {
    title: 'How do you use React?',
    content: 'By creating components',
  },
];

const options = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'A shade of Blue', value: 'blue' },
];

export const App = () => {
  const [selected, setSelected] = useState(options[0]); // we provide this state down to the Dropdown as a prop

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
