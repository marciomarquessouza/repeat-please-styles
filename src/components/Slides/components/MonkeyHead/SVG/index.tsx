import React, { useState, useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import { Mouth } from './MouthSVG';
import { EyeBrow } from './EyesBrownSVG';
import { Eyes } from './EyesSVG';

export enum Faces {
	sad = "sad",
	curious = "curious",
	happy = "happy",
}

interface IMonkeyHeadProps {
	width: number;
	height: number;
	index: number;
}

interface IMonkeyHeadState {
	faceID: number | null;
}

export const MonkeyHeadSVG = (props: IMonkeyHeadProps): JSX.Element | null => {
	const [faceID, setFaceID] = useState(props.index);
	useEffect(() => setFaceID(props.index), [props.index]);
	let face: Faces;
	switch (faceID) {
		case 0:
			face = Faces.sad;
			break;
		case 1:
			face = Faces.curious;
			break;
		case 2:
			face = Faces.happy;
			break;
		default:
			return null;
	}

	return (
		<Svg fill="none" {...props}>
			<Path
				d="M125.262 105.258l-24.694-21.294-42.092 43.99 23.571 58.841 2.245 52.956 53.598 35.024 46.862-42.029-9.541-59.961 19.924-37.266-2.066-27.721-33.951-27.23-33.856 24.69z"
				fill="#fff"
				stroke="#000"
				strokeWidth={8}
			/>
			<Path
				d="M209.83 98.098c.174-25.55-20.279-68.238-63.021-69.112M100.007 45.857s-60.988 27.166-58.245 70.916c.309 4.923-2.1-5.328 0 0M98.957 4s33.821 10.13 47.912 25.046M87.527 12.442s35.512 13.508 48.476 24.764M74.281 26.513s12.614-5.476 52.703 16.04"
				stroke="#000"
				strokeWidth={8}
				strokeLinecap="round"
			/>
			{Eyes[face]}
			<Path
				d="M126.836 192.338a2.817 2.817 0 002.819-2.815 2.817 2.817 0 00-2.819-2.814 2.817 2.817 0 00-2.82 2.814 2.818 2.818 0 002.82 2.815zM143.991 192.338a2.817 2.817 0 002.819-2.815 2.817 2.817 0 00-2.819-2.814 2.817 2.817 0 00-2.819 2.814 2.817 2.817 0 002.819 2.815z"
				fill="#000"
				stroke="#000"
				strokeWidth={8}
				strokeLinecap="round"
			/>
			<Path
				d="M215.419 141.525c7.486 1.84 14.943-3.19 16.656-11.234 1.712-8.044-2.968-16.057-10.455-17.897-7.486-1.84-14.943 3.189-16.656 11.233-1.712 8.045 2.968 16.058 10.455 17.898z"
				fill="#fff"
				stroke="#000"
				strokeWidth={8}
				strokeLinecap="round"
			/>
			<Path
				d="M198.754 146.084c3.891 5.993 9.6 9.905 15.997 10.959 6.398 1.055 13.018-.823 18.551-5.263 5.533-4.44 9.576-11.118 11.33-18.713 1.753-7.595 1.088-15.554-1.862-22.302-2.951-6.749-7.973-11.795-14.072-14.14-6.1-2.346-12.833-1.82-18.868 1.473"
				stroke="#000"
				strokeWidth={8}
				strokeLinecap="round"
			/>
			<Path
				d="M44.648 160.182c-6.782 3.663-15.267.67-18.952-6.685-3.686-7.355-1.176-16.286 5.605-19.949 6.782-3.663 15.267-.67 18.952 6.685 3.686 7.355 1.176 16.286-5.605 19.949z"
				fill="#fff"
				stroke="#000"
				strokeWidth={8}
				strokeLinecap="round"
			/>
			<Path
				d="M61.925 160.405c-2.254 6.779-6.793 11.999-12.719 14.628-5.925 2.629-12.806 2.476-19.28-.43-6.475-2.907-12.071-8.353-15.683-15.263-3.611-6.91-4.975-14.78-3.82-22.052 1.153-7.273 4.741-13.419 10.053-17.222 5.312-3.803 11.96-4.987 18.631-3.317"
				stroke="#000"
				strokeWidth={8}
				strokeLinecap="round"
			/>
			<Path
				d="M122.85 198.913c-1.858-.296-3.568-1.367-4.826-3.023-1.257-1.657-1.981-3.791-2.042-6.023-.06-2.233.546-4.419 1.71-6.169 1.165-1.75 2.813-2.951 4.651-3.389M147.305 198.913c1.858-.296 3.568-1.367 4.825-3.023 1.258-1.657 1.981-3.791 2.042-6.023.061-2.233-.545-4.419-1.71-6.169s-2.813-2.951-4.651-3.389"
				stroke="#000"
				strokeWidth={3}
				strokeLinecap="round"
			/>
			{Mouth[face]}
			{EyeBrow[face]}
		</Svg>
	);
};
