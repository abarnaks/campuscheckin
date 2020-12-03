import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'; 
import axios from 'axios';


export class GraphComp extends Component {


    componentWillMount = () => {
        var config = {
            headers: {
                'Content-Length': 0,
                'Content-Type': 'text/plain'
            }
        };

        var data = "/user/all"

        axios.post(`/log/graph`, data , config)
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
    }



    render() {
        return (
            <div>
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
    }
}

export default GraphComp
