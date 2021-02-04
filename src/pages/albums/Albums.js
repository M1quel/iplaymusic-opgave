import FeaturedAlbum from "../../components/FeaturedAlbum/FeaturedAlbum";
import NewReleaseAlbum from "../../components/NewReleaseAlbum/NewReleaseAlbum";
import "./Albums.css";
import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../TokenContext";

function Albums() {
  var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

	useEffect(function() {
		axios.get("https://api.spotify.com/v1/browse/new-releases", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response => {
            setContent(response.data)

        });
    }, [token, setContent]);








    return (
        <>
          <header className="albumsHeader">
            <SecondaryNavigation
              heading="Albums"
            />
            <h1 className="albumsHeading">All albums</h1>
          </header>

          <div className="featuredAlbums">
            <header className="featuredAlbumsHeader">
              <p className="featuredAlbumsHeading">Featured Albums</p>
              <a className="viewAllFeatured" href="/">View All</a>
            </header>
            <div className="featuredAlbumsWrapper">
              <FeaturedAlbum/>
              <FeaturedAlbum/>
              <FeaturedAlbum/>
              <FeaturedAlbum/>
            </div>
          </div>
          <div className="newAlbumWrapper">
            <header className="newAlbumsHeader">
              <p className="newAlbumsHeading">New Releases</p>
              <a className="viewAllNew" href="/">View All</a>
            </header>
            {content.albums?.items.map(function(album, index) {
              if(index >= 7) {
                return;
              } else {
                return (
                  <NewReleaseAlbum
                    heading={album.name}
                    artist={album.artists.map(function(artist, index) {
                      if(album.artists.length <= index + 1) {
                        return (artist.name);
                      } else {
                        return (artist.name + ", ")
                      }
                    })}
                    songNum={album.total_tracks}
                    img={album.images?.[2].url}
                    id={album.id}
                  />
                )
              }
            })}
            
            <NewReleaseAlbum
              heading="Old Town Road"
              artist="Billy Ray Cyrus"
              songNum="12"
              img="https://via.placeholder.com/50"
            />
            <NewReleaseAlbum
              heading="Old Town Road"
              artist="Billy Ray Cyrus"
              songNum="12"
              img="https://via.placeholder.com/50"
            />
          </div>
          
      </>
    )
}

export default Albums;