import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'; 
import axios from 'axios';
//import {GraphComp} from '../layout/GraphComp';
import Select from 'react-select'

export class AnalyzePage extends Component {

    state ={ 
        value: "/user/{id}"
    };
    componentWillMount = () => {
        var config = {
            headers: {
                'Content-Length': 0,
                'Content-Type': 'text/plain'
            }
        };

        //var data = "/user/all"

        axios.post(`/log/graph`, this.state.value , config)
        .then( res => {
            //console.log(res.data)
            this.setState({
                chartTitle: res.data.actions,
                chartData:{
                    labels: res.data.labels,
                    datasets: [
                        {
                            label: res.data.actions,
                            fill: false,
                            lineTension: 0,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: res.data.data
                        }
                    ]
                }
            });
            //console.log(this.state);
            }, err => {
                console.log(err)
            }
        )

        axios.get('/log/average')
            .then(res => {
                this.setState({
                    barData: {
                        labels: res.data.x,
                        datasets: [
                            {
                                label: 'Rest Calls',
                                data: res.data.y,
                                borderWidth: 2,
                                borderHeight: 1,
                                backgroundColor:[
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                    'rgba(255, 159, 64, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(225, 150, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 50, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(102, 102, 255, 0.6)',
                                    'rgba(67, 159, 64, 0.6)',
                                    'rgba(165, 99, 34, 0.6)',
                                    'rgba(255, 159, 150, 0.6)',
                                    'rgba(255, 220, 132, 0.6)'
                                  ]
                            },
                          
                        ]
                        
                    }
                })
            })
    };
    
    handleChange = selectedOption => {
        // this.setState({ 
        //     value:selectedOption.value
        // });
        console.log(selectedOption.value);
        var config = {
            headers: {
                'Content-Length': 0,
                'Content-Type': 'text/plain'
            }
        };

        //console.log(this.state.value);

        

        axios.post(`/log/graph`, selectedOption.value , config)
        .then( res => {
            //console.log(res.data)
            this.setState({
                chartTitle: res.data.actions,
                chartData:{
                    labels: res.data.labels,
                    datasets: [
                        {
                            label: res.data.actions,
                            fill: false,
                            lineTension: 0,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: res.data.data
                        }
                    ]
                }
            });
            console.log(this.state);
            }, err => {
                console.log(err)
            }
        )



      };

    render() {
        const options = [
            { value: '/user/all' , label: '/user/all'},
            { value: '/user/new', label: '/user/new' },
            { value: '/user/{id}', label: '/user/{id}' },
            { value: '/user/name/{name}', label: 'user/name/{name}' },
            { value: '/user/login', label: '/user/login' },
            { value: '/booking/all', label: '/booking/all' },
            { value: '/booking/new', label: '/booking/new' },
            { value: '/booking/{id}', label: '/booking/{id}' },
            { value: '/booking/findBookings/{id}', label: '/booking/findBookings/{id}' },
            { value: '/booking/roombooking/{id}', label: '/booking/roombooking/{id}' },
            { value: '/building/all', label: '/building/all' },
            { value: '/building/new', label: '/building/new' },
            { value: '/building/{id}', label: '/building/{id}' },
            { value: '/room/all', label: '/room/all' },
            { value: '/room/new', label: '/room/new' },
            { value: '/room/{id}', label: '/room/{id}' }
        ]
        
        //const { selectedOption } = this.state.selectedOption;
        if(this.state) {
        return(
            
            <div className="card-body">
                <h2> Activity Graphs of Duration of REST Calls </h2>
                <br></br>
                <h3>Average Duration of All Rest Calls</h3>
                <p>x-axis is REST call, y-axis is average time taken of all calls in milliseconds</p>
                <Bar
                    data={this.state.barData}
                    width={"30%"}
                    height={"20%"}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
                <br></br>
                <h3>Individual History of REST Calls and Duration</h3>
                <p>x-axis is time that the REST called occured, y-axis is time taken for the call in milliseconds</p>
                <br></br>
                <Select  options={options} onChange={this.handleChange}/>
                <br></br>
                <Line
                    data={this.state.chartData}
                    options={{
                        title:{
                          display:true,
                          text: `${this.state.chartTitle}`,
                          fontSize:20
                          
                        },
                        legend:{
                          display:true,
                          position:'right'
                        },
                        maintainAspectRatio: true
                        
                    }}
                />
            </div>
        )
        } else {
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
        }
        
    }
}

export default AnalyzePage
