import React from 'react'
import './Accodian.css'
import accodianimg from '../../../assets/accordion/accordion.png'
import accodianimg2 from '../../../assets/accordion/accodian2.png'
import accodianimg3 from '../../../assets/accordion/accodian3.png'
import accodianimg4 from '../../../assets/accordion/accordian4.png'
import accodianimg5 from '../../../assets/accordion/faq.png'
import Accordion from 'react-bootstrap/Accordion';



function Accodian() {
    return (
        <>
            <div className="accodian pt-100">
                <div className="container">
                    <div className='text-center mb-5'>
                        <p className="accodian-text">Start Learning Coding Languages</p>
                        <span className="accodian-title text-white">Build Your Dream</span>
                        <span style={{ color: '#20ad96', fontSize: '48px', marginLeft: '10px' }}>TODAY</span>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="card text-center">
                                <img src={accodianimg} style={{ width: '169px', height: '174px', margin: 'auto' }} />
                                <h5 className='accodian-content text-white'>Idea Discussion</h5>
                                <p className='accodian-para text-white '>Get teamed up with the specialists who work and teach coding for years at famous universities.</p>
                                <button className='accodian-btn btn btn-primary-transparent text-white'>Start here</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card text-center">
                                <img src={accodianimg2} style={{ width: '169px', height: '174px', margin: 'auto' }} />
                                <h5 className='accodian-content text-white'>Web Development</h5>
                                <p className='accodian-para text-white'>Learn to start building a webpage from scratch. You decide your own pace, course and speed.</p>
                                <button className='accodian-btn btn btn-primary-transparent text-white'>Start here</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card text-center">
                                <img src={accodianimg3} style={{ width: '169px', height: '174px', margin: 'auto' }} />
                                <h5 className='accodian-content text-white'>System Administration</h5>
                                <p className='accodian-para text-white'>Learners are encouraged to study the mechanism and structure of system administration.</p>
                                <button className='accodian-btn btn btn-primary-transparent text-white'>Start here</button>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card text-center">
                                <img src={accodianimg4} style={{ width: '169px', height: '174px', margin: 'auto' }} />
                                <h5 className='accodian-content text-white'>Graphic Design</h5>
                                <p className='accodian-para text-white'>Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.</p>
                                <button className='accodian-btn btn btn-primary-transparent text-white'>Start here</button>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pb-100">
                        <div className="col-6 text-center">
                            <img src={accodianimg5} style={{ width: '393px', height: '549px' }} />
                        </div>
                        <div className="col-6">
                            <div className=' mb-5'>
                                <p className="accodian-text">Everything MaxCoach</p>
                                <span className=" accodian-title text-white">Construct A</span>
                                <span style={{ color: '#20ad96', fontSize: '48px', marginLeft: '10px', }}>Stunning</span>
                                <span className="accodian-span text-white d-block" >Career Perspective</span>
                            </div>
                            <Accordion>
                                <Accordion.Item eventKey="0" className='mb-3 px-2 py-3'>
                                    <Accordion.Header className='faq-question'>Multiple Platforms Supported for Teaching & Studying</Accordion.Header>
                                    <Accordion.Body>
                                    MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren’t supposed to be devoured in a short time, you can always access our knowledge base from any device.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='mb-4 px-2 py-2'>
                                    <Accordion.Header className='faq-question' style={{ color: '#20ad96' , fontWeight: '700' }}>Multiple Course Participation at the Same Time</Accordion.Header>
                                    <Accordion.Body>
                                    Study for a number of courses at the same time is possible as long as you can afford the fee and time for completing them in the proper time. Learn at your own desired timeline and timetable. Maximum up to 5 course at a time for a learner at MaxCoach.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='mb-4 px-2 py-2'>
                                    <Accordion.Header className='faq-question'>Track Study Progress & Deliver Prompt Feedback</Accordion.Header>
                                    <Accordion.Body>
                                    It’s not just a normal thing to be able to build such a solid online educational system like MaxCoach where your progress is easily tracked and feedback is properly delivered. We promise to keep improving our system for better stability and flexibility.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ */}
        </>
    )
}

export default Accodian
