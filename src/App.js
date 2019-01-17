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
			i: 'C7 : I',
			u: 'B6 : U',
			y: 'A6 : Y',
			t: 'G6 : T',
			r: 'F6 : R',
			e: 'E6 : E',
			w: 'D6 : W',
			q: 'C6 : Q',
			j: 'B5 : J',
			h: 'A5 : H',
			g: 'G5 : G',
			f: 'F5 : F',
			d: 'E5 : D',
			s: 'D5 : S',
			a: 'C5 : A',
			m: 'B4 : M',
			n: 'A4 : N',
			b: 'G4 : B',
			v: 'F4 : V',
			c: 'E4 : C',
			x: 'D4 : X',
			z: 'C4 : Z'
		};

		this.keyNames = [
			'C7 : I',
			'B6 : U',
			'A6 : Y',
			'G6 : T',
			'F6 : R',
			'E6 : E',
			'D6 : W',
			'C6 : Q',
			'B5 : J',
			'A5 : H',
			'G5 : G',
			'F5 : F',
			'E5 : D',
			'D5 : S',
			'C5 : A',
			'B4 : M',
			'A4 : N',
			'G4 : B',
			'F4 : V',
			'E4 : C',
			'D4 : X',
			'C4 : Z'
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
