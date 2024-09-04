import './Course.css'
import '../Accodian/Accodian.css'
import Courseimg from '../../../assets/courses/course-1.jpg'
import Courseimg2 from '../../../assets/courses/course-2.jpg'
import Courseimg3 from '../../../assets/courses/course-3.jpg'
import Courseimg4 from '../../../assets/courses/course-4.jpg'
import Courseimg5 from '../../../assets/courses/course-5.jpg'
import Courseimg6 from '../../../assets/courses/course-6.jpg'

import user from '../../../assets/courses/course-avatar.jpeg'
import user2 from '../../../assets/courses/course-avatar2.jpeg'

const Course = () => {

    return (
        <div>
            <div className="container">
                <div className="row pt-100 pb-100">
                    <div className="col-3 text-center course-content ">
                        <h1>1.926</h1>
                        <p>Finished Sessions</p>
                    </div>
                    <div className="col-3 text-center course-content ">
                        <h1>3.092</h1>
                        <p>Online Enrollment</p>
                    </div>
                    <div className="col-3 text-center course-content ">
                        <h1>200</h1>
                        <p>Subjects Taught</p>
                    </div>
                    <div className="col-3 text-center course-content ">
                        <h1>150</h1>
                        <p>Satisfaction rate</p>
                    </div>

                </div>
                <div className='text-center mb-5'>
                        <p className="accodian-text">Begin your journey at maxcoach</p>
                        <span className="accodian-title text-white">Signature </span>
                        <span style={{ color: '#20ad96', fontSize: '48px', marginLeft: '10px' }}>Courses</span>
                </div>
                <div className="row gap-5 pb-100">
                    <div className="col-4 position-relative" style={{ backgroundColor: '#161821' , width: '400px' }}>
                        <div className="card text-center">
                        <button className="btn btn-primary text-white position-absolute px-4 py-" style={{top: '10px', right: '5px' , borderRadius: '0px'}}>Free</button>
                            <img src={Courseimg} style={{ width: '100%', height: '100%'}}/>
                        </div>
                        <div className="card-body p-2">
                            <div className="user p-3">
                                <img src={user} style={{ width: '40px', height: '50px'}}  className="rounded-circle"/>
                                <span className="text-white ms-2 user-name mt-5" >Blanche Fields</span>
                                <p className='text-white ms-2' style={{fontSize: '20px', marginTop: '10px' , marginBottom: '30px'}}> Learning to Write as a <br/> Professional Author</p>
                                <i class="fa-regular fa-calendar" style={{color: '#ffffff', fontSize: '15px' , marginLeft: '10px'}}></i>
                                <span className="text-white ms-2" style={{fontSize: '14px'}} > 20 Lessons </span>
                                <i class="fa-solid fa-user" style={{color: '#ffffff', fontSize: '15px', marginLeft: '50px'}}></i>
                                <span className="text-white ms-2"> 51 Students </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 position-relative" style={{ backgroundColor: '#161821' , width: '400px' }}>
                        <div className="card text-center">
                        <button className="btn btn-primary text-white position-absolute px-4 py-2" style={{top: '10px', right: '5px' , borderRadius: '0px'}}>Free</button>
                            <img src={Courseimg2} style={{ width: '100%', height: '100%'}}/>
                        </div>
                        <div className="card-body p-3">
                            <div className="user p-3">
                                <img src={user2} style={{ width: '40px', height: '50px'}}  className="rounded-circle"/>
                                <span className="text-white ms-2 user-name mt-5" >Blanche Fields</span>
                                <p className='text-white ms-2' style={{fontSize: '20px', marginTop: '10px' , marginBottom: '30px'}}>Customer-centric Info-Tech Strategies</p>
                                <i class="fa-regular fa-calendar" style={{color: '#ffffff', fontSize: '15px' , marginLeft: '10px'}}></i>
                                <span className="text-white ms-2" style={{fontSize: '14px'}} > 40 Lessons </span>
                                <i class="fa-solid fa-user" style={{color: '#ffffff', fontSize: '15px', marginLeft: '50px'}}></i>
                                <span className="text-white ms-2"> 80 Students </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 position-relative" style={{ backgroundColor: '#161821' , width: '400px' }}>
                        <div className="card text-center">
                        <button className="btn btn-primary text-white position-absolute px-4 py-2" style={{top: '10px', right: '5px' , borderRadius: '0px'}}>Free</button>
                            <img src={Courseimg3} style={{ width: '100%', height: '100%'}}/>
                        </div>
                        <div className="card-body p-3">
                            <div className="user p-3">
                                <img src={user} style={{ width: '40px', height: '50px'}}  className="rounded-circle"/>
                                <span className="text-white ms-2 user-name mt-5" >Blanche Fields</span>
                                <p className='text-white ms-2' style={{fontSize: '20px', marginTop: '10px' , marginBottom: '30px'}}>Open Programming Courses for Everyone: Python</p>
                                <i class="fa-regular fa-calendar" style={{color: '#ffffff', fontSize: '15px' , marginLeft: '10px'}}></i>
                                <span className="text-white ms-2" style={{fontSize: '14px'}} > 16 Lessons </span>
                                <i class="fa-solid fa-user" style={{color: '#ffffff', fontSize: '15px', marginLeft: '50px'}}></i>
                                <span className="text-white ms-2"> 57 Students </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 position-relative" style={{ backgroundColor: '#161821' , width: '400px' }}>
                        <div className="card text-center">
                        <button className="btn btn-primary text-white position-absolute px-4 py-" style={{top: '10px', right: '5px' , borderRadius: '0px'}}>Free</button>
                            <img src={Courseimg4} style={{ width: '100%', height: '100%'}}/>
                        </div>
                        <div className="card-body p-2">
                            <div className="user p-3">
                                <img src={user2} style={{ width: '40px', height: '50px'}}  className="rounded-circle"/>
                                <span className="text-white ms-2 user-name mt-5" >Blanche Fields</span>
                                <p className='text-white ms-2' style={{fontSize: '20px', marginTop: '10px' , marginBottom: '30px'}}>Academic Listening and Note-taking</p>
                                <i class="fa-regular fa-calendar" style={{color: '#ffffff', fontSize: '15px' , marginLeft: '10px'}}></i>
                                <span className="text-white ms-2" style={{fontSize: '14px'}} > 25 Lessons </span>
                                <i class="fa-solid fa-user" style={{color: '#ffffff', fontSize: '15px', marginLeft: '50px'}}></i>
                                <span className="text-white ms-2"> 55 Students </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 position-relative" style={{ backgroundColor: '#161821' , width: '400px' }}>
                        <div className="card text-center">
                        <button className="btn btn-primary text-white position-absolute px-4 py-2" style={{top: '10px', right: '5px' , borderRadius: '0px'}}>Free</button>
                            <img src={Courseimg5} style={{ width: '100%', height: '100%'}}/>
                        </div>
                        <div className="card-body p-3">
                            <div className="user p-3">
                                <img src={user} style={{ width: '40px', height: '50px'}}  className="rounded-circle"/>
                                <span className="text-white ms-2 user-name mt-5" >Blanche Fields</span>
                                <p className='text-white ms-2' style={{fontSize: '20px', marginTop: '10px' , marginBottom: '30px'}}>Master jQuery in a Short Period of Time</p>
                                <i class="fa-regular fa-calendar" style={{color: '#ffffff', fontSize: '15px' , marginLeft: '10px'}}></i>
                                <span className="text-white ms-2" style={{fontSize: '14px'}} > 12 Lessons </span>
                                <i class="fa-solid fa-user" style={{color: '#ffffff', fontSize: '15px', marginLeft: '50px'}}></i>
                                <span className="text-white ms-2"> 25 Students </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 position-relative" style={{ backgroundColor: '#161821' , width: '400px' }}>
                        <div className="card text-center">
                        <button className="btn btn-primary text-white position-absolute px-4 py-2" style={{top: '10px', right: '5px' , borderRadius: '0px'}}>Free</button>
                            <img src={Courseimg6} style={{ width: '100%', height: '100%'}}/>
                        </div>
                        <div className="card-body p-3">
                            <div className="user p-3">
                                <img src={user2} style={{ width: '40px', height: '50px'}}  className="rounded-circle"/>
                                <span className="text-white ms-2 user-name mt-5" >Blanche Fields</span>
                                <p className='text-white ms-2' style={{fontSize: '20px', marginTop: '10px' , marginBottom: '30px'}}>Introduction to Javascript for Beginners</p>
                                <i class="fa-regular fa-calendar" style={{color: '#ffffff', fontSize: '15px' , marginLeft: '10px'}}></i>
                                <span className="text-white ms-2" style={{fontSize: '14px'}} > 36 Lessons </span>
                                <i class="fa-solid fa-user" style={{color: '#ffffff', fontSize: '15px', marginLeft: '50px'}}></i>
                                <span className="text-white ms-2"> 85 Students </span>
                            </div>
                        </div>
                    </div>
                <button className="banner-btn btn btn-primary text-white  w-25 text-center" style={{marginLeft: '40%'}}> View all courses </button>    
                </div>
            </div>
        </div>
    )
}

export default Course