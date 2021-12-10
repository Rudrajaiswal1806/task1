import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";


const Menu = () => {
        return (
            <>
            <Navbar/>
            <div class="row row-cols-1 row-cols-md-5 g-4 bg-light py-4">
                <div class="col"></div>
                <div class="col ">
                    <div class="card mb-0 shadow-sm">
                        <img src="./images/pepsi.jpg" class="card-img-top mb-0" alt="..."/>
                        <div class="card-body mb-0 pb-2">
                            <h5 class="card-title mb-1 text-muted">Hamburger</h5>
                            <p class="card-text text-muted mb-3">Price: 200</p>
                            <div class="btn-group mb-0">
                                <Link to="/" class="btn text-white me-3 rounded btn-sm  px-sm-3 mb-0" style={{background:'#3F51B5'}} > + </Link>
                                <Link to="/menuorder" class="btn  btn-secondary rounded btn-sm px-sm-3 mb-0"> - </Link>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card mb-0 shadow-sm">
                        <img src="./images/pepsi.jpg" class="card-img-top mb-0" alt="..."/>
                        <div class="card-body mb-0 pb-2">
                            <h5 class="card-title mb-1 text-muted">Fries</h5>
                            <p class="card-text text-muted mb-3">Price: 100</p>
                            <div class="btn-group mb-0">
                                <Link to="#" class="btn text-white me-3 rounded btn-sm  px-sm-3 mb-0" style={{background:'#3F51B5'}} > + </Link>
                                <Link to="#" class="btn  btn-secondary rounded btn-sm px-sm-3 mb-0"> - </Link>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card mb-0 shadow-sm">
                        <img src="./images/pepsi.jpg" class="card-img-top mb-0" alt="..."/>
                        <div class="card-body mb-0 pb-2">
                            <h5 class="card-title mb-1 text-muted">Coke</h5>
                            <p class="card-text text-muted mb-3">Price: 50</p>
                            <div class="btn-group mb-0">
                                <Link to="#" class="btn text-white me-3 rounded btn-sm  px-sm-3 mb-0" style={{background:'#3F51B5'}} > + </Link>
                                <Link to="#" class="btn  btn-secondary rounded btn-sm px-sm-3 mb-0"> - </Link>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col ">
                    <div class="card mb-0 shadow-sm">
                        <img src="./images/pepsi.jpg" class="card-img-top mb-0" alt="..."/>
                        <div class="card-body mb-0 pb-2">
                            <h5 class="card-title mb-1 text-muted">Pepsi</h5>
                            <p class="card-text text-muted mb-3">Price: 50</p>
                            <div class="btn-group mb-0">
                                <Link to="#" class="btn text-white me-3 rounded btn-sm  px-sm-3 mb-0" style={{background:'#3F51B5'}} > + </Link>
                                <Link to="#" class="btn  btn-secondary rounded btn-sm px-sm-3 mb-0"> - </Link>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" position-absolute w-25 lh-1 pe-5 end-0 top-100 mt-5 pt-5">
                    <h5 className="  mt-5 pt-3" style={{color:'#DCDCDC'}}>Activate Windows</h5>
                    <p  style={{color:'#DCDCDC'}}>Go to settings to activate windows.</p>
                </div>
            </div>
            </>        
        );      
}
export default Menu;