import React from 'react';
import MyPosts from './My Posts/MyPosts';
import style from './Profile.module.css';



const Profile = () => {
    return (
      <div>
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



export default Profile;