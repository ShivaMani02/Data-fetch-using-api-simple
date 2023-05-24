import "./style.css";

/*
Design: 
https://drive.google.com/file/d/1GgxQhz3h1JnAPpw3plJMWaX27MW1741U/view?usp=sharing

Acceptance Critera: 

1. Fetch users from this api: 
https://jsonplaceholder.typicode.com/users

2. Display the users in the table with name, email, action

action column will contain a button : Show posts.

3. When clicked on Show Posts, 
https://jsonplaceholder.typicode.com/users/1/posts

This api will be called where `1` is the id of the user in the URL.
You've to show only 10 posts of any users.

4. If we've already fetched a user posts, then next time if we click on Show Posts,
the posts should be load from the cache.

Google, StackOverflow everything is allowed.

*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users') 
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>Actions</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


