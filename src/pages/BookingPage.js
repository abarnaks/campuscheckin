import React, { Component } from "react";
import axios from 'axios';
import {RoomCard} from "../layout/RoomCard";

export default class BookingPage extends Component {

    state = { 
        room1: "available"    
    }

    componentDidMount = () => {
        const handle = this.props.match.params 
      //  console.log(handle.buildingName)
        axios.get(`/room/findRooms/${handle.buildingId}`)

        .then( res => {
            console.log(res.data)
            this.setState({
                room: res.data,
                handle: this.props.match.params 
            });
           console.log(this.state.room);
            }, err => {
                console.log(err)
        }
        )

    }

    render() {
        //


        if (this.state.room)
        {
            
            let roomcards = this.state.room.map(room => {
                return (
                    <div><RoomCard room = {room}/> <span className="badge badge-pill badge-success">{this.state.room1}</span></div> 
                )
    
            })

            return(
                <div className="card textcenter mt-3">
                    <div class="card-header">
                        <h5>Enter Booking Information</h5>
                    </div>
    
                    <div className="card-body">
                        <form id="aptForm" noValidate        >
                      
                            

                            <div className="form-group form-row">
                                <label
                                    className="col-md-2 col-form-label text-md-right"
                                    htmlFor="roomName"
                                >
                                    Room Name
                                </label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="roomName"
                                        placeholder="Select"
    
                                    />
                                </div>
                            </div>
    
                            <div className="form-group form-row">
                                <label
                                    className="col-md-2 col-form-label text-md-right"
                                    htmlFor="buildingName"
                                >
                                    Study group size
                                 </label>
                                <div className="col-md-10">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="studySize"
                                        placeholder="size of your study group"
    
                                    />
                                </div>
                            </div>
    
                            <div className="form-group form-row">
                                <label
                                    className="col-md-2 col-form-label text-md-right"
                                    htmlFor="Date"
                                >
                                    Date
                                </label>
                                <div className="col-md-4">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="Date"
                                        id="Date"
    
                                    />
                                </div>
                                <label
                                    className="col-md-2 col-form-label text-md-right"
                                    htmlFor="Time"
                                >
                                    Time
                                </label>
                                <div className="col-md-4">
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="Time"
                                        id="Time"
    
                                    />
                                </div>
                            </div>
                    
                            <div className="form-group form-row">
                                <div className="offset-md-2 col-md-10">
                                    <button
                                        type="submit"
                                        className="btn btn-primary d-block ml-auto"
                                    >
                                        Availability
                                    </button>
                                </div>
                            </div>

                            <div className="form-group form-row mb-0">
                              {roomcards}
                            </div>
                        </form>
    
                    </div>
                </div> 
            );


        }else {


            return(
                <div className="card textcenter mt-3">
                    <div class="card-header">
                        <h5>Enter Booking Information</h5>
                    </div>
    
                    <div className="card-body">
                        <form id="aptForm" noValidate        >
                      
                            <div className="form-group form-row">
                                <label
                                    className="col-md-2 col-form-label text-md-right"
                                    htmlFor="buildingName"
                                >
                                    Building Name
                                </label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="buildingName"
                                        placeholder="Enter name of building"
    
                                    />
                                </div>
                            </div>
    
                            <div className="form-group form-row">
                                <label
                                    className="col-md-2 col-form-label text-md-right"
                                    htmlFor="buildingName"
                                >
                                    Study group size
                                 </label>
                                <div className="col-md-10">
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="studySize"
                                        placeholder="size of your study group"
    
                                    />
                                </div>
                            </div>
    
                            <div className="form-group form-row">
                                <label
                                    className="col-md-2 col-form-label text-md-right"
                                    htmlFor="Date"
                                >
                                    Date
                                </label>
                                <div className="col-md-4">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="Date"
                                        id="Date"
    
                                    />
                                </div>
                                <label
                                    className="col-md-2 col-form-label text-md-right"
                                    htmlFor="Time"
                                >
                                    Time
                                </label>
                                <div className="col-md-4">
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="Time"
                                        id="Time"
    
                                    />
                                </div>
                            </div>
                    
                            <div className="form-group form-row mb-0">
                                <div className="offset-md-2 col-md-10">
                                    <button
                                        type="submit"
                                        className="btn btn-primary d-block ml-auto"
                                    >
                                        Availability
                                    </button>
                                </div>
                            </div>
                        </form>
    
                        <p>Loading...</p>
    
                        <div className="form-group">
                            <label><h4 >Room: (get from db)</h4></label>
                        </div>
    
                        <div className="form-group">
                            <label><h4 >Date and Time: (Get from db)</h4></label>
                        </div>
    
                        <div className="form-group">
                            <label><h4 >Current Capacity: currentcapacity/maxcapacity from db</h4></label>
                        </div>
    
    
                       
    
    
                    </div>
                </div> 
            );

        }

        
    }
}