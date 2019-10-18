import React, { Component } from 'react'
import YoutubeBackground from 'react-youtube-background'
import "./home.css"


class Home extends Component {
    render(){
        return(

<React.Fragment>
<div>
    <p id="descriptive-paragraph">
        Welcome to Speed-Shot, your go-to application for tracking your personal progress as a competative or self defense shooter.
    </p>
</div>
                <div className="video-background">

                    <div className="video-foreground">
                        <YoutubeBackground id="myVideo"
                            videoId="sJVpUWCGztQ"
                            overlay="(0, 0, 0, 0.5)" // defaults -> null | e.g. "rgba(0,0,0,.4)"
                            nocookie
                            // aspectRatio={"16:9"} // default -> "16:9"
                            className="myVideo">
                                </YoutubeBackground>


                        </div>
                        </div>
                        </React.Fragment>



        )
    }
}
export default Home