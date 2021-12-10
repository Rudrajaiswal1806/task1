import React from "react";
import {Link} from "react-router-dom";


class Navbar extends React.Component {
    
    render() {
        return (
        

            <div className="container-fluid ">
                <div className="row">
                    <header className=" d-flex flex-row  align-self-center pt-2 mb-0 " style={{background:'#3F51B5'}}>
                        <img src="./images/logo.png" alt="" width="58" className=" rounded-circle mt-1 ms-2"/>
                        <h3 className="text-white ms-3">Food's Restaurant</h3>
                    </header>
                </div>
            </div>
        );
      }
}
export default Navbar;