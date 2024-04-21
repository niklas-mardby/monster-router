import { NavLink, Outlet } from "react-router-dom";

function Root() {
	return (
		<>
			<header>
				<h1>Root</h1>
				<nav>
					<NavLink to="/"> Start </NavLink>
					<NavLink to="/monsters"> Monsters </NavLink>
					<NavLink to="/add"> Add Monster </NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Root;
