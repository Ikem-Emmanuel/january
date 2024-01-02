import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SiMinutemailer } from "react-icons/si";
import { MdMyLocation } from "react-icons/md";
import styles from "./topbar.module.css";

const TopBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className="flex-row">
					<SiMinutemailer />
					<a href="mailto: ikem43@gmail.com?subject = Feedback">
						Contact <strong>Us</strong>
					</a>
				</div>
				<div className="flex-row">
					<MdMyLocation />
					<p>
						Lagos, <strong>Nigeria</strong>{" "}
					</p>
				</div>
				<div className="flex-row">
					<VscGithub />
					<a
						href="https://github.com/Ikem-Emmanuel"
						target="_blank"
						rel="noopener noreferrer"
					>
						Check out other <strong>Project</strong>
					</a>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
