import {BrowserRouter, Routes, Route, Link, NavLink, Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import PostHeroLinks from '../components/PostHeroLinks/PostHeroLinks';
import Features from '../components/Features/Features';
import BlogsLibrary from '../components/BlogsLibrary/BlogsLibrary';
import Resources from '../components/Resources/Resources';
import Testimonials from '../components/Testimonials/Testimonials';
import LastCTA from '../components/LastCTA/LastCTA';
import Footer from '../components/Footer/Footer';


const Dashboard = () =>{
    return <>
        <Header />
        <Outlet />
        <Hero />
        <PostHeroLinks />
        <Features />
        <BlogsLibrary />
        <Resources />
        <Testimonials />
        <LastCTA />
        <Footer />
    </>
}

export default Dashboard;