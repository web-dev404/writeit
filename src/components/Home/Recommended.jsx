"use strict";

import styles from './Home.module.scss';
import Post from "./Post";

const posts = [
    {
        "id": 1,
        "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--GjjyS3hT--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/793983/4b0ec14a-62a6-434d-b4f8-b9895b4cb3b1.png",
        "name": "Helitha Rupasinghe",
        "text": "This is a game-changer for all developers, editors, and designers since you now have an option to do your work for free Adobe is probably one of the biggest suits of applications for computer professionals. It has enough apps to almost cover up everything in computer workflow, from pdf readers to creation tools, to editing and even VFX tools which are so unique and bleeding edge, that no software could replace Adobe’s software(like after effects, dreamviewer, etc).",
        "tags": ["JavaScript", "Photoshop", "TypeScript", "HTML"],
        "date": "26 мая"
    },
    {
        "id": 2,
        "imgUrl": "https://miro.medium.com/fit/c/60/60/2*FG4lpTG6MxKsIj_BBTqwRg.jpeg",
        "name": "John Au-Yeung",
        "text": "How to Check if a Background Image is Loaded with JavaScript? A guide on how to check if a background image is loaded on a page with JavaScript.",
        "tags": ["JavaScript", "Photoshop", "TypeScript", "HTML"],
        "date": "16 мая"
    },
    {
        "id": 3,
        "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--GjjyS3hT--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/793983/4b0ec14a-62a6-434d-b4f8-b9895b4cb3b1.png",
        "name": "Helitha Rupasinghe",
        "text": "This is a game-changer for all developers, editors, and designers since you now have an option to do your work for free Adobe is probably one of the biggest suits of applications for computer professionals. It has enough apps to almost cover up everything in computer workflow, from pdf readers to creation tools, to editing and even VFX tools which are so unique and bleeding edge, that no software could replace Adobe’s software(like after effects, dreamviewer, etc).",
        "tags": ["JavaScript", "Photoshop", "TypeScript", "HTML"],
        "date": "21 мая"
    },
    {
        "id": 4,
        "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--GjjyS3hT--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/793983/4b0ec14a-62a6-434d-b4f8-b9895b4cb3b1.png",
        "name": "Helitha Rupasinghe",
        "text": "This is a game-changer for all developers, editors, and designers since you now have an option to do your work for free Adobe is probably one of the biggest suits of applications for computer professionals. It has enough apps to almost cover up everything in computer workflow, from pdf readers to creation tools, to editing and even VFX tools which are so unique and bleeding edge, that no software could replace Adobe’s software(like after effects, dreamviewer, etc).",
        "tags": ["JavaScript", "Photoshop", "TypeScript", "HTML"],
        "date": "26 июня"
    },
    {
        "id": 5,
        "imgUrl": "https://res.cloudinary.com/practicaldev/image/fetch/s--GjjyS3hT--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/793983/4b0ec14a-62a6-434d-b4f8-b9895b4cb3b1.png",
        "name": "Helitha Rupasinghe",
        "text": "This is a game-changer for all developers, editors, and designers since you now have an option to do your work for free Adobe is probably one of the biggest suits of applications for computer professionals. It has enough apps to almost cover up everything in computer workflow, from pdf readers to creation tools, to editing and even VFX tools which are so unique and bleeding edge, that no software could replace Adobe’s software(like after effects, dreamviewer, etc).",
        "tags": ["JavaScript", "Photoshop", "TypeScript", "HTML"],
        "date": "26 мая"
    }
]

function Recommended() {
    return (
        <div className={styles.recommended}>
            {
                posts.map(item => (
                    <Post key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default Recommended;