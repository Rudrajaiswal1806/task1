import React from "react";
import {Link} from "react-router-dom";
import {CartFill} from "react-bootstrap-icons";


const MenuOrder = () => {
        return (
            <>
            <div className="container-fluid ">
                <div className="row">
                    <header className=" d-flex flex-row justify-content-between py-2 " style={{background:'#3F51B5'}}>
                    <div className="d-flex flex-row mb-0 pt-1">
                        <img src="./images/logo.png" alt="" width="58" className=" rounded-circle mt-1 ms-2 mb-0"/>
                        <h3 className="text-white ms-3 mb-0">Food's Restaurant</h3>
                        </div>
                        <div className="position-relative pt-1">
                        <CartFill className=" align-self-center mb-0 fs-4" style={{marginRight:75}}/>
                            
                        <span class="position-absolute top-0 end-0 badge rounded-pill bg-secondary border border-white border-2 mt-2" style={{marginRight:55}}>2</span>
                        </div>
                    </header>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-5 g-4 bg-light py-4">
                <div class="col"></div>
                <div class="col ">
                    <div class="card mb-0 shadow-sm">
                        <img src="./images/pepsi.jpg" class="card-img-top mb-0" alt="..."/>
                        <div class="card-body mb-0 pb-2">
                            <h5 class="card-title mb-1 text-black">Hamburger</h5>
                            <p class="card-text text-muted mb-5">Price: 100</p>
                            <div class="btn-group mb-0">
                                <Link to="/menu" class="btn text-white me-3 rounded btn-sm  px-sm-3 mb-0" style={{background:'#3F51B5'}} > + </Link>
                                <Link to="/menuorder" class="btn  btn-secondary rounded btn-sm px-sm-3 mb-0" > - </Link>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card mb-0 shadow-sm">
                        <img src="./images/pepsi.jpg" class="card-img-top mb-0" alt="..."/>
                        <div class="card-body mb-0 pb-2">
                            <h5 class="card-title mb-1  text-black">Fries</h5>
                            <h6 class="card-text text-muted mb-0 ">Price: 100</h6>
                            <h6 class="card-text text-muted mb-0">Total: 1</h6>
                            <h6 class="card-text text-muted mb-3">Cost (INR): 100</h6>
                            <div class="btn-group mb-0">
                                <Link to="#" class="btn text-white me-3 rounded btn-sm  px-sm-3 mb-0" style={{background:'#3F51B5'}} > + </Link>
                                <Link to="/checkout" class="btn text-white  rounded btn-sm px-sm-3 mb-0" style={{background:'#F50057'}}> - </Link>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card mb-0 shadow-sm">
                        <img src="./images/pepsi.jpg" class="card-img-top mb-0" alt="..."/>
                        <div class="card-body mb-0 pb-2">
                        <h5 class="card-title mb-1  text-black">Coke</h5>
                            <h6 class="card-text text-muted mb-0 ">Price: 50</h6>
                            <h6 class="card-text text-muted mb-0">Total: 2</h6>
                            <h6 class="card-text text-muted mb-3">Cost (INR): 100</h6>
                            <div class="btn-group mb-0">
                                <Link to="#" class="btn text-white me-3 rounded btn-sm  px-sm-3 mb-0" style={{background:'#3F51B5'}} > + </Link>
                                <Link to="#" class="btn text-white rounded btn-sm px-sm-3 mb-0" style={{background:'#F50057'}}> - </Link>                    
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
                            <h5 class="card-title mb-1 text-black">Pepsi</h5>
                            <p class="card-text text-muted mb-3">Price: 50</p>
                            <div class="btn-group mb-0">
                                <Link to="#" class="btn text-white me-3 rounded btn-sm  px-sm-3 mb-0" style={{background:'#3F51B5'}} > + </Link>
                                <Link to="#" class="btn  btn-secondary rounded btn-sm px-sm-3 mb-0"> - </Link>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" position-absolute  w-25 lh-1 pe-5 end-0 bottom-0">
                    <h5  style={{color:'#DCDCDC'}}>Activate Windows</h5>
                    <p className=""  style={{color:'#DCDCDC'}}>Go to settings to activate windows.</p>
                </div>
            </div>
            </>       
        );      
}
export default MenuOrder;