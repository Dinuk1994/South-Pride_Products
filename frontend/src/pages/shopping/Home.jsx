import React, { useEffect } from 'react';
import { Tabs, Tab, useMediaQuery } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SouthPrideProductLogo from "../../assets/South-Pride-Products.png"
import { CarouselElement } from '../../components/atoms/CarouselElement';

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
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (location.pathname === '/shopping/home') {
      navigate('/shopping/home/all-products');
    }
  }, [navigate]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 h-screen mobile:hidden bg-base-200">
        <img src={SouthPrideProductLogo} alt="south_pride_logo" />
        <div className='grid grid-cols-1 px-5 gap-y-5'>
          <div className='btn btn-ghost bg-shoppingBtn hover:bg-hoverShoppingBtn rounded-xl text-white shadow-lg shadow-gray-500'>
            About
          </div>
          <div className='btn btn-ghost bg-shoppingBtn hover:bg-hoverShoppingBtn rounded-xl text-white shadow-lg shadow-gray-500'>
            Recepies
          </div>
          <div className='btn btn-ghost bg-shoppingBtn hover:bg-hoverShoppingBtn rounded-xl text-white shadow-lg shadow-gray-500'>
            Return Policies
          </div>
          <div className='btn btn-ghost bg-shoppingBtn hover:bg-hoverShoppingBtn rounded-xl text-white shadow-lg shadow-gray-500'>
            Contact us
          </div>

        </div>

      </div>

      <div className="col-span-10 mobile:col-span-12  h-screen  ">
        <div className='grid grid-cols-1'>
          <div className=' '>
            <CarouselElement />
          </div>
          <div className=' bg-base-300'>
            <div className='mt-5'>
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
                    backgroundColor: '#C4DAD2',
                  },
                }}
              >
                <LinkTab label="All Products" to="/shopping/home/all-products" />
                <LinkTab label="Nuts" to="/shopping/home/nuts" />
                <LinkTab label="Spices" to="/shopping/home/spices" />
                <LinkTab label="Baking" to="/shopping/home/baking" />
                <LinkTab label="Herbs" to="/shopping/home/herbs" />
                <LinkTab label="Others" to="/shopping/home/other" />
              </Tabs>
              <Outlet />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
