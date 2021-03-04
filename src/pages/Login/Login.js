import querystring from "querystring";

export default function Login() {
	var queryParameters = querystring.stringify({
		response_type: "code",
		client_id: "7aca295d15c84a2cbef0d18dbc5246e9",
		scope: "user-read-private user-read-email playlist-read-private user-library-read",
		redirect_uri: process.env.NODE_ENV === "production"
		? "https://iplaymusic-mf11.netlify.app/callback"
		: "http://localhost:8888/callback",
		state: "vdjldfglfdlgrpoiaer9garlogihlgkzhdrlgishlro8tubzpdortuzorihglzdoighlzoirhtlzo8ghldhglzdghlzdoigh"
	});


	return (
		<>
			<h1>Login</h1>
			<a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Log in with Spotify</a>
		</>
	)
}
