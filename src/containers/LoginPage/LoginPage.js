import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Pic2 from '../../assets/Images/pic1.jpg';
import pic2person from '../../assets/Images/pic2.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LoginPage.css';

class LoginPage extends Component {
    render(){
        return(
            <Aux>
        <div className="Parent">
            <img src={Pic2} alt='pic' className="Left"/>
            <div className="Right">
            <Card style={{ width: '350px', height:'450px', textAlign: 'center', padding: '50px' }}>
            <Card.Title>Instagram Clone</Card.Title>
            <Card.Img variant="top" src={pic2person} style={{minHeight: '100px'}}/>
            <Card.Body>
            <Button variant="primary">Continue as User</Button>
                <p style={{marginTop: '20px'}}>Not User? <span className="span1">switch accounts</span></p>
                
            </Card.Body>
            </Card>
            </div>
        </div>
            </Aux>
        )
    }
}

export default LoginPage;