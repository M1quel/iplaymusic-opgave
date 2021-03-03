import "./SecondaryNavigation.css"

function SecondaryNavigation (props) {

    var arrowStyling = {
        "display": props.arrow,
        "gridArea": "arrow"
    }
        
    var searchStyling = {
        "display": props.search,
        "gridArea": "search"
    }
    return (
        <nav className="secondaryNavigation">

            <button style={ arrowStyling } onClick={() => window.history.back()} className="secondaryNavigationBackBtn">
                <i className="fas fa-chevron-left"></i>
            </button>
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