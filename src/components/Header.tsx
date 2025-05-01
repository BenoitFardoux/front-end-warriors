import React from 'react';
import NavbarLink from './navbar/navLink';
const Header : React.FC= () => {
  return (
    <header className=' border-b-2 border-primary'>
      <nav className='w-full'>
        <ul className='flex justify-evenly items-stretch'>
          <NavbarLink text='Accueil' link='/' />
          <NavbarLink text='À propos'  link='/about'/>
          <NavbarLink text='Tournois' link='/tournois' />
          <NavbarLink text='Partenaires' link='/partenaires'/>
          <NavbarLink text='Jeux' link='/jeux'/>
          <NavbarLink text='Contact' link='/contact'/>
        </ul>
      </nav>
    </header>
  );
}

export default Header;