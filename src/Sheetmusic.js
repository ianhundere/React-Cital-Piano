import React from 'react';

const Sheetmusic = (props) => {
    console.log(props)
    return (


        <div className="sheetmusic">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default Sheetmusic;