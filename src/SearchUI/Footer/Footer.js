import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Twitter from '@mui/icons-material/Twitter';
import Email from '@mui/icons-material/Email';
import Info from '@mui/icons-material/Info';

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Contact us"
        value="Email"
        icon={<Email />}
      />
      <BottomNavigationAction
        label="About us"
        value="Info"
        icon={<Info />}
      />
      <BottomNavigationAction label="Follow us" value="twitter" icon={<Twitter />} />
    </BottomNavigation>
  );
}


