import "./Navigation.css"
import { Link } from "@reach/router";


function Navigation () {
    return (
        <nav className="primaryNavigation">
            <Link to="/">
                <img src="./MusicFeedIcon.png" alt="Feed"/>
            </Link>

            <Link to="/find">
                <img src="./MusicFindIcon.png" alt="Find"/>
            </Link>
            <Link to="player">
                <img src="./musicPlayerIcon.png" alt="Player"/>
            </Link>
            <img src="./nightModeIcon.png" alt="NightDayMode"/>
            <Link to="/settings">
                <img src="./SettingsIcon.png" alt="Settings"/>
            </Link>
        </nav>
    );
}


export default Navigation;