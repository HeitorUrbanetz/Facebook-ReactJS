import React from 'react';
import {GrGallery} from 'react-icons/gr';
import './style.css';

const Add = () => {
    return(
        <div className='add-post'>
            <img className='add-img' src='https://avatars.githubusercontent.com/u/96732484?v=4'/>
            <input className='input-add' type='text' placeholder='Add a Post'/>
            <GrGallery className='icon-add' size={40}/>
        </div>
    )
}

export default Add;