"use client";
import React, { useState } from "react";
import Link from "next/link";
import Styles from "./links.module.css";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";

const link = () => {
	const pathName = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const menu = [
		{ title: "Home", path: "/" },
		{ title: "About", path: "/about" },
		{ title: "Contact", path: "/contact" },
		{ title: "Blog", path: "/blog" },
	];
	const session = true;
	const isAdmin = true;
	return (
		<div className={Styles.container}>
			<div className={Styles.links}>
				{menu.map(link => (
					<Link
						className={`${pathName === link.path && Styles.active}`}
						href={link.path}
						key={link.title}
					>
						{link.title}
					</Link>
				))}
				<div className={Styles.divider}></div>
				{session ? (
					<>
						{isAdmin && <Link href="/admin">Admin</Link>}
						<button className={Styles.logout}>Logout</button>
					</>
				) : (
					<Link href="/login">Login</Link>
				)}
			</div>
			<div className={Styles.menuButton} onClick={() => setIsOpen(prev => !prev)}>
				<MdMenu size={25} />
			</div>
			{isOpen && (
				<div className={Styles.mobileLinks}>
					{menu.map(link => (
						<Link
							className={`${pathName === link.path && Styles.active}`}
							href={link.path}
							key={link.title}
						>
							{link.title}
						</Link>
					))}
					<div className={Styles.divider}></div>
					{session ? (
						<>
							{isAdmin && <Link href="/admin">Admin</Link>}
							<button className={Styles.logout}>Logout</button>
						</>
					) : (
						<Link href="/login">Login</Link>
					)}
				</div>
			)}
		</div>
	);
};

export default link;
