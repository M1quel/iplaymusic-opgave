import { Link } from "@reach/router";
import "./FeaturedCard.css";

function FeaturedCard (props) {


    var featuredCardBgimage = {
        "background-image": `url(${props.img})`
    }

    return (
        <Link to={"/playlists/" + props.href} style={ featuredCardBgimage } className="featuredCard">
            <div>
                <h1 className="featuredCardHeading">{ props.heading }</h1>
                <p className="featuredCardDesc">{ props.desc }</p>
            </div>
            <div className="featuredCardFade"></div>
        </Link>
    )
}

export default FeaturedCard;