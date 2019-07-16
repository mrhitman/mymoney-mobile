import { sample } from 'lodash';
import { Icon } from 'native-base';
import React from 'react';
import ColorPalette from 'react-native-color-palette';

interface ColorPickerProps {
	title?: string;
	value: string;
	onChange: (color: string) => void;
}

const defaultColors = [
	'#C0392B',
	'#E74C3C',
	'#9B59B6',
	'#8E44AD',
	'#2980B9',
	'#4CAF50',
	'#96a398',
	'#FFD54F',
	'#607D8B',
	'#7986CB',
	'#A1887F',
	'#111111'
];

const ColorPicker = (props: ColorPickerProps) => {
	return (
		<ColorPalette
			onChange={props.onChange}
			value={props.value || sample(defaultColors)}
			colors={defaultColors}
			title={props.title || ''}
			icon={
				<Icon name="checkmark-circle-outline" style={{ fontSize: 18, marginLeft: 5, marginTop: 2, color: 'white' }} />
			}
		/>
	);
};

export default ColorPicker;
