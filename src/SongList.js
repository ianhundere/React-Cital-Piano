import React from 'react';

const SongList = props => {
    console.log(props.songs);
    return (
        <ul>
            {props.songs.map(song => {
                return (
                    <li>
                        <a
                            href
                            onClick={() => {
                                console.log(song.id);
                                props.handleClick(song.id);
                            }}
                        >
                            {song.title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SongList;
