import "./Category.css";

function Category (props) {
    var labelStyling = {
        "background-color": props.bgcolor
    }
    var underCats = props.underCats;
    return(
        <article className="category">
            <label style={ labelStyling } className="categoryLabel" htmlFor="check">
                <h1 className="categoryHeading">{props.heading}</h1>
                <div className="label">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>
            <input type="checkbox" name="check" id="check"/>
            <ul className="underCatList">
                {underCats.map(function(cat) {
				    return <li> { cat } </li>
			    })}
            </ul>
        </article>
    )
}


export default Category;