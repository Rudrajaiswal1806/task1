import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";


const Landing = () => {
        return (
            <>
                <Navbar/>
                <div className="container">
                
                    <div className=" text-center">
                        <h1 className="display-3 pt-2 mb-0" >Welcome to Food's</h1>
                        <h1 className="pb-4 display-3">Kitchen</h1>
                        <Link className="btn text-white mb-3" style={{background:'#3F51B5'}} to="/menu" role="button">GO TO MENU</Link>
                        
                    </div>
                    <div className="bg-light position-relative" style={{height:'40vh'}}>
                    <div className=" position-absolute w-25 lh-1 pe-3 end-0 bottom-0">
                        <h5 style={{color:'#DCDCDC'}}>Activate Windows</h5>
                        <p style={{color:'#DCDCDC'}}>Go to settings to activate windows.</p>
                    </div>
                    </div>
                
                </div> 
            </>        
        );      
}
export default Landing;