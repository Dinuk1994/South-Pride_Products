import React from 'react';
import { Tabs, Tab, useMediaQuery } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import SouthPrideProductLogo from "../../assets/South-Pride-Products.png"

const LinkTab = (props) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Tab
      component={Link}
      {...props}
      sx={{
        backgroundColor: '#B7E0FF', 
        color: 'black', 
        transition: 'background-color 0.5s ease', 
        borderRadius: '16px', 
        textTransform: "none",
        fontSize: isMobile ? '0.75rem' : '1rem', 
        minWidth: isMobile ? '60px' : '100px', 
        '&.Mui-selected': {
          backgroundColor: '#1E3E62', 
          color: 'white', 
        },
        margin: '0 4px', 
      }}
    />
  );
};

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 h-screen mobile:hidden bg-gray-200">
      <img src={SouthPrideProductLogo} alt="" />

      </div>
      <div className="col-span-10 mobile:col-span-12 p-1 h-screen mt-1 ">
        <Tabs
          value={value}
          // sx={{
          //   backgroundColor: '#73EC8B', 
          // }}
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
          variant="fullWidth" 
          TabIndicatorProps={{
            style: {
              backgroundColor: 'white', 
            },
          }}
        >
          <LinkTab label="All Products" to="/shopping/home/all-products" />
          <LinkTab label="Nuts" to="/shopping/home/nuts" />
          <LinkTab label="Spices" to="/shopping/home/spices" />
          <LinkTab label="Others" to="/shopping/home/other" />
        </Tabs>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
