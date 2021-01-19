import FeaturedCard from "../../components/FeaturedCards/FeaturedCard";
import Navigation from "../../components/Navigation/Navigation";
import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";


function Featured () {
    return (
        <>
        <SecondaryNavigation/>
        <header>
            <h1>Featured</h1>
        </header>
        <FeaturedCard
        heading="Hej med dig"
        desc="Hej med dig 2"
        img="https://via.placeholder.com/100"
        />
        </>
    )
}


export default Featured;