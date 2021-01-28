import "./AlbumDetails.css";
import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import Song from "../../components/Song/Song";

function AlbumDetails(props) {
    var hashes = props.hashes;
    var headerStyling = {
        backgroundImage: "url(https://via.placeholder.com/400)",
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
                    <h1 className="albumDetailsHeading">{ props.heading }</h1>
                    <p className="albumDetailsHeaderSongNum">{ props.songNum + " Songs" }</p>
                </div>
                <div className="albumDetailsHeaderHashtags">
                    <p className="albumDetailsHeaderHashtagsHeading">Genres hashtags</p>
                    <div className="albumDetailsHeaderHashtagWrapper">
                        {hashes.map(function(hash) {
                            return (
                                <p className="albumHashtag">{ hash }</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </header>

        <div className="albumDetailsMain">
            <p className="albumDetailsMainHeading"> All songs</p>
            <div className="songWrapper">
                <Song
                heading="Old Town Road"
                artist="Billy Ray Cyrus"
                playTime="3:58"

                />
                <Song
                heading="Old Town Road"
                artist="Billy Ray Cyrus"
                playTime="3:58"

                />
                <Song
                heading="Old Town Road"
                artist="Billy Ray Cyrus"
                playTime="3:58"

                />
                <Song
                heading="Old Town Road"
                artist="Billy Ray Cyrus"
                playTime="3:58"

                />
            </div>
        </div>


        </>
    )
}

export default AlbumDetails;