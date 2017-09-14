import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class CenterInput extends React.Component {
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
