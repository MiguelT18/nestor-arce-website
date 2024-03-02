import React from "react";

export default function Button({ children, target }) {
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			className="hover:scale-125 hover:rotate-12 transition-all"
			href={target}
		>
			{children}
		</a>
	);
}
