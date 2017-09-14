import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class CenterFooter extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} md={2}></Col>
                    <Col xs={5} md={8}>{this.props.children}</Col>
                    <Col xs={1} md={2}></Col>
                </Row>
            </Grid>
        )
    }
}
