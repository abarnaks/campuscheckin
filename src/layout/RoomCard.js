import React, { Component } from 'react';
import { Card, CardText, CardBlock, CardTitle, CardSubtitle, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';


export class RoomCard extends Component {
    
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                    <CardTitle tag="h5"><Link to={"/"}>{this.props.room.room_name}</Link></CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.room.max_capacity}</CardSubtitle>
                   
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default RoomCard
