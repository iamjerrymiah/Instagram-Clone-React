import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Navbar from "../../components/Navbar/Navbar";
import Bodywork from "../../components/Bodywork/Bodywork";
import Modal from "../../components/UI/Modal/Modal";
import Preview from "../../components/Preview/Preview";
import Spinner from "../../components/UI/Spinner/Spinner";
import InternetFail from "../../components/InternetFail/InternetFail";
import axios from "axios";

class HomePage extends Component {
    state = {
        summary: false,
        posts: null,
        error: false
    };

    componentDidMount () {
        axios.get( 'https://dummyjson.com/posts' )
            .then( response => {
                this.setState( { posts: response.data.posts } );
            } )
            .catch( error => {
                this.setState( { error: true } );
            } );
    }

    

    summaryHandler = () => {
        this.setState( { summary: true } );
    }

    summaryCancelHandler = () => {
        this.setState( { summary: false } );
    }

    render(){
        let posts = this.state.error ? <InternetFail /> : <Spinner />;
        if (this.state.posts) {
            posts = (
                <Bodywork clicked={this.summaryHandler} posts={this.state.posts}/>
            )
        } 
        return(
            <Aux>
                <Navbar clicked={this.summaryHandler}/>
                <Modal show={this.state.summary} modalClosed={this.summaryCancelHandler}>
                    <Preview />
                </Modal>
                {posts}
            </Aux>
        )
    }
}

export default HomePage;