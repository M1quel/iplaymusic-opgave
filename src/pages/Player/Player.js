import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import "./Player.css";
import React, { useEffect } from "react";

function Player (props) {
    useEffect(function() {
        var audio = document.querySelector(".dinMor");
        console.log(audio.currentTime)
        audio.addEventListener("timeupdate", function () {
            console.log(Math.floor(audio.currentTime))
        })
    }, []);
    var pageStyling = {
        "backgroundImage": "url(" + props.bgImg + ")"
    }

    return (
        <section style={ pageStyling } className="playerPage">
            <SecondaryNavigation
            heading="Playing"
            search="none"
            />
            <section className="playerArtistImgSection">
                {/* profile */}
                <div className="artistImgWrapper">
                    <img className="playerArtistImg" src={props.artistImg} alt=""/>
                </div>
            </section>
            <section className="playerControls">
                <div className="playerDesc">
                    <h1 className="playerSongName">{props.heading}</h1>
                    <p className="playerArtist">{props.artist}</p>
                </div>
                <div>
                    <audio controlsList="nodownload" className="dinMor" src={ props.songSrc } controls></audio>
                    <p>CURRENTTIME</p>
                    <p>TOTALTIME</p>
                </div>
                <div className="controlsWrapper">
                    <i className="fas fa-step-backward"></i>
                    <i className="fas fa-backward"></i>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-forward"></i>
                    <i className="fas fa-step-forward"></i>
                </div>
            </section>
            <h1 ></h1>
        </section>
        
    )
    
}

export default Player;