import './Group.scss';
import React from 'react';
import Item from './Item';

const Group = ({ groupedList, group }) => (
  <div className="group-container">
    <input type="checkbox" />
    <h1>{`List ID : ${group}`}</h1>
    <div className="hidden">
      {groupedList.map((el) => <Item item={el} key={el.id} />)}
    </div>
  </div>
);

export default Group;
