import './Register.css'
import r from '../../../assets/register/r.png'
import ee from '../../../assets/register/ee.png'

import React from 'react'

function Register() {
  return (
    <>
    
    <div style={{backgroundColor: '#161821'} }>

    <div className='container pt-100'>
        <div className="row pb-100">
        <div className="col-6">
        <div className='mb-5'>
            <p className="accodian-text">Why hesitate to register?</p>
            <span className="accodian-title text-white">Learn At Your <br/> Own </span>
            <span style={{ color: '#20ad96', fontSize: '48px', marginLeft: '10px' }}> pace</span>
        </div>
        <div>
            <ul style={{listStyle: 'none' ,color: '#DDDDDD'}}>
                <i class="fa-solid fa-check" style={{color: '#20ad96', marginLeft: '-30px', marginTop: '10px'}}></i>
                <li style={{marginLeft: '20px' , lineHeight:'2', marginTop: '-25px'}}>Select & customize courses to your <br/> preferences</li>
                <i class="fa-solid fa-check" style={{color: '#20ad96', marginLeft: '-30px', marginTop: '10px'}}></i>
                <li style={{marginLeft: '20px' , lineHeight:'2', marginTop: '-25px'}} >Change the tutor and make arrangements</li>
                <i class="fa-solid fa-check" style={{color: '#20ad96', marginLeft: '-30px', marginTop: '10px'}}></i>
                <li style={{marginLeft: '20px' , lineHeight:'2', marginTop: '-25px'}}>Participate in events to join others</li>
                <i class="fa-solid fa-check" style={{color: '#20ad96', marginLeft: '-30px', marginTop: '10px'}}></i>
                <li style={{marginLeft: '20px' , lineHeight:'2', marginTop: '-25px'}}>Get the desired certificate delivered at house</li>
            </ul>
        </div>
            <button className="banner-btn btn btn-primary text-white  text-center mt-3">  Get started for free</button>
        </div>
        <div className="col-6 text-center">
            <img src={r} style={{width: '459px' , height: '512px'}} />
        </div>
        </div>
    </div>
    <div className='container'>
        <div className="row pt-100 pb-100">
        <div className="col-6 text-center ">
            <img src={ee} style={{width: '459px' , height: '512px'}} />
        </div>
        <div className="col-6">
        <div className='mb-5'>
            <p className="accodian-text">What are you looking for?</p>
            <span className="accodian-title text-white">Learn on your <br/></span>
            <span style={{ color: '#20ad96', fontSize: '48px', marginLeft: '10px' }}> mobile</span>
            <span className="accodian-title text-white">anytime!</span>

        </div>
        <div className='mb-5' style={{color: '#DDDDDD' , paddingRight: '150px' }}>
            <p>Save lessons for later and revise or write notes at any time and on multiple devices on your way. Never interfere with activities of enjoyment or other precious moments.</p>
        </div>
            <button className="banner-btn btn btn-primary text-white  text-center mt-3">Download Our App</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Register
