import React from 'react'
import CollectNav from './CollectNav'

const CollectHome = () => {
  return (
    <div className="container">
        <CollectNav/>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4875.jpg?t=st=1729276566~exp=1729280166~hmac=058c4e5cd496443aa62ef0cd3c3a784c30e9fe67dda62f3f629eb16ee32d49f4&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <br></br><br></br>
                                <h5 className="card-title">VIEW TASKS</h5>
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
                            <img src="https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-416.jpg?t=st=1725479216~exp=1725482816~hmac=62aee53486d64e1b6faa4cae2b5e52b6b4501be10824ec1f9d55d599eabaf438&w=740" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <br></br><br></br>
                                <h5 className="card-title">CONFIRM PICKUP</h5>
                                <a href="/" className="btn btn-dark">CLICK HERE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollectHome