import "./FeaturedCard.css";

function FeaturedCard (props) {


    var featuredCardBgimage = {
        "background-image": `url(${props.img})`
    }

    return (
        <article style={ featuredCardBgimage } className="featuredCard">
            <div>
                <h1 className="featuredCardHeading">{ props.heading }</h1>
                <p className="featuredCardDesc">{ props.desc }</p>
            </div>
        </article>
    )
}

export default FeaturedCard;