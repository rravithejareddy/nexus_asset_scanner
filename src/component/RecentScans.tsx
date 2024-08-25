import React from 'react';

const RecentScans = () => {
  const searches = ['Scan 1', 'Scan 2', 'Scan 3']; 

  return (
    <ul style={styles.list}>
      {searches.map((search, index) => (
        <li key={index} style={styles.listItem}>
          {search}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: 'none' as const,
    padding: '0',
    textAlign: 'center' as const,
  },
  listItem: {
    padding: '5px 0',
  },
};

export default RecentScans;
