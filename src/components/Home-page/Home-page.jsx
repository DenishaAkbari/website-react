import Footer from "./Footer/Footer"
import Review from "./Review/Review"
import Contact from "./contact/contact"
import Register from './register/Register'
import Course from './Courses/Course'
import Accodian from "./Accodian/Accodian"
import Banner from "./Banner/Banner"
import Header from "./Header/header"



const Homepage = () => {
    return(
        <>
        <Header/>
        <Banner/>
        <Accodian/>
        <Course/>
        <Register/>
        <Contact/>
        <Review/>
        <Footer/>
        </>
        
    )
}

export default Homepage