import React, { useEffect, useState } from 'react';
import { hot, setConfig } from "react-hot-loader";
import './App.scss';
import Group from './components/Group';

setConfig({
  showReactDomPatchNotification: false
});

const App = () => {
  const [listItems, setListItems] = useState([]);
  
  const sortList = (list) => {
    return list.sort((a, b) => a.listId - b.listId || a.id - b.id);
  };

  const groupTogether = (list, key) => {
    return list.reduce((groups, data) => {
      (groups[data[key]] = groups[data[key]] || []).push(data);
      return groups;
    }, {});
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api`)
      .then(res => res.json())
      .then(data => setListItems(groupTogether(sortList(
        data.filter((el) => el.name !== null && el.name !== '')
      ), 'listId')))
  }, []);

  return  (
    <div>
      <div className="main-container">
        {Object.keys(listItems).map((key) => {
          return <Group groupedList={listItems[key]} key={key} group={key} />
        })}
      </div>
    </div>
  )
  };

export default hot(module)(App);
