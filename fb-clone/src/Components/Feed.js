import React, { useEffect, useState } from 'react'
import db from '../firebase'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
//import axios from '../axios'
//import Pusher from 'pusher-js'

//import db from '../firebase'

/*const pusher = new Pusher('53de63ceda490cb1f824', {
    cluster: 'ap2'
});*/


const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        );
    }, [])

    
    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            {/* {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            } */}

            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed