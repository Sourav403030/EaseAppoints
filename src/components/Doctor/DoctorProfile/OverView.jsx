import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from "react-icons/fa";

const OverView = () => {
    return (
        <div className="col-md-12 col-lg-9">
            <div className='mb-3'>
                <h5 className='overview-text'>About Me</h5>
                <p className='text-secondary'>I am a dedicated and compassionate physician with a wealth of experience in the field of healthcare. Having earned both MBBS and MD degrees from a prestigious university, I possesses a deep understanding of medical science and a commitment to delivering exemplary patient care. With a focus on continuous learning and professional growth, I have been honoured the expertise through years of rigorous academic study and practical training.

                Before joining EaseAppoints, I served as a resident physician at Ahalia Hospital, where I gained invaluable experience in diagnosing and treating a wide range of medical conditions. During this time, I demonstrated exceptional clinical skills and a genuine dedication to improving the health and well-being of their patients.

                Prior to my residency, I completed my medical internship at WellBeing center, where I had the opportunity to work closely with experienced healthcare professionals and gain hands-on experience in various medical specialties.</p>
            </div>

            <div>
                <h5 className='overview-text'>Education</h5>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="2000-2005"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">Nova Med University</h5>
                        <h6 className="text-white">Maharashtra</h6>
                        <p style={{ fontSize: '14px' }}>
                            MBBS
                        </p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="2005-2008"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">Horizon Medical University</h5>
                        <h6 className="text-white">Germany</h6>
                        <p style={{ fontSize: '14px' }}>
                            MD
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>

            </div>
            <div className='my-5'>
                <h5 className='overview-text'>Work & Experience</h5>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="2009 - 2014 (5 years)"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">HealthPoint Clinic</h5>
                        <h6 className="text-white">Kochi</h6>
                        <p style={{ fontSize: '14px' }}>
                            General Physician
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="2014 - 2018 (4 years)"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">Harmony Health Center</h5>
                        <h6 className="text-white">Kochi</h6>
                        <p style={{ fontSize: '14px' }}>
                            General Physician
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="2018 - Present"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">CareAxis Health Center</h5>
                        <h6 className="text-white">Palakkad</h6>
                        <p style={{ fontSize: '14px' }}>General Physician.</p>
                    </VerticalTimelineElement>


                  

                </VerticalTimeline>
                
            </div>
            {/* <div >
                <h5 className='overview-text'>Awards</h5>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="July 2019"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">Humanitarian Award</h5>
                        <h6 className="text-white">Miami, FL</h6>
                        <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="March 2011"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">Certificate for International Volunteer Service</h5>
                        <h6 className="text-white">Miami, FL</h6>
                        <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2e81c4', color: '#00' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e81c4' }}
                        date="March 2011"
                        iconStyle={{ background: '#2e81c4', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h5 className="text-white">The Dental Professional of The Year Award</h5>
                        <h6 className="text-white">Miami, FL</h6>
                        <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div> */}
            {/* <div>
                <h5 className='overview-text'>Services</h5>
                <ul>
                    <li>Tooth cleaning </li>
                    <li>Root Canal Therapy</li>
                    <li>Implants</li>
                    <li>Composite Bonding</li>
                    <li>Fissure Sealants</li>
                    <li>Surgical Extractions</li>
                </ul>
            </div> */}
            {/* <div>
                <h5 className='overview-text'>Specializations</h5>
                <ul className="clearfix">
                    <li>Children Care</li>
                    <li>Dental Care</li>
                    <li>Oral and Maxillofacial Surgery </li>
                    <li>Orthodontist</li>
                    <li>Periodontist</li>
                    <li>Prosthodontics</li>
                </ul>
            </div> */}
        </div>
    )
}
export default OverView;