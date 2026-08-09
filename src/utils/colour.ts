export const hexToRGB = (hex: string): [number, number, number] | undefined => {
	const value = hex.replace("#", "");
	if (!/^[\da-f]{6}$/i.test(value)) return undefined;

	return [
		Number.parseInt(value.slice(0, 2), 16),
		Number.parseInt(value.slice(2, 4), 16),
		Number.parseInt(value.slice(4, 6), 16),
	];
};
