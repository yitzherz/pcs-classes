import React from 'react';

export default function Posts(props) {
    const [posts] = props;
    return (
        <>
            {posts.map(post => (
                <li id={post.id}>{post.title} {post.body}</li>
    ))}
        </>
    )
}
