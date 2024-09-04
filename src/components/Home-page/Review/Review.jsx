import React from 'react'
import Rimg from '../../../assets/review/review.jpg'
import R2img from '../../../assets/review/r2.jpg'
import R3img from '../../../assets/review/r3.jpg'



function Review() {
  return (
    <div>
        <div className='text-center pt-100 pb-5'>
            <p className="accodian-text">People are praising Maxcoach</p>
            <span className="accodian-title text-white">What make they </span>
            <span style={{ color: '#20ad96', fontSize: '48px', marginLeft: '10px' }}>love us?
            </span>
        </div>
        <div className="container">
            <div className="row pt-100" >
                <div className="col-4 position-relative">
                    <div className="review" >
                        <div className='position-absolute top-0 start-50 translate-middle'>
                            <img src={Rimg} style={{width: '140px', height: '140px' , borderRadius: '50%'}}/>
                        </div>
                        <div className='text-center pt-100' style={{backgroundColor: '#161821' , paddingBottom: '30px' ,paddingLeft: '50px', paddingRight: '50px'}}> 
                            <p className='text-white' style={{fontSize: '18px'}}> I am free to learn at my own pace, follow my own schedule and choose subject I like. Great study portal for people like me.</p>
                            <h6 className="text-white pt-5" style={{fontSize: '18px'}}>Mina Hollace</h6>
                            <span  style={{color: '#727273'}}>/ Freelancer</span>
                        </div>
                    </div>

                </div>
                <div className="col-4 position-relative">
                    <div className="review" >
                        <div className='position-absolute top-0 start-50 translate-middle'>
                            <img src={R2img} style={{width: '140px', height: '140px' , borderRadius: '50%'}}/>
                        </div>
                        <div className='text-center pt-100' style={{backgroundColor: '#161821' , paddingBottom: '30px' ,paddingLeft: '50px', paddingRight: '50px'}}> 
                            <p className='text-white' style={{fontSize: '18px'}}> I love their flexibility. Even when my request is too complicated to handle. they could still suggest something useful for me.</p>
                            <h6 className="text-white pt-5" style={{fontSize: '18px'}}>Madley Pondor</h6>
                            <span  style={{color: '#727273'}}>/ IT Specialist</span>
                        </div>
                    </div>

                </div>
                <div className="col-4 position-relative">
                    <div className="review" >
                        <div className='position-absolute top-0 start-50 translate-middle'>
                            <img src={R3img} style={{width: '140px', height: '140px' , borderRadius: '50%'}}/>
                        </div>
                        <div className='text-center pt-100' style={{backgroundColor: '#161821' , paddingBottom: '30px' ,paddingLeft: '50px', paddingRight: '50px'}}> 
                            <p className='text-white' style={{fontSize: '18px'}}> I am free to learn at my own pace, follow my own schedule and choose subject I like. Great study portal for people like me.</p>
                            <h6 className="text-white pt-5" style={{fontSize: '18px'}}>Luvic Dubble</h6>
                            <span  style={{color: '#727273'}}>/ Private Tutor</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Review
