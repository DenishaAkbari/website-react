import React from 'react'
import './contact.css'

function Contact()  {
  return (
    <>  
    <div style={{backgroundColor: '#161821'} }>
    <div className='container'>
         <div className='text-center mb-5'>
                        <p className="accodian-text">Get in contact now</p>
                        <span className="accodian-title text-white">Upcoming</span>
                        <span style={{ color: '#20ad96', fontSize: '48px', marginLeft: '10px' }}>Events</span>
                </div>
        <div className="row ">
            <div className='col-6 mb-4'>
                <div className="h-card p-4 d-flex justify-content-between align-items-center" style={{backgroundColor: '#111111'}}>
                   <div>
                        <p style={{color:'#7E7E7E'}}>Texas, US</p>
                        <h5 className='text-white'>Storytelling Workshop</h5>
                   </div>
                <div>
                    <span style={{color:'#20AD96' , fontSize: '48px' }} className='d-block text-center'>22</span>
                    <span className='d-block text-white text-center fw-bold mb-2' style={{marginTop: '-15px'}}>Nov</span>
                    <button className=" btn btn-primary text-white">Get Ticket</button>
                </div>
                </div>
            </div>
            <div className='col-6 mb-4'>
                <div className="h-card p-4 d-flex justify-content-between align-items-center" style={{backgroundColor: '#111111'}}>
                   <div>
                        <p style={{color:'#7E7E7E'}}> New York, US</p>
                        <h5 className='text-white'>Painting Art Contest 2020</h5>
                   </div>
                <div>
                    <span style={{color:'#20AD96' , fontSize: '48px' }} className='d-block text-center'>15</span>
                    <span className='d-block text-white text-center fw-bold mb-2' style={{marginTop: '-15px'}}>Dec</span>
                    <button className=" btn btn-primary text-white">Get Ticket</button>
                </div>
                </div>
            </div>
            <div className='col-6 mb-4'>
                <div className="h-card p-4 d-flex justify-content-between align-items-center" style={{backgroundColor: '#111111'}}>
                   <div>
                        <p style={{color:'#7E7E7E'}}> Hamburg, Germany</p>
                        <h5 className='text-white'>International Art Fair 2020</h5>
                   </div>
                <div>
                    <span style={{color:'#20AD96' , fontSize: '48px' }} className='d-block text-center'>14</span>
                    <span className='d-block text-white text-center fw-bold mb-2' style={{marginTop: '-15px'}}>Jan</span>
                    <button className=" btn btn-primary text-white">Get Ticket</button>
                </div>
                </div>
            </div>
            <div className='col-6 mb-4'>
                <div className="h-card p-4 d-flex justify-content-between align-items-center" style={{backgroundColor: '#111111'}}>
                   <div>
                        <p style={{color:'#7E7E7E'}}> Illinois, US</p>
                        <h5 className='text-white'>Street Performance: Call for Artist</h5>
                   </div>
                <div>
                    <span style={{color:'#20AD96' , fontSize: '48px' }} className='d-block text-center'>18</span>
                    <span className='d-block text-white text-center fw-bold mb-2' style={{marginTop: '-15px'}}>MAR</span>
                    <button className=" btn btn-primary text-white">Get Ticket</button>
                </div>
                </div>
            </div>
            <div className='col-6 mb-4'>
                <div className="h-card p-4 d-flex justify-content-between align-items-center" style={{backgroundColor: '#111111'}}>
                   <div>
                        <p style={{color:'#7E7E7E'}}> Illinois, US</p>
                        <h5 className='text-white'>Consumer Food Safety Education <br/> Conference</h5>
                   </div>
                <div>
                    <span style={{color:'#20AD96' , fontSize: '48px' }} className='d-block text-center'>27</span>
                    <span className='d-block text-white text-center fw-bold mb-2' style={{marginTop: '-15px'}}>JUL</span>
                    <button className=" btn btn-primary text-white">Get Ticket</button>
                </div>
                </div>
            </div>
            <div className='col-6 mb-4'>
                <div className="h-card p-4 d-flex justify-content-between align-items-center" style={{backgroundColor: '#111111'}}>
                   <div>
                        <p style={{color:'#7E7E7E'}}> Dubai</p>
                        <h5 className='text-white'>How meditation improve your <br/> mental health?</h5>
                   </div>
                <div>
                    <span style={{color:'#20AD96' , fontSize: '48px' }} className='d-block text-center'>12</span>
                    <span className='d-block text-white text-center fw-bold mb-2' style={{marginTop: '-15px'}}>AUG</span>
                    <button className=" btn btn-primary text-white">Get Ticket</button>
                </div>
                </div>
            </div>
            <div className='mt-5 text-center mb-5'>
                <p className="text-center fw-bold d-inline" style={{color: '#8B89A2' , fontSize: '18px'}}>Excited about our event?</p>
                <span style={{ color: '#20ad96', fontSize: '18px', marginLeft: '10px' , borderBottom: '2px solid #20ad96'}}>View all events </span>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Contact
