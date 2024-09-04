import '../Banner/Banner.css'
import Bannerimg from '../../../assets/banner/banner.png'
const Banner = () => {

    return (

        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="banner-left">
                            <h1 className="banner-title text-white ">Complete Your Dreams  in Java Programming</h1>
                            <p className="banner-text ">Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help.</p>
                            <button className="banner-btn btn btn-primary text-white"> Download free E-book </button>
                        </div>
                    </div>

                    <div className="col-md-6">  
                        <div className="banner-right">
                            <img src={Bannerimg}  style ={{width: '100%', height: '100%'}}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
 

export default Banner 