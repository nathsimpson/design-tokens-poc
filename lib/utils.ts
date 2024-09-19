// const Color = require("color");

const tintColor = (baseColor: string, tint: number) => {
	const col = baseColor.replace('#', '');
	const red = parseInt(col.slice(0, 2), 16);
	const green = parseInt(col.slice(2, 4), 16);
	const blue = parseInt(col.slice(4, 6), 16);

	// const color = Color.rgb(red, green, blue);

	// return color.lightness(tint).hex();
	return baseColor;
};

export const generateTints = (baseColor: string) => {
	return {
		10: { value: tintColor(baseColor, 0.1), private: false },
		20: { value: tintColor(baseColor, 0.2), private: false },
		30: { value: tintColor(baseColor, 0.3), private: false },
		40: { value: tintColor(baseColor, 0.4), private: false },
		50: { value: baseColor, private: false },
		60: { value: tintColor(baseColor, 0.6), private: false },
		70: { value: tintColor(baseColor, 0.7), private: false },
		80: { value: tintColor(baseColor, 0.8), private: false },
		90: { value: tintColor(baseColor, 0.9), private: false },
	};
};
