import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
       <Post message='Hi, how are you?' like='15'/>
       <Post message='It is my first post' like='20'/>
      </div>

    );
}



export default MyPosts;