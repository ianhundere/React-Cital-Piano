import React, { Component } from 'react';
import Piano from './Piano';
import Sheetmusic from './Sheetmusic';
import SongList from './SongList';

import './App.css';

class App extends Component {
	constructor(props) {
		console.log(document);
		super(props);
		this.state = {
			key: [],
			newKeys: [],
			oldKeys: [],
			currentSongId: 1,
			songs: [
				{
					id: 1,
					title: 'Jingle bells',
					content: 'E-E-E | E-E-E | E-G-C-D-E, F-F-F-F | F-E-E-E | E-D-D-E | D-G',

					chords: 'C/E F/A'
				},

				{
					id: 2,
					title: 'Deck the halls',
					content: 'G-F-E-D | C-D-E-C | D-E-F-D-E | D-C-B-C',
					chords: 'E/G F/A'
				},
				{
					id: 3,
					title: 'Havana',
					content: 'C-E-E-C-C-A | E-D-E-F-E-D-C',
					chords: 'A/C F/A E/G#'
				},

				{
					id: 4,
					title: 'Christmas time is here',
					content: 'E-C-C-A-A | E-C-C-A-A | A-F-F | E-G-E-E | D#-D-F-D | F-G',
					chords: 'F/A C/E'
				},

				{
					id: 5,
					title: 'Jump',
					content: '',
					chords:
						'G4/B4/D5 | G4/C4/E5 | F4/C4/A5 | G4/B4/D5 | G4/C4/E5 | F4/C4/A5 | C4/F4/A4 | C4/E4/G4 | C4/D4/G4'
				}
			]
		};
		this.keyTranslation = {
			z: 'C4 : Z',
			s: 'C#4 : S',
			x: 'D4 : X',
			d: 'D#4 : D',
			c: 'E4 : C',
			v: 'F4 : V',
			g: 'F#4 : G',
			b: 'G4 : B',
			h: 'G#4 : H',
			n: 'A4 : N',
			j: 'A#4 : J',
			m: 'B4 : M',
			q: 'C5 : Q',
			'2': 'C#5 : 2',
			w: 'D5 : W',
			'3': 'D#5 : 3',
			e: 'E5 : E',
			r: 'F5 : R',
			'5': 'F#5 : 5',
			t: 'G5 : T',
			'6': 'G#5 : 6',
			y: 'A5 : Y',
			'7': 'A#5 : 7',
			u: 'B5 : U',
			i: 'C6 : I'
		};

		this.keyNames = [
			'C4 : Z',
			'C#4 : S',
			'D4 : X',
			'D#4 : D',
			'E4 : C',
			'F4 : V',
			'F#4 : G',
			'G4 : B',
			'G#4 : H',
			'A4 : N',
			'A#4 : J',
			'B4 : M',
			'C5 : Q',
			'C#5 : 2',
			'D5 : W',
			'D#5 : 3',
			'E5 : E',
			'F5 : R',
			'F#5 : 5',
			'G5 : T',
			'G#5 : 6',
			'A5 : Y',
			'A#5 : 7',
			'B5 : U',
			'C6 : I'
		];
	}
	componentDidMount() {
		document.addEventListener('keydown', (e) => {
			let key = this.keyTranslation[e.key];
			console.log(key);
			console.log(this.state.newKeys);
			let isNew = !this.state.newKeys.includes(key);
			if (isNew) {
				this.setState({
					newKeys: [ ...this.state.newKeys, key ]
				});
			} else {
				this.setState({
					newKeys: this.state.newKeys.filter((k) => {
						return k !== key;
					})
				});
			}
			console.log();
			// console.log(e.key);
		});
		document.addEventListener('keyup', (e) => {
			const key = this.keyTranslation[e.key];
			this.setState({
				oldKeys: [ ...this.state.oldKeys, key ]
			});
			console.log();
			console.log(e.key);
		});
	}
	render() {
		return (
			<div className="App">
				<div>
					<h1>React-Cital Piano</h1>
					<Sheetmusic
						title={this._getById(this.state.currentSongId).title}
						content={this._getById(this.state.currentSongId).content}
						chords={this._getById(this.state.currentSongId).chords}
					/>
					<SongList songs={this.state.songs} handleClick={this._setCurrentSongId} />
					<Piano
						pianoKey={this.state.key}
						allKeys={this.keyNames}
						newKeys={this.state.newKeys}
						oldKeys={this.state.oldKeys}
						insertKey={this._insertKey}
						extractKey={this._extractKey}
						isActive={this.state.isActive}
					/>
					<footer>
						<p>
							Note: The Web Audio API is an experimental technology which is not yet supported by all
							browsers. For the best experience, please use the latest versions of Google Chrome or
							Mozilla Firefox.
						</p>
						<h6>&copy; Ian Hundere // Amelia Schulz</h6>
					</footer>
				</div>
			</div>
		);
	}
	_insertKey = (key) => {
		this.setState({
			newKeys: this.state.newKeys.filter((note) => {
				if (note === key) {
					return false;
				} else {
					return true;
				}
			})
		});
	};
	_extractKey = (key) => {
		this.setState({
			oldKeys: this.state.oldKeys.filter((note) => {
				if (note === key) {
					return false;
				} else {
					return true;
				}
			})
		});
	};

	_setCurrentSongId = (songId) => {
		console.log(`this current song id is ${songId}`);
		this.setState({
			currentSongId: songId
		});
	};

	_getById = (idToFind) => {
		const theOne = this.state.songs.find((song) => {
			return song.id === idToFind;
		});
		return theOne;
	};
}

export default App;
