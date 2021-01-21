import "./categories.css";
import PageHeading from "../../components/pageHeading/pageHeading";
import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import Navigation from "../../components/Navigation/Navigation";
import Category from "../../components/Category/Category";


function Categories () {

    var underCats = [
        "hej",
        "med",
        "dig"
    ]
    return (
        <>
        <SecondaryNavigation 
        heading="Categories"
        /> 
        <header className="categoriesHeader">
            <PageHeading>Categories</PageHeading>
        </header>

        <Category
        heading = "Blues"
        underCats = { underCats }
        bgcolor="lightblue"
        />
        <Navigation/>
        </>

    )
}


export default Categories;