import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const MockTest = () => {
    const getPosts = async () => {
        try {
            const userPosts = await axios.get("http://localhost:3000/data/data.json")
          
          console.log(userPosts.data);
        
        } catch (err) {
          console.error(err.message);
        }
      };

    useEffect(()=>{
        getPosts()
      })

    return (
        <div>
            MockTest
        </div>
      );
}

export default MockTest;