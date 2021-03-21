import React from 'react';

import Header from './../ui/Header';
import Main from './../ui/Main';
import Footer from './../ui/Footer';

function Home() {
  
  React.useEffect(() => {
    fetch('/.netlify/functions/hello')
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error(err))
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
