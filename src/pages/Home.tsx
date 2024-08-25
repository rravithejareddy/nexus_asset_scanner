import React from 'react'
import Header from '../component/Header';
import Button from '../component/Button';
import Description from '../component/Description';
import RecentScans from '../component/RecentScans';

const Home = () => {
    const handleQRScannerClick = () => {
        // Add QR Scanner functionality here
      };
    
      const handleOpenAppClick = () => {
        // Add Open App functionality here
      };
    
      return (
        <div style={styles.app}>
          <Header />
          <Button text="QR Scanner" onClick={handleQRScannerClick} />
          <Button text="Open App" onClick={handleOpenAppClick} />
          <Description />
          <RecentScans />
        </div>
      );
    };
    
    const styles = {
      app: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
      },
    };
export default Home;    