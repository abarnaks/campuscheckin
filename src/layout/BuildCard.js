import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';


export class BuildCard extends Component {
    
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                    <CardTitle tag="h5"><Link to={`/booking/${this.props.build.buildingName}/${this.props.build.id}`}>{this.props.build.buildingName}</Link></CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.build.location}</CardSubtitle>
                   
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default BuildCard
