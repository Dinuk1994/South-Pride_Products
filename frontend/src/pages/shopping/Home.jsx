import React, { useEffect ,useState } from 'react';
import { Tabs, Tab, useMediaQuery } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SouthPrideProductLogo from "../../assets/South-Pride-Products.png"
import { CarouselElement } from '../../components/atoms/CarouselElement';
import { useDispatch } from 'react-redux';
import { allProducts } from '../../api/productAPI/allProducts';
import LoadingComponent from '../../components/sample/LoadingComponent';

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
  const dispatch = useDispatch()

  const [loading , setLoading] = useState (true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {

    if (location.pathname === '/shopping/home') {
      navigate('/shopping/home/all-products');
    }
    dispatch(allProducts())
    setLoading(false)

    
  }, [navigate,dispatch]);

  if(loading){
    return <LoadingComponent/>
  }


  return (
    <div className="grid grid-cols-12 h-screen overflow-y-auto ">
      <div className="col-span-2 mobile:hidden bg-base-200 ">
        <img src={SouthPrideProductLogo} alt="south_pride_logo" />
        <div className='grid grid-cols-1 px-5 gap-y-5 '>
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
            Reviews
          </div>
          <div className='btn btn-ghost bg-shoppingBtn hover:bg-hoverShoppingBtn rounded-xl text-white shadow-lg shadow-gray-500'>
            Contact us
          </div>

        </div>

      </div>

      <div className="col-span-10 mobile:col-span-12 overflow-y-auto mb-4 ">
        <div className='grid grid-cols-1 '>
          <div className=' '>
            <CarouselElement />
          </div>
          <div className=''>
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
