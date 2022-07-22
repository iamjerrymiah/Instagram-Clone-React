import React, { Component } from "react";

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/UI/Modal/Modal";
import Preview from "../../components/Preview/Preview";
import Profile from "../../components/Profile/Profile";


class ProfilePage extends Component {
    state ={
        summary: false
   }

   summaryHandler = () => {
       this.setState( { summary: true } );
   }

   summaryCancelHandler = () => {
       this.setState( { summary: false } );
   }

    render(){
        return(
            <Aux>
        <Navbar clicked={this.summaryHandler}/>
                <Modal show={this.state.summary} modalClosed={this.summaryCancelHandler}>
                    <Preview />
                </Modal>

            <Profile clicked={this.summaryHandler}/>
            </Aux>
        )
    }
}

export default ProfilePage;