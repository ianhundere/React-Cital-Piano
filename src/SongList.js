import React from 'react';

const SongList = (props) => {
    console.log(props.songs)
    return (
        <ul>
            {
             props.songs.map(song => {
                 return <li><a>{song}</a></li>
             })   
            }
        </ul>

    )
}

export default SongList;