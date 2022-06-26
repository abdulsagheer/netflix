import React from 'react'
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar'


const Hello = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie"/>
    </div>
  );
}

export default Hello