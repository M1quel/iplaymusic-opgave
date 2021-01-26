import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import "./Player.css";
import React, { useEffect } from "react";

function Player (props) {
    useEffect(function() {
        var audio = document.querySelector(".dinMor");
        if(!audio.currentTime){
            document.querySelector(".playerCurrentTime").innerText = "0";
        }
        audio.addEventListener("timeupdate", function () {
            document.querySelector(".playerCurrentTime").innerText = Math.floor(audio.currentTime)
        })


        // play music
    }, []);
    function playPause () {
        let audio = document.querySelector(".dinMor");
        let playBtn = document.querySelector(".playerPlay");
        let pauseBtn = document.querySelector(".playerPause");
        if(playBtn) {
            playBtn.classList.replace("playerPlay", "playerPause")
            playBtn.classList.replace("fa-play", "fa-pause")
            audio.play()
        }
        if (pauseBtn) {
            pauseBtn.classList.replace("playerPause", "playerPlay")
            pauseBtn.classList.replace("fa-pause", "fa-play")
            audio.pause()
        }
    }
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
                <div className="artistImgWrapper">
                    <img className="playerArtistImg" src={props.artistImg} alt=""/>
                </div>
            </section>
            <section className="playerControls">
                <div className="playerDesc">
                    <h1 className="playerSongName">{props.heading}</h1>
                    <p className="playerArtist">{props.artist}</p>
                </div>
                <div className="playerTimeline">
                    <audio id="playerSong" controlsList="nodownload" className="dinMor" src={ props.songSrc } controls></audio>
                    <div className="playerTimes">
                        <p className="playerCurrentTime"></p>
                        <p className="playerTotalTime">{ props.songDuration }</p>
                    </div>
                </div>
                <div className="controlsWrapper">
                    <i className="fas fa-step-backward otherControls"></i>
                    <i className="fas fa-backward otherControls"></i>
                    <i onClick={playPause} className="fas fa-play playerPlay"></i>
                    <i className="fas fa-forward otherControls"></i>
                    <i className="fas fa-step-forward otherControls"></i>
                </div>
            </section>
        </section>
        
    )
    
}

export default Player;