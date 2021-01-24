import "./Category.css";

function Category (props) {
    var labelStyling = {
        "backgroundColor": props.bgcolor
    }
    var underCats = props.underCats;
    return(
        <article className="category">
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
                {underCats.map(function(cat) {
				    return (
                        <li className="underCat">
                            <a href="#">
                                <p>{cat}</p>
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </li>
                    )
			    })}
            </ul>
        </article>
    )
}


export default Category;