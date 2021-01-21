import "./Category.css";

function Category (props) {

    var underCats = props.underCats;
    return(
        <article>
            <label>
                <h1>HEADING</h1>
                <div className="label">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>
            <ul>
                {underCats.map(function(cat) {
				    return <li> { cat } </li>
			    })}
            </ul>
        </article>
    )
}


export default Category;