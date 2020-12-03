import React, { Component } from 'react'
import axios from 'axios';
import {BuildCard} from '../layout/BuildCard';
export default class WelcomePage extends Component {

constructor () {
    super();

    this.state = {
        isToggled: true
    }

    this.handleClick = this.handleClick.bind(this);
};

// componentDidMount(){
//     const userId = localStorage.getItem('userId');
//     axios.get(`/user/${userId}`)
//         .then( res => {
//             console.log(res.data)
//             this.setState({
//                 user: res.data
//             });
//             }, err => {
//                 console.log(err)
//             }
//         )
// }
    state = {};

    componentWillMount = () => {
      

        axios.get(`/building/all`)
        .then( res => {
            console.log(res.data)
            this.setState({
                build: res.data,
                b_name: res.data.location
            });
         
            //console.log(this.state.build[0][0]);
            }, err => {
                console.log(err)
            }
        )
    }

    handleClick(e) {
        this.setState(state => ({
          isToggled: !state.isToggled
        }));
    }

    render() {
        if(this.props.user){
            
            if(this.state.build){

                let buildcard = this.state.build.map(build => {
                    return (
                       <BuildCard build = {build}/>
                    )
                })

                return(
                    <div className="card textcenter mt-3">
                        <div className="accordion" id="accordionExample">
                        
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    
                                  Find Building 
          
                                </h5>
                            </div>
    
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <ul class="list-group">
                                        {buildcard}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">                      
                                        Covid updates
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                To find out more about York University's response to Covid-19
                                <a href="https://yubettertogether.info.yorku.ca/important-links-resources/"> Click here!</a>
          </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                    
                                    View My Bookings
           
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    Show existing bookings
          </div>
                            </div>
                        </div>
                    </div>
    
                )
            } else {

            

            return(
                <div className="card textcenter mt-3">
                    <div className="accordion" id="accordionExample">
                    
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                
                              Find Building 
      
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <ul class="list-group">
                                    Loading...
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">                      
                                    Covid updates
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                            To find out more about York University's response to Covid-19
                            <a href="https://yubettertogether.info.yorku.ca/important-links-resources/"> Click here!</a>
      </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                
                                View My Bookings
       
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                Show existing bookings
      </div>
                        </div>
                    </div>
                </div>

            )}
        } 
        else {
            return (
                <div>
                    <h2>Please log in again</h2>
                </div>
            )
        }
       
    }
}


