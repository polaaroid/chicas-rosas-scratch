import React from 'react';
import '../styles/Posts.css';

const posts = [
  {
    id: 1,
    title: 'Post 1',
    date: '2024-09-20',
    subtitle: 'Subtítulo del post 1',
    image: '/image1.png',
    content: 'Contenido del post 1'
  },
  {
    id: 2,
    title: 'Post 2',
    date: '2024-09-21',
    subtitle: 'Subtítulo del post 2',
    image: '/image2.png',
    content: 'Contenido del post 2'
  },
  {
    id: 3,
    title: 'Post 3',
    date: '2024-09-22',
    subtitle: 'Subtítulo del post 3',
    image: '/image3.png',
    content: 'Contenido del post 3'
  },
];

const Posts = () => {
  return (
    <section className="posts-container">
      <h2>Últimos Posts</h2>
      <div className="posts-row">
        {posts.map(post => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} className="post-image" />
            <h3>{post.title}</h3>
            <p className="post-date">{post.date}</p>
            <p className="post-subtitle">{post.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
