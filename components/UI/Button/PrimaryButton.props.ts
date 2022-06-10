export interface IPrimaryButton {
	buttonBg?: string;
	text?: string;
	label: string;
	loading?: boolean;
	size?: number;
	setValue: () => void;
}
