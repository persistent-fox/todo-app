import { memo, type FC, type SVGProps } from "react";

export type PIconProps = SVGProps<SVGSVGElement> & {
	size?: number;
	color?: string;
	background?: string;
};

export const Check: FC<PIconProps> = memo(({ color, size, ...rest }) => (
	<svg width={size} height={size} data-name='Layer 1' viewBox='0 0 16 16' {...rest}>
		<path d='m2.67 7.63 2.79 2.78 7.87-7.87 1.52 1.52-9.39 9.4-4.31-4.31 1.52-1.52z' fill='#66c847' />
	</svg>
));
