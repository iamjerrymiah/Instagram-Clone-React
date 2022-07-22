import React from "react";

import picture1 from '../../assets/Images/pic1.webp';
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Bodywork.css';

const bodywork = ( props ) => {
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getImageRandom(min, max) {
    return `https://source.unsplash.com/1200x${getRandomArbitrary(min, max)}?male&female,portrait`
}

const instagramSummary = Object.keys( props.posts )
.map( post => {
    return(
      <div className="f-card" key={post}>
  <div className="header">
    <div className="options"><span className="fa fa-ellipsis-h fa-2x" style={{ cursor: 'pointer' }} onClick={props.clicked}></span></div>
    <img className="co-logo" src={getImageRandom(1200, 1500)} alt="pic"/>
    <div className="co-name"><a href="/"><h6>Instagram Clone by Iamjerrymiah</h6></a></div>
    <div className="time"><a href="/">2hrs</a> · <i className="fa fa-globe"></i></div>
  </div>
 
  <div className="reference">
   
    <img src={getImageRandom(500, 1900)} className="reference-thumb" alt="pic"/>

    
    <div className="reference-content">
    <div className="social-buttons">
      <span><i className="fa fa-heart-o fa-2x"></i></span>
      <span><i className="fa fa-comment-o fa-2x"></i></span>
      <span><i className="fa fa-send-o fa-2x"></i></span>
      <span style={{ float: 'right'}}><i className="fa fa-share fa-2x"></i></span>
    </div>

        <div className="reference-subtitle">
        Liked by <img className="co-logo5" src={picture1} alt="pic" onClick={props.clicked}/> <span style={{ fontWeight: 'bolder', marginRight: '3px' }}>@Jerr_ymiah</span> and 
        <span style={{ fontWeight: 'bolder' }}> others</span>
        </div>

        <div className="reference-subtitle">
          <span style={{ fontWeight: 'bolder', marginRight: '3px' }}>@Jerr_ymiah</span> 
          et iusto sed quo iure\nvoluptatem occaecati omnis eligendi
           aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
            porro eius odio et labore et velit aut
          </div>

        <div className="reference-subtitle"><span style={{ color: '#ccc', cursor: 'pointer' }} onClick={props.clicked}>view all 24 comments</span></div> 


      <div className="reference-subtitle"><span style={{ fontWeight: 'bolder', marginRight: '3px' }}>@Ike_props</span> Very impressive</div>
      <div className="reference-subtitle"><span style={{ fontWeight: 'bolder', marginRight: '3px' }}>@Manliesisco</span> Mazi o</div>
    </div>
  </div>
  <div className="social">
    <div className="social-content"></div>
    <div className="social-buttons">
    <Form className="d-flex" style={{marginRight: '50px'}}>
            <Form.Control
              type="search"
              placeholder="😀 Add a comment..."
              className="me-1"
            />
            <Button variant="outline-success">Post</Button>
          </Form>
    </div>
  </div>
</div>
    )
} );

    return(
        <Aux>
          {instagramSummary}
        </Aux>
    )
}

export default bodywork;