import React, { useEffect, useState } from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import "./Feed.css"
import Post from './Post'
import Pusher from 'pusher-js'
import axios from './axios'
const pusher = new Pusher('443f1331039ee0aa8caf', {
  cluster: 'ap2'
});
const Feed=() =>{
  const[profilePic,setProfilePic]=useState('')
  const[postData,setPostData]=useState([])
  const syncFeed=()=>{
    axios.get('/retrieve/posts').then((res)=>{
      console.log(res.data);
      setPostData(res.data);
    })
  }
useEffect(()=>{
  const channel = pusher.subscribe('posts');
  channel.bind('inserted', function(data) {
    syncFeed();
  });
},[])
  useEffect(()=>{
    syncFeed()
  },[])
  return (
    <div className='feed' >
   <StoryReel />
   <MessageSender />
   {
    postData.map(entry=>(
      <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
    ))

   }
   
    </div>
  )
}

export default Feed