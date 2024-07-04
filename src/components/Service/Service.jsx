import React from 'react'
import SubHeader from '../Shared/SubHeader'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import img from '../../images/features/baby.png'
import { Link } from 'react-router-dom'
import doctorBg from '../../images/img/doctors-bg.jpg';
import img1 from '../../images/doc/appointment-scheduling.webp'
import img2 from '../../images/doc/appointment-reminder.webp'
import img3 from '../../images/doc/patient-registration.jpeg'
import img4 from '../../images/doc/payment-processing.webp'
import img5 from '../../images/doc/doctor-profile.jpeg'
import img6 from '../../images/doc/feedback-rating.jpeg'

const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  }
  return (
    <>
      <Header />
      <SubHeader title="Features" />

      <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img1} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Appointment scheduling</h4>
                    <p className="mb-4">Users can book appointments with healthcare providers based on availability, specialty, location, and other criteria.</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img2} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Appointment reminders</h4>
                    <p className="mb-4">Automated reminders via email, SMS, or app notifications to remind patients of their upcoming appointments.</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img3} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Patient Registration</h4>
                    <p className="mb-4">Online registration and profile creation for patients, including demographic information, medical history.</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img4} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Payment Processing</h4>
                    <p className="mb-4">Integration with payment gateways to facilitate online payments for appointments, consultations, or other services.</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img5} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Doctor Profile</h4>
                    <p className="mb-4">Detailed profiles of healthcare providers, including their specialties, qualifications, experience, and patient reviews.</p>
                  </div>
                </div>
              </div>
            ))
          }
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id + 6}>
                <div className="card shadow border-0 mb-5">
                  <img src={img6} alt="" className="img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Feedback & Rating</h4>
                    <p className="mb-4">Capability for patients to provide feedback and ratings for healthcare providers and their services, helping to improve the overall patient experience.</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>Come experience the best medical facilities with us, both in person and virtually.</h2>
                  {/* <p className='form-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.</p> */}
                  <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service