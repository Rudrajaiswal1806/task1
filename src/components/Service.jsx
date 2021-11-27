import React from "react";
import ServiceApi from "./ServiceApi";

const text="True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don't use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable , secure, and scalable.";



const Service = () => {
    return (
        <>
        <div className="container mt-5">
            <div className="row ">
                <div className="col-md-6">
                    <h1 className="fw-bold mb-4 ">True Cloud Web Hosting</h1>
                    <p className=" text-black pe-5">{text}</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="d-flex flex-row justify-content-between">
                        <img src="./images/cPanel.png"  alt=""  />
                        <img src="./images/secured.png"  alt=""  />
                        <img src="./images/litespeed.png"  alt="" />
                    </div>
                    <div className="d-flex flex-row justify-content-between mt-3">
                        <img src="./images/Rectangle 11.png"  alt=""   />
                        <img src="./images/Rectangle 12.png"  alt=""  />
                        <img src="./images/Rectangle 13.png"  alt=""   />                        
                    </div>
                </div>
            </div>
        </div>

        <ServiceApi/>                            
        </>

    );
}
export default Service;