import React from "react";
import Link from "./links";
import Image from "next/image";
import styles from "./navbar.module.css";
import TopBar from "./TopBar";

const Navbar = () => {
	return (
		<div>
			<TopBar />
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.menu_div}>
						<div>
							<Image src="/logo.png" alt="logo" width={104} height={33} />
						</div>
						<div>
							<Link />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
