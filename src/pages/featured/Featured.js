import FeaturedCard from "../../components/FeaturedCards/FeaturedCard";
import PageHeading from "../../components/pageHeading/pageHeading";
import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import "./featured.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../TokenContext";

function Featured () {

    var [token] = useContext(TokenContext);
	var [content, setContent] = useState({});

	useEffect(function() {
        axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response => setContent(response.data));
	}, [token, setContent]);
    return (
        <>
        <header className ="featuredHeader">
            <SecondaryNavigation
            heading="Featured"
            />
            <PageHeading>Featured</PageHeading>
        </header>
        <section className="featuredMain">
            {content.playlists && content.playlists.items.map(function (playlist) {
                return (<FeaturedCard
                heading = {playlist.name}
                desc = {playlist.type}
                img = {playlist.images[0].url}
                href={playlist.id}
                
                />)
            })}
        </section>
        </>
    )
}


export default Featured;