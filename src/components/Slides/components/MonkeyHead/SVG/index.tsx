import React, { useState, useEffect } from 'react';
import Svg from 'react-native-svg';
import { Mouth } from './MouthSVG';
import { EyeBrow } from './EyesBrownSVG';
import { Eyes } from './EyesSVG';
import { Face } from './FaceSVG';
import { Hair } from './HairSVG';
import { Noose } from './NooseSVG';
import { Ears } from './EarsSVG';

export enum Mood {
	sad = 'sad',
	curious = 'curious',
	happy = 'happy',
}

interface IMonkeyHeadProps {
	width: number;
	height: number;
	index: number;
}

export const MonkeyHeadSVG = (props: IMonkeyHeadProps): JSX.Element | null => {
	const [moodID, setMoodID] = useState(props.index);
	useEffect(() => setMoodID(props.index), [props.index]);
	let mood: Mood;
	switch (moodID) {
		case 0:
			mood = Mood.sad;
			break;
		case 1:
			mood = Mood.curious;
			break;
		case 2:
			mood = Mood.happy;
			break;
		default:
			return null;
	}

	return (
		<Svg fill="none" {...props}>
			{Face}
			{Eyes[mood]}
			{Hair}
			{Noose}
			{Ears}
			{Mouth[mood]}
			{EyeBrow[mood]}
		</Svg>
	);
};
