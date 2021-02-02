import "./NewReleaseAlbum.css";
import { Link } from "@reach/router";

function NewReleaseAlbum (props) {

    return (
        <Link to={"/albumDetails/" + props.id} className="newReleaseAlbum">
            <img src={ props.img } alt=""/>
            <div className="newReleaseAlbumDesc">
                <h1 className="newReleaseAlbumHeading">{ props.heading }</h1>
                <p className="newReleaseAlbumArtist">{ props.artist }</p>
            </div>

            <p className="newReleaseAlbumSongNum">{ props.songNum } Songs</p>

        </Link>
    )
}

export default NewReleaseAlbum;