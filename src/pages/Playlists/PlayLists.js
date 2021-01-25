import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import Song from "../../components/Song/Song";
import "./Playlists.css";
import { Link } from "@reach/router"

function PlayLists ({ playlists }) {
    var currentID = 0
    var prevPlaylist;
    var currentPlaylist = playlists[currentID];
    var nextPlaylist = playlists[currentID + 1];
    var playlistSongs = playlists[currentID].songs;

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
                <img className="currentPlaylistImg" src={ currentPlaylist.playListImg } alt="currentPlaylist"/>
                <img className="nextPlaylistImg" src={ nextPlaylist.playListImg } alt="nextPlaylist"/>

            </div>
            <h1 className="currentPlaylistHeading">{ currentPlaylist.playlistName }</h1>
            <div className="playlistSongWrapper">
                {playlistSongs.map(function(song) {
                    return (
                        <Song
                        heading= {song.heading}
                        artist= {song.artist}
                        playTime= {song.playTime}
                        />
                    )
                })}
                <Link className="playlistListenAll" to="/"> Listen All</Link>
            </div>
        </div>
        </>
    )
}


export default PlayLists;