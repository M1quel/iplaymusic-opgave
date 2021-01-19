import { Link } from "@reach/router";
import "./SecondaryNavigation.css"

function SecondaryNavigation (props) {

    var arrowStyling = {
        "display": props.arrow,
        "grid-area": "arrow"
    }
        
    var searchStyling = {
        "display": props.search,
        "grid-area": "search"
    }
    return (
        <nav className="secondaryNavigation">
            <div>
                <Link style={ arrowStyling } to="/">
                    <i className="fas fa-chevron-left"></i>
                </Link>
            </div>
            <div className="secondaryNavigationHeadingWrapper">
                <h1 className="secondaryNavigationHeading">{ props.heading }</h1>
            </div>
            <div className="secondaryNavigationSearch">
                <i style={ searchStyling } className="fas fa-search"></i>
            </div>
            
        </nav>
    )
}


export default SecondaryNavigation;