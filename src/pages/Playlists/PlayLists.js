import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import Song from "../../components/Song/Song";
import "./Playlists.css";
import { Link } from "@reach/router"
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../TokenContext";
import axios from "axios";
import * as Sentry from "@sentry/react";

function PlayLists (props) {
    
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    useEffect(function() {
        var fetchLink;
        if(props.id) {
            fetchLink = "https://api.spotify.com/v1/playlists/" + props.id;
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
            fetchLink = "https://api.spotify.com/v1/me/playlists";
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
    }, [props, token, setContent]);

    function buildLink (content, num) {
        if(content.id) {
            return (content.id)
        }
        else if (content.items?.[num]?.id) {
            return (content.items?.[num]?.id)
        }
    }
    function buildSrc (content, num) {
        console.log("Hej med dig")
        if(content.images?.[num]?.url) {
            return (content.images?.[0]?.url)
        }
        else if (content.items?.[num]?.images?.[0]?.url) {
            return (content.items?.[num]?.images?.[0]?.url)
        }
    }
    

    
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
                <Link to={"/user/" + buildLink(content, 0)}><img className="currentPlaylistImg" src={buildSrc(content, 0)} alt="currentPlaylist"/></Link>
                <img className="nextPlaylistImg" src={buildSrc(content, 1)} alt="nextPlaylist"/>

            </div>
            <h1 className="currentPlaylistHeading">Heading</h1>
            <Sentry.ErrorBoundary fallback={"Playlist can't be acquired"}>
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
            </Sentry.ErrorBoundary>
        </div>
        </>
    )
}


export default PlayLists;