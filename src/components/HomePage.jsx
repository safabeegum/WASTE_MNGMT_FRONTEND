import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
            <div class="card border-light mb-3">
            <img src="https://static.vecteezy.com/system/resources/previews/029/269/306/original/waste-properly-and-correctly-illustration-with-demonstration-of-correct-garbage-sorting-and-proper-disposal-in-flat-cartoon-background-design-vector.jpg" class="card-img-top" alt="..."></img>
            <div class="card-body">
            </div>
            </div>
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
            <div class="card border-light mb-3">
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <p class="card-text text-center fst-italic text-danger-emphasis"><h2>Waste Collection Management System</h2></p>
            <p class="card-text text-center fst-italic text-danger-emphasis"><h2>for</h2></p>
            <p class="card-text text-center fst-italic text-danger-emphasis"><h2>Haritha Karma Sena</h2></p>
            <div class="card-body">
            </div>
            </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default HomePage