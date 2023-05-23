import React from 'react';

const Home = ({ snackCount, drinkCount }) => {
  return (
    <div>
      <h1>Welcome to Snack or Booze</h1>
      <p>Number of Snacks: {snackCount}</p>
      <p>Number of Drinks: {drinkCount}</p>
    </div>
  );
};

export default Home;
