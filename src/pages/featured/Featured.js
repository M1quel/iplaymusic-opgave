import FeaturedCard from "../../components/FeaturedCards/FeaturedCard";
import PageHeading from "../../components/pageHeading/pageHeading";
import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import "./featured.css";

function Featured () {
    return (
        <>
        <SecondaryNavigation
        heading="Featured"
        />
        <header className ="featuredHeader">
            <PageHeading>Featured</PageHeading>
        </header>
        <section className="featuredMain">
            <FeaturedCard
            heading="Hej med dig"
            desc="Hej med dig 2"
            img="https://via.placeholder.com/100"
            />
        </section>
        </>
    )
}


export default Featured;