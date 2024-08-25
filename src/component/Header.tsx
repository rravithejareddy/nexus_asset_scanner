import React from 'react';
import logo from '../data/Images/logo.png'; 

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1>Asset Scanner</h1>
      <img src={logo} alt="Logo" style={styles.logo} />
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'center' as const,
    padding: '20px',
  },
  logo: {
    width: '100px',
    height: '100px',
  },
};

export default Header;
