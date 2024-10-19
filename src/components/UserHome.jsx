import React from 'react'
import UserNav from './UserNav'

const UserHome = () => {
  return (
        <div className="container">
            <UserNav/>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://img.freepik.com/free-vector/list-concept-illustration_114360-1320.jpg?t=st=1729277470~exp=1729281070~hmac=d324013fc164cf7d8a1f538a0b9adcc5106976761dfd3efa0dc486e53a0f8e0a&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <br></br><br></br>
                                <h5 className="card-title">WASTE PICKUP REQUEST</h5>
                                <a href="/addrequest" className="btn btn-dark">CLICK HERE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://img.freepik.com/free-vector/qr-code-scanning-concept-with-characters-illustrated_23-2148633631.jpg?t=st=1725478854~exp=1725482454~hmac=626ba564f55d42c2bbe1c020722baa49bc54b630448ad53c5c2061fde47f8043&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <br></br><br></br>
                                <h5 className="card-title">PAYMENT</h5>
                                <a href="/" className="btn btn-dark">CLICK HERE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://img.freepik.com/free-vector/invoice-concept-illustration_114360-2485.jpg?t=st=1725478427~exp=1725482027~hmac=7cc874f74717a2011b51724dfb9288171cfccabf2df7bde6c32b5f1b25734382&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <br></br><br></br>
                                <h5 className="card-title">INVOICE</h5>
                                <a href="/" className="btn btn-dark">CLICK HERE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://img.freepik.com/free-vector/medium-feedback-concept-illustrated_23-2148967056.jpg?t=st=1725478691~exp=1725482291~hmac=41443b1e2df0164c5a56bcbbd8ad4fc1cd1f89942e37e27b3a930962bee9666b&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <br></br><br></br>
                                <h5 className="card-title">FEEDBACK</h5>
                                <a href="/userfeedback" className="btn btn-dark">CLICK HERE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default UserHome