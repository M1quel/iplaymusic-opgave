import FeaturedAlbum from "../../components/FeaturedAlbum/FeaturedAlbum";
import NewReleaseAlbum from "../../components/NewReleaseAlbum/NewReleaseAlbum";
import "./Albums.css";
import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation"


function Albums() {
    return (
        <>
          <SecondaryNavigation
            heading="Albums"
          />
          <header className="albumsHeader">
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