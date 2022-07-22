import React from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Spinner from "../UI/Spinner/Spinner";
import './Profile.css';

const profile = ( props ) => {
    return (
        <Aux>
            <header>

<div className="container">

    <div className="profile">

        <div className="profile-image">

            <img src="https://source.unsplash.com/300x300?male,portrait" alt="pic"/>

        </div>

        <div className="profile-user-settings">

            <h1 className="profile-user-name">Jerr_ymiah</h1>

            <button className="btn profile-edit-btn" onClick={props.clicked}>Edit Profile</button>

            <button className="btn profile-settings-btn" aria-label="profile settings" onClick={props.clicked}><i className="fa fa-cog" aria-hidden="true"></i></button>

        </div>

        <div className="profile-stats">

            <ul>
                <li><span className="profile-stat-count" onClick={props.clicked}>164</span> posts</li>
                <li><span className="profile-stat-count" onClick={props.clicked}>188</span> followers</li>
                <li><span className="profile-stat-count" onClick={props.clicked}>206</span> following</li>
            </ul>

        </div>

        <div className="profile-bio">

            <p><span className="profile-real-name" onClick={props.clicked}>Jeremiah_</span> Instagram Clone App 📷✈️🏕️</p>

        </div>

    </div>

</div>


</header>

<main>

<div className="container">

    <div className="gallery">

        <div className="gallery-item" tabindex="0" onClick={props.clicked}>

            <img src="https://source.unsplash.com/1600x1200?female,portrait" className="gallery-image" alt="" onClick={props.clicked}/>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes" onClick={props.clicked}><span className="visually-hidden">Likes:</span><i className="fa fa-heart" aria-hidden="true"></i> 56</li>
                    <li className="gallery-item-comments" onClick={props.clicked}><span className="visually-hidden">Comments:</span><i className="fa fa-comment" aria-hidden="true"></i> 2</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabindex="0" onClick={props.clicked}>

            <img src="https://source.unsplash.com/800x600?female,portrait" className="gallery-image" alt="" onClick={props.clicked}/>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes" onClick={props.clicked}><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 89</li>
                    <li className="gallery-item-comments" onClick={props.clicked}><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 5</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabindex="0" onClick={props.clicked}>

            <img src="https://source.unsplash.com/1600x1200?male,portrait" className="gallery-image" alt="" onClick={props.clicked}/>

            <div className="gallery-item-type">

                <span className="visually-hidden" onClick={props.clicked}>Gallery</span><i className="fa fa-clone" aria-hidden="true"></i>

            </div>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes" onClick={props.clicked}><span className="visually-hidden">Likes:</span><i className="fa fa-heart" aria-hidden="true"></i> 42</li>
                    <li className="gallery-item-comments" onClick={props.clicked}><span className="visually-hidden">Comments:</span><i className="fa fa-comment" aria-hidden="true"></i> 1</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabindex="0" onClick={props.clicked}>

            <img src="https://source.unsplash.com/1200x1400?female,portrait" className="gallery-image" alt="" onClick={props.clicked}/>

            <div className="gallery-item-type">

                <span className="visually-hidden">Video</span><i className="fa fa-video" aria-hidden="true"></i>

            </div>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes" onClick={props.clicked}><span className="visually-hidden">Likes:</span><i className="fa fa-heart" aria-hidden="true"></i> 38</li>
                    <li className="gallery-item-comments" onClick={props.clicked}><span className="visually-hidden">Comments:</span><i className="fa fa-comment" aria-hidden="true"></i> 0</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabindex="0" onClick={props.clicked}>

            <img src="https://source.unsplash.com/1300x1200?male,portrait" className="gallery-image" alt="" onClick={props.clicked}/>

            <div className="gallery-item-type">

                <span className="visually-hidden">Gallery</span><i className="fa fa-clone" aria-hidden="true"></i>

            </div>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes" onClick={props.clicked}><span className="visually-hidden">Likes:</span><i className="fa fa-heart" aria-hidden="true"></i> 47</li>
                    <li className="gallery-item-comments" onClick={props.clicked}><span className="visually-hidden">Comments:</span><i className="fa fa-comment" aria-hidden="true"></i> 1</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabindex="0" onClick={props.clicked}>

            <img src="https://source.unsplash.com/1200x1400?male,portrait" className="gallery-image" alt="" onClick={props.clicked}/>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes" onClick={props.clicked}><span className="visually-hidden">Likes:</span><i className="fa fa-heart" aria-hidden="true"></i> 94</li>
                    <li className="gallery-item-comments" onClick={props.clicked}><span className="visually-hidden">Comments:</span><i className="fa fa-comment" aria-hidden="true"></i> 3</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabindex="0" onClick={props.clicked}>

            <img src="https://source.unsplash.com/2000x1500?female,portrait" className="gallery-image" alt="" onClick={props.clicked}/>

            <div className="gallery-item-type">

                <span className="visually-hidden">Gallery</span><i className="fa fa-clone" aria-hidden="true"></i>

            </div>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes" onClick={props.clicked}><span className="visually-hidden">Likes:</span><i className="fa fa-heart" aria-hidden="true"></i> 52</li>
                    <li className="gallery-item-comments" onClick={props.clicked}><span className="visually-hidden">Comments:</span><i className="fa fa-comment" aria-hidden="true"></i> 4</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabindex="0" onClick={props.clicked}>

            <img src="https://source.unsplash.com/1500x1200?male,portrait" className="gallery-image" alt="" onClick={props.clicked}/>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes" onClick={props.clicked}><span className="visually-hidden">Likes:</span><i className="fa fa-heart" aria-hidden="true"></i> 66</li>
                    <li className="gallery-item-comments" onClick={props.clicked}><span className="visually-hidden">Comments:</span><i className="fa fa-comment" aria-hidden="true"></i> 2</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" tabindex="0" onClick={props.clicked}>

            <img src="https://source.unsplash.com/1000x1000?male,portrait" className="gallery-image" alt="" onClick={props.clicked}/>

            <div className="gallery-item-type">

                <span className="visually-hidden">Gallery</span><i className="fa fa-clone" aria-hidden="true"></i>

            </div>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes" onClick={props.clicked}><span className="visually-hidden">Likes:</span><i className="fa fa-heart" aria-hidden="true"></i> 45</li>
                    <li className="gallery-item-comments" onClick={props.clicked}><span className="visually-hidden">Comments:</span><i className="fa fa-comment" aria-hidden="true"></i> 0</li>
                </ul>

            </div>

        </div>

    </div>
    

    <Spinner />

</div>


</main>
        </Aux>
    )
}

export default profile;