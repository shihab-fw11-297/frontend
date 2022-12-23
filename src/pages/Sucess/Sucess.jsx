import "./Sucess.css";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from "../../components/featured/Featured";
import Explore from "../../components/Explore/Explore";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { Connect } from "../../components/Connect/Connect";
import suc from './Sucess.jpg'
import { useEffect , useState} from "react";

const Sucess = () => {
    const [timer,setTimer] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 100,
            behavior: "smooth",
        });
    };
    useEffect(()=>{
        scrollToTop();
        setTimeout(()=>{
            setTimer(true);
        },1000)
    },[])


    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                
                <img src={suc} alt="sucess" className="sucessImg" style={{display : timer ? "none" : "block"}} />

                <h1 className="homeTitle">Top destinations</h1>
                <Explore />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <Featured />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <Connect />
                <MailList />
                <Footer />
            </div>
        </div>
            
    )
}

export default Sucess;