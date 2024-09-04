import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='container'>
        <div className="row">
        <div className='text-center pt-100 mb-5 pb-150'>
            <span className="accodian-text" style={{fontSize: '18px'}}>Start today for getting</span>
            <span style={{ color: '#20ad96', fontSize: '18px', marginLeft: '10px' }}>Online Certification</span>
            <p className=" text-white" style={{fontSize: '34px'}}>You can be your own guiding star with our help!</p>
            <button className="banner-btn btn btn-primary text-white  text-center mt-3">Get started for free</button>
        </div>
        <div className="col-4">
            <ul className="text-white list-unstyled" >
                <h6 className='pb-1'>Address</h6>
                <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Your address goes here</li>
                <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>0123456789 (9am - 5pm EST, Monday - Friday)</li>
                <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'> info@example.com</li>
                <div className='d-flex pt-5'>
                    <i class="fa-brands fa-square-facebook" style={{padding:'10px' , color:'#8c89a2' , fontSize:'19px'}}></i>
                    <i class="fa-brands fa-twitter" style={{padding:'10px' , color:'#8c89a2' , fontSize:'19px'}}></i>
                    <i class="fa-brands fa-instagram" style={{padding:'10px' , color:'#8c89a2' , fontSize:'19px'}}></i>
                    <i class="fa-brands fa-linkedin" style={{padding:'10px' , color:'#8c89a2' , fontSize:'19px'}}></i>
                </div>
            </ul>
        </div>
        <div className="col-2">
        <ul className="text-white list-unstyled" >
                <h6 className='pb-1'>Explore</h6>
                <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Start here</li>
                <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Blog </li>
                <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>About us</li>
            </ul>
        </div>
        <div className="col-2">
        <ul className="text-white list-unstyled pt-4" >
                <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Success story</li>
                <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Courses</li>
                <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Contact us</li>
            </ul></div>   
        <div className="col-2">
            <ul className="text-white list-unstyled" >
                    <h6 className='pb-1'>Information</h6>
                    <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Membership</li>
                    <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Purchase guide</li>
                    <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Privacy policy</li>
                    <li style={{color:'#DDDDDD' ,fontSize:'15px'}} className='py-1'>Terms of service</li>
            </ul>
        </div> 
        </div>  
    </div>
  )
}

export default Footer
