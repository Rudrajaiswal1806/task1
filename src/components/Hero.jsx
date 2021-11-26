import React from "react";


const Hero = () => {
        
        return (
            <>
            <div className="container mt-5 p-2">
            <div className="row">
                <div className="col-md-6  mt-sm-2 pe-3 mb-sm-5">
                   <h1 className="fw-bold w-75 my-5">Premium web Hosting for Your Website</h1>
                   <p className="text-secondary w-75 mb-5">Blazing fast web hosting for individuals and businesses of all sizes backed by 24*7*365 support</p>
                   <div className="d-flex flex-row mb-3">
                   <button type="button" className="btn btn-danger shadow-lg">Create an Account</button>
                   <button type="button" className="btn btn-outline-dark ms-4">Choose your plan</button>
                   </div> 
                </div>
                <div className="col-md-6  position-relative">
                <img src="./images/Rectangle22.png"  alt="" className=" px-sm-3" />

                <img className=" position-absolute top-0 start-0 mt-5" src="./images/Elements.png"  alt=""></img>
                </div>          
            </div>
            </div>
            </>
        );
      }

export default Hero;