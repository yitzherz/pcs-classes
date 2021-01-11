import React, {useEffect, useState} from 'react';
import './blogs.css';


export default function Blogs(props) {
    const [blogs, setBlogs]  = useState([]);


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https:jsonplaceholder.typicode.com/users`);
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const blogs = await response.json();
                setBlogs(blogs);

            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    
                return (
                    <div>
                        <h1>Choose A Blog</h1>
                        { blogs.map(blog => (
                            <li key={blog.id} className="blog" onClick={props.getPosts(blog)}>
                          <p>Name: {blog.name}</p>
                          <span>Website: {blog.website}</span>
                          <p>Company: {blog.company.name}</p>
                          </li>))}
                          
                    </div>
                )
            }
