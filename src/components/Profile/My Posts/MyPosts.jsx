import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElemenets = props.postData.map(post => <Post message={post.post} like={post.like} />);
  return (
    <div className={style.MP}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElemenets}
      </div>
    </div>
  );
}



export default MyPosts;