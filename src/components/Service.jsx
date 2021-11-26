import React from "react";

const text="True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don't use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable , secure, and scalable.";
const text2="We keep your build online 24*7*365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.";


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

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3  col-12 text-center ">
                    <img src="./images/Frame1.png"  alt="" className="my-3" />
                    <h5 className="fw-bold mb-2">99.9% uptime</h5>
                    <p className="fs-6 text-black" style={{ letterSpacing:'1px',lineHeight:'1.2'}}>{text2}</p> 
                </div>
                <div className="col-md-3  col-12 text-center">
                    <img src="./images/Frame2.png"  alt="" className="my-3" />
                    <h5 className="fw-bold">Blazing Fast Web Hosting</h5>
                    <p className="fs-6 text-black" style={{letterSpacing:'1px',lineHeight:'1.2'}}>{text2}</p>
                </div>
                <div className="col-md-3  col-12 text-center">
                    <img src="./images/Frame3.png"  alt="" className="my-3" />
                    <h5 className="fw-bold">Free SSL Certificates</h5>
                    <p className=" fs-6 text-black" style={{letterSpacing:'1px',lineHeight:'1.2'}}>{text2}</p>
                </div>
                <div className="col-md-3  col-12 text-center">
                    <img src="./images/Frame 4.png"  alt="" className="my-3" />
                    <h5 className="fw-bold">24*7 Friendly Support</h5>
                    <p className="fs-6 text-black" style={{ letterSpacing:'1px',lineHeight:'1.2'}}>{text2}</p>
                </div>
            </div>
        </div>
        </>

    );
}
export default Service;