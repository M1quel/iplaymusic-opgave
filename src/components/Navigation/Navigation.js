import "./Navigation.css"
import { Link } from "@reach/router";


function Navigation () {
    return (
        <nav className="primaryNavigation">
            <Link to="/albums">
                <i class="fas fa-th-large navigationIcon"></i>
            </Link>

            <Link to="/categories">
                <i class="fas fa-bars navigationIcon"></i>
            </Link>
            <Link to="/featured" class="feedicon">
            <span class="material-icons">
                wifi_tethering
            </span>
            </Link>
            <i class="fas fa-adjust navigationIcon"></i>
            <Link to="/user">
                <i class="fas fa-cog navigationIcon"></i>
            </Link>
        </nav>
    );
}


export default Navigation;