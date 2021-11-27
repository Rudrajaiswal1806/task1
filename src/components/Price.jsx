import React from "react";

const Price = () => {
    return (
        <div className="container text-center mt-5">
        <h1 className="w-50 mx-auto  text-black fw-bold">Ready to get started with Lemon Wares?</h1>
        <p className="fs-4 my-3">choose the package that suits you</p>
        <div className="d-flex flex-row justify-content-center align-items-center ">
            <p className="me-4 fs-4 text-black">Monthly</p>
            <div className="  me-3 mb-3 ms-4 form-switch">  
                <input className="form-check-input bg-danger fs-2 border-danger"  type="checkbox" checked></input>
            </div>
            <p className="me-4 fs-4 text-black">Yearly</p>
            <h5 className="bg-warning border-1  fw-bold px-2 py-1  rounded-pill" style={{fontSize:12}}>20% discount</h5>
        </div>
        <div className="d-flex flex-row  justify-content-between justify-content-md-evenly">
            <h3 className="text-black fw-bold  ">Basic</h3>
            <h3 className="text-black fw-bold ">Premium</h3>
        </div>
        <div className="progress my-3" style={{height:'5px'}}>
            <div className="progress-bar w-50  bg-danger " style={{height:'5px'}} ></div>
        </div>

        </div>
    );
}
export default Price;