import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// This component/wrapper is specifically to center the codes list component.
// The only difference between this component and the other 2 centering components
// are minor number tweaks to align them all correctly manually.
// As stated in the AppContainer.js file, it is on the todo list to make one dynamic
// center component for all of the elements rendered.

export default class CenterList extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={1} md={3}></Col>
                    <Col xs={4} md={6}>{this.props.children}</Col>
                    <Col xs={1} md={3}></Col>
                </Row>
            </Grid>
        )
    }
}
