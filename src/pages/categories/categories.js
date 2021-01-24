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

        <div className="categoriesWrapper">
            <Category
            heading = "Blues"
            underCats = { underCats }
            bgcolor="lightblue"
            />
            <Category
            heading = "Alternative"
            underCats = { underCats }
            bgcolor="red"
            />
            <Category
            heading = "Classical"
            underCats = { underCats }
            bgcolor="hotpink"
            />
        </div>
        <Navigation/>
        </>

    )
}


export default Categories;