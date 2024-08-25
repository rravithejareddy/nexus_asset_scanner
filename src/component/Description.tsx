import React from 'react';

const Description: React.FC = () => {
  return (
    <p style={styles.description}>
      This app allows you to scan assets using QR codes and manage your recent searches efficiently.
    </p>
  );
};

const styles = {
  description: {
    textAlign: 'center' as const,
    padding: '10px',
  },
};

export default Description;
