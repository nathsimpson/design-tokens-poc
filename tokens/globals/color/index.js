import { background } from './background';
import { border } from './border';
import { text } from './text';

export const color = {
	background,
	border,
	text,
	ungrouped: {
		light: { value: '{palette.light.value}' },
		neutral: { value: '{palette.neutral.value}' },
		info: { value: '{palette.info.value}' },
		inverse: { value: '{palette.white.value}' },
		warning: { value: '{palette.warning.value}' },
		pop: { value: '{palette.pop.value}' },
		system: { value: '{palette.system.value}' },
	},
	button: {
		background: { value: '{palette.primary.value}' },
		text: { value: '{palette.white.value}' },
		border: { value: '{palette.primary.value}' },
		icon: { value: '{palette.white.value}' },
		hover: {},
		active: {},
		disabled: {},
	},
	success: {
		foreground: { value: '{palette.text.value}' },
		foregroundBold: { value: '{palette.success.value}' },
	},
	warning: {},
	danger: {
		foreground: { value: '{palette.text.value}' },
		foregroundBold: { value: '{palette.danger.value}' },
	},
	info: {},
	primary: {},
	status: {
		success: { value: '{palette.success.value}' },
		pending: { value: '{palette.info.value}' },
		error: { value: '{palette.danger.value}' },
	},
};
