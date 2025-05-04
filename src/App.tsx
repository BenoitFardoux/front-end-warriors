import React from 'react';
import Header from './components/Header';
import Carroussel from './components/Carroussel/Carroussel';
const App : React.FC = () =>  {
  return (
    <>
    <Header></Header>
    <div>
        <Carroussel images={[
          {url: 'src/assets/logo_warriors.png', alt: 'Image 1'},
          {url: 'src/assets/logo_warriors.png', alt: 'Image 2'},
          {url: 'src/assets/logo_warriors.png', alt: 'Image 3'}
        ]} className="h-64 w-full"/>
    </div>
    </>
  );
}

export default App;