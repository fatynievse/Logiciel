import React from 'react';
import { Navbar, Specificites,Banner,Blog,Connectez,Specificites2} from '../src/index.';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
      <Banner />
      <Specificites/>
      <Specificites2/>
      <Connectez/>

      <Blog/>
    </div>
  );
}

export default Home;


