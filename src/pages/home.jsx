
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import Connect from '../components/Connect'
import HowItWork from '../components/HowItWork'
import Services from '../components/Services'
import RoadMap from '../components/RoadMap'
import FAQ from '../components/FAQ'

const Home = () =>{
    return (
        <>
            <Header />
            <Banner />
            <Brands />
            <Connect />
            <HowItWork />
            <Services />
            <RoadMap />
            <FAQ />
            <Footer />
        </>
    )
}
export default Home;