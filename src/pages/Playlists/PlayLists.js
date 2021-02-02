import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import Song from "../../components/Song/Song";
import "./Playlists.css";
import { Link, navigate } from "@reach/router"
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../TokenContext";
import axios from "axios";

function PlayLists (props) {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    useEffect(function() {
        if(props.id) {
            var fetchLink = "https://api.spotify.com/v1/playlists/" + props.id;
            console.log(fetchLink)
            axios.get(fetchLink, {
                headers: {
                    "Authorization": "Bearer " + token.access_token
                }
            })
            .then(response => {
                setContent(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                if(error) {
                    return;
                }
            });
        } else {
            var fetchLink = "https://api.spotify.com/v1/me/playlists";
            console.log(fetchLink)
            axios.get(fetchLink, {
                headers: {
                    "Authorization": "Bearer " + token.access_token
                }
            })
            .then(response => {
                setContent(response.data)
                console.log(response.data)
            })
        }
    }, [token, setContent]);


    
    return (
        <>
        <header className="playlistsHeader">
            <img className="headerSoundwave" src="./sound-wave.png" alt=""/>
            <SecondaryNavigation
            heading = "Playlists"
            />
            <h1 className="playlistsMainHeading">Playlists</h1>
        </header>
        <div className="playlistsMain">
            <div className="carousel">
                <img className="prevPlaylistImg" src="https://via.placeholder.com/200" alt="prevPlaylist"/>
                <Link to={"/user/" + {content.id ? content.id : content.items?.[0]}><img className="currentPlaylistImg" src={props.id ? content?.images?.[0].url : content?.items?.[0]?.images[0]?.url} alt="currentPlaylist"/></Link>
                <img className="nextPlaylistImg" src="" alt="nextPlaylist"/>

            </div>
            <h1 className="currentPlaylistHeading"></h1>
            <div className="playlistSongWrapper">
                {content.tracks?.items.map(function(song, index) {
                    return (<Song key ={index}
                        heading= {song.track?.name}
                        artist= {song.track?.artists?.[0]?.name}
                        playTime= {song.track?.duration_ms}
                    />)
                })}
                
                <Link className="playlistListenAll" to="/"> Listen All</Link>
            </div>
        </div>
        </>
    )
}


export default PlayLists;