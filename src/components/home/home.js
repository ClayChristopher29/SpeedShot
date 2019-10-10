import React, { Component } from 'react'
import YoutubeBackground from 'react-youtube-background'
import "./home.css"


class Home extends Component {
    render(){
        return(



                <div className="video-background">
                    <div className="video-foreground">
                        <YoutubeBackground id="myVideo"
                            videoId="sJVpUWCGztQ"
                            overlay="(0, 0, 0, 0.5)" // defaults -> null | e.g. "rgba(0,0,0,.4)"
                            nocookie
                            // aspectRatio={"16:9"} // default -> "16:9"
                            className="myVideo">
                                <h1 className="main-header" id="home-header">Welcome to Speed-Shot</h1>
            <h3 className="sub-header" id ="sub-home-header">Speed-Shot is your go to application for saving your range data, and showing how you are progressing as a shooter.</h3>
                                </YoutubeBackground>


                        </div>
                        </div>



        )
    }
}
export default Home