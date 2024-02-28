interface IconifyIconProps {
	icon: string;
	width?: number | string;
	height?: number | string;
	style?: React.CSSProperties;
	onClick?: React.MouseEventHandler<SVGSVGElement>;
}

declare namespace JSX {
	interface IntrinsicElements {
		"iconify-icon": IconifyIconProps;
	}
}
