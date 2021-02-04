import "./AlbumDetails.css";
import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import Song from "../../components/Song/Song";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../TokenContext";

function AlbumDetails(props) {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});
    if(props.type == "playlists") {
        var fetchLink = "https://api.spotify.com/v1/playlists/" + props.id
    } else {
        var fetchLink = "https://api.spotify.com/v1/albums/" + props.id
    }

	useEffect(function() {
        axios.get(fetchLink, {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response => setContent(response.data));
	}, [token, setContent]);
    
    function test(song) {
        return song.artists?.map(function(artist, index) {
            if(song.artists.length <= index + 1) {
                return artist.name;
            } else {
                return artist.name + ", ";
            }
        })
    }
    function test2(song) {
        return song.track?.artists?.map(function(artist, index) {
            if(song.track.artists.length <= index + 1) {
                return artist.name;
            } else {
                return artist.name + ", ";
            }
        })
    }




    var imgUrl = "url(" + content.images?.[0].url + ")"

    var headerStyling = {
        backgroundImage: imgUrl,
        height: "40vh"
    }
    return (
        <>
        <header style = { headerStyling } className="albumDetailsHeader">
            <SecondaryNavigation
            heading="Album"
            search="none"
            />
            <div className="albumDetailsHeaderContent">
                <div>
                    <h1 className="albumDetailsHeading">{ content.name }</h1>
                    <p className="albumDetailsHeaderSongNum">{ content.total_tracks ? content.total_tracks : content.tracks?.total + " Songs" }</p>
                </div>
                {/* <div className="albumDetailsHeaderHashtags">
                    <p className="albumDetailsHeaderHashtagsHeading">Genres hashtags</p>
                    <div className="albumDetailsHeaderHashtagWrapper">
                        {hashes.map(function(hash) {
                            return (
                                <p className="albumHashtag">{ hash }</p>
                            )
                        })}
                    </div>
                </div> */}
            </div>
        </header>
        {/* {isLoggedIn ? 'currently' : 'not'} */}
        <div className="albumDetailsMain">
            <p className="albumDetailsMainHeading"> All songs</p>
            <div className="songWrapper">
                {content.tracks?.items.map(function (song, index) {
                    return (<Song key={index}
                    heading={song.name ? song.name : song.track.name}
                    artist={song.artists ? test(song) : test2(song)}
                        
                    playTime="3:58"
    
                    />)
                })}
            </div>
        </div>


        </>
    )
}

export default AlbumDetails;