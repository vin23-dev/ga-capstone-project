import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css'

const HomePage = (props) => {
    return (
      <div className="HomePage">
        <NavBar
          user={props.user}
          handleLogout={props.handleLogout}
        />
        <footer className='header-footer'>
          {('Footer')}
        </footer>
      </div>
    );
  
  };
  
  export default HomePage;