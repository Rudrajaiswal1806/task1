import React from "react";
import { setService } from "./ServiceSlice";
import { doAjaxCall } from '../util';
import {connect} from "react-redux";

class ServiceApi extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            service:[],
        }
    }

    componentDidMount = () => {
    	this.getServiceData();
    }

    getServiceData = () =>{
        doAjaxCall(``, 'GET','')
            .then(response => {
                if(response.status === 200){                    
                    this.props.setService(response.data.service);
                    this.setState({isLoading: true});
                } else {
                    alert('error');
                }
            });
      }
    
    render() {
        
        
        return (
            <div className="container mt-5">
                <div className="row">
                            
                    {this.props.service.map((services) =>

                    <div className="col-md-3 text-center">
                        <img src={services.Image}  alt="" className="my-3" />
                        <h5 className="fw-bold mb-2">{services.Text}</h5>
                        <p className="fs-6 text-black" style={{ letterSpacing:'1px',lineHeight:'1.2'}}>We keep your build online 24*7*365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>                     
                    </div>
                    
                    )}
                </div> 
            
            </div>           
        );
      }
}

const mapStateToProps = state => ({
    
    service: state.services.service,
    
  }); 
  
  const mapDispatchToProps = {setService};
export default connect(mapStateToProps, mapDispatchToProps)(ServiceApi);