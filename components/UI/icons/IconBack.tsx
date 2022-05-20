import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
	color: string;
	size: number;
}

export function IconBack(props: Props) {
	return (
		<Svg viewBox='0 0 512 512' width={props.size} height={props.size}>
			<Path
				fill='none'
				stroke={props.color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={48}
				d='M328 112L184 256l144 144'
			/>
		</Svg>
	);
}
