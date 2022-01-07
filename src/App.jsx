import React from 'react';
import { Accordion } from './components/Accordion';
import { Search } from './components/Search';

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

export const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};
