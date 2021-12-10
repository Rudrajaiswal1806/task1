import React from "react";
import Navbar from "../components/Navbar";


const Checkout = () => {
        return (
            <>
                <Navbar/>                                    
                <div className="bg-light position-relative pt-5" style={{height:'90vh', marginTop:'-15px'}}>
                    <div className=" shadow-sm w-75 m-auto bg-white ps-3">  
                        <h2 className="text-center mt-5 pt-5">Checkout</h2>
                        <p className="pb-4 fs-4">Thank you for your order.</p>  
                    </div>
                    <div className=" position-absolute w-25 lh-1 pe-3 end-0 bottom-0">
                        <h5 style={{color:'#DCDCDC'}}>Activate Windows</h5>
                        <p style={{color:'#DCDCDC'}}>Go to settings to activate windows.</p>
                    </div>
                </div>                                
            </>        
        );      
}
export default Checkout;