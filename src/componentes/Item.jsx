import React from 'react'

const Item = (poster) => {

    console.log('poster');

    return (
        <div className='card'>
            <img className='poster' src={poster} alt='poster'/>
        </div>
    )
}

export default Item;
