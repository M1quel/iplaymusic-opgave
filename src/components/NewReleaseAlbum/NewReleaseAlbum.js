import "./NewReleaseAlbum.css";

function NewReleaseAlbum (props) {

    return (
        <article className="newReleaseAlbum">
            <img src={ props.img } alt=""/>
            <div className="newReleaseAlbumDesc">
                <h1 className="newReleaseAlbumHeading">{ props.heading }</h1>
                <p className="newReleaseAlbumArtist">{ props.artist }</p>
            </div>

            <p className="newReleaseAlbumSongNum">{ props.songNum } Songs</p>

        </article>
    )
}

export default NewReleaseAlbum;