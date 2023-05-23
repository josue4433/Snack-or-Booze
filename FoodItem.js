import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items, itemType }) => {
  return (
    <div>
      <h1>{itemType}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/${itemType}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
