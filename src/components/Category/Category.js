import "./Category.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../TokenContext";
import { Link } from "@reach/router"
function Category (props) {
    
    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

	useEffect(function() {
		axios.get(props.href + "/playlists", {
			headers: {
				"Authorization": "Bearer " + token.access_token
			}
		})
		.then(response => {
            setContent(response.data)

        })
        .catch(function (error) {
            if(error) {
                return;
            }
        });
    }, [token, setContent]);
    
    
    
    var labelStyling = {
        "backgroundColor": props.bgcolor
    }

    return(
        <article  className="category">
            <input type="checkbox" name="check" id={props.heading + "check"}/>
            <label style={ labelStyling } className="categoryLabel" htmlFor={ props.heading + "check" }>
                <h1 className="categoryHeading">{props.heading}</h1>
                <div className="label">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>
            <ul className="underCatList">
                {content.playlists?.items.map(function(category, index) {
				    return (
                        <li className="underCat" key={index}>
                            <Link type="playlists" to={"/albumDetails/" + "playlists/" + category.id}>
                                <p>{category.name}</p>
                                <i className="fas fa-chevron-right"></i>
                            </Link>
                        </li>
                    )
			    })}
            </ul>
        </article>
    )
}


export default Category;