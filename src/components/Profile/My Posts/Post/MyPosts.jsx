import React from 'react';
import style from './MyPosts.module.css';

const MyPosts = () => {
    return (
      <div>
        My posts
        <div>
          New post
        </div>
        <div className='posts'> 
        <div className={style.item}> 
          Post 1
        </div>
        <div className={style.item}>
          Post 2
        </div>
        </div> 
        
    </div>

    );
}



export default MyPosts;