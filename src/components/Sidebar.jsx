import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<AppNav />

			{/* 
			- Outlet component use to renders the current nested router
			- Use here to display cities and countries in a nested structure 
			- Child routes will be rendered inside this Outlet placeholder
			*/}
			<Outlet />

			<Footer />
		</div>
	);
}
