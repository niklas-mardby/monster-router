import { NavLink } from "react-router-dom";

function NotFound() {
	return (
		<>
			<h1>Not Found</h1>
			<p>
				Go to <NavLink to="/"> Start </NavLink>
			</p>
		</>
	);
}

export default NotFound;
