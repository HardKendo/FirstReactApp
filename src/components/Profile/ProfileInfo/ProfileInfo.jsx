import React from 'react';
import style from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" />
      </div>
      <div className={style.descriptionBlock}>
        ava + desciption
        </div>
    </div>
  );
}



export default ProfileInfo;