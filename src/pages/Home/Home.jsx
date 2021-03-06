import React from 'react'
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar'
import List from '../../components/List/List';


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home