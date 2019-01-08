import React from 'react';
import Metronome from './Metronome';

const Sheetmusic = (props) => {
	// console.log(props)
	return (
		<div className="sheetmusic">
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			<p>optional chords:</p>
			<p>{props.chords}</p>
			<Metronome />
		</div>
	);
};

export default Sheetmusic;
