import "./Song.css";

function Song (props) {
    return (
        <article className="song">
            <i className="fas fa-play"></i>
            <div className="songDesc">
                <h1 className="songHeading">{ props.heading }</h1>
                <p className="songArtist">{ props.artist }</p>
            </div>
            <p className="songPlayTime">{ props.playTime }</p>
        </article>
    )
}

export default Song;