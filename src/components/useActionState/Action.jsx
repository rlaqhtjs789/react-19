import React, { useState } from 'react'

// action hook은 form 태그에서만 사용 가능
// form 태그의 action 속성에 비동기 함수를 할당하여 사용
// form이 제출되면 action에 할당된 비동기 함수가 호출되고
// 함수의 매개변수로 FormData 객체가 전달됨
// formData.get('name') 형태로 폼 데이터에 접근 가능한데 input name 속성으로 접근해서 get 메서드를 사용

const PostForm = ({addPost}) => {
  const formAction = async (formData) => {
    const newPost = {
      title: formData.get('title')
    };

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
    addPost(newPost);
  }

  return (
    <form action={formAction}>
      <input type="text" name="title" />
      <button type="submit">Submit</button>
    </form>
  )
}

const Action = () =>  {
  const [posts, setPosts] = useState([]);
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  return (
    <div>
      <PostForm addPost={addPost}  />
      {posts.map((post, index) => (
        <h2 key={index}>{post.title}</h2>
      ))}
    </div>
  )
}

export default Action;