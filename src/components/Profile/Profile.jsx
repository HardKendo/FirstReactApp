import React from 'react';
import MyPosts from './My Posts/Post/MyPosts';

const Content = () => {
    return (
      <div className='content'>
        <div>
          <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" />
        </div>
        <div>
          ava + desciption
        </div>
        <MyPosts />
      </div>  
    );
}



export default Content;