import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import HomeCars from '../HomeCars/HomeCars';
import Reviews from '../Reviews/Reviews';
import SearchingCar from '../SearchingCar/SearchingCar';

const Home = () => {
    return (
       <Box>
           <Navigation></Navigation>
           <Banner></Banner>
           <HomeCars></HomeCars>
           <Reviews></Reviews>
           <SearchingCar></SearchingCar>
           <ChooseUs></ChooseUs>
           <Footer></Footer>
       </Box>
    );
};

export default Home;