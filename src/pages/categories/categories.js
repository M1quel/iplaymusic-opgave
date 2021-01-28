import "./categories.css";
import PageHeading from "../../components/pageHeading/pageHeading";
import SecondaryNavigation from "../../components/secondaryNavigation/SecondaryNavigation";
import Navigation from "../../components/Navigation/Navigation";
import Category from "../../components/Category/Category";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../TokenContext";


function Categories () {
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

	useEffect(function() {
		axios.get("https://api.spotify.com/v1/browse/categories", {
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
        <SecondaryNavigation 
        heading="Categories"
        /> 
        <header className="categoriesHeader">
            <PageHeading>Categories</PageHeading>
        </header>

        <div className="categoriesWrapper">
            {content.categories && content.categories.items.map((category, index) => {
                return(<Category key= {index}
                heading={category.id}
                bgcolor="red"
                href={category.href}
                />)
            })}
        </div>
        <Navigation/>
        </>

    )
}


export default Categories;