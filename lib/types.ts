export type ColorToken = string;

export type Brand = {
	colors: {
		background: {
			default: ColorToken;
			alternate: ColorToken;
			hero: ColorToken;
			'info-strong': ColorToken;
			'warning-strong': ColorToken;
			brand: ColorToken;
			pop: ColorToken;
		};
		border: {
			default: ColorToken;
			input: ColorToken;
			focus: ColorToken;
		};
		text: {
			default: ColorToken;
			muted: ColorToken;
			heading: ColorToken;
			link: ColorToken;
			success: ColorToken;
			error: ColorToken;
		};
	};
	border: {};
	typography: {};
};

export type Palette = {
	background: ColorToken;
	border: ColorToken;
	borderDark: ColorToken;
	focus: ColorToken;
	heading: ColorToken;
	hero: ColorToken;
	light: ColorToken;
	link: ColorToken;
	muted: ColorToken;
	neutral: ColorToken;
	pop: ColorToken;
	primary: ColorToken;
	text: ColorToken;
	success: ColorToken;
	info: ColorToken;
	warning: ColorToken;
	danger: ColorToken;
	system: ColorToken;
	white: ColorToken;
};
