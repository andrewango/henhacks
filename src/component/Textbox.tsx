import { Text, Button, Center, Box } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';

interface Post {
    id: number;
    text: string;
    date: string;
  }

export function Textbox(): JSX.Element {
  const getPost: string | null = sessionStorage.getItem("posts")
  const postsToParse = getPost !== null && getPost !== undefined ? getPost : "";
  const currentPosts = postsToParse ? JSON.parse(postsToParse) : [];
  const [text, setText] = useState('');
  const [posts, setPosts] = useState<Post[]>(currentPosts);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handlePost = () => {
    const newPost: Post = {
      id: Date.now(),
      text: text,
      date: Date()
    };
    setPosts([ newPost, ...posts ]);
    const newPosts = [ newPost, ...posts ];
    sessionStorage.setItem("posts", JSON.stringify(newPosts))
    setText('');
  };

  return (
    <div>
      <div>
        <br></br>
        <Center>
            <Box bg='black' p={.5}>
                <input size={30} style={{ height: "30px" }} id="text-input" type="text" value={text} onChange={handleInputChange} placeholder=' Type here'/>
            </Box>
                <Button size='sm' colorScheme='blue' onClick={handlePost}>Post</Button>
        </Center>
      </div>
      <br></br>
      <div>
        <Text fontSize='xl'>Posted Comments:</Text>
        {posts.map((post) => (post.text !== '' ? <p key={post.id}>{post.text}</p> : ''
        ))}
      </div>
    </div>
  );
};

export default Textbox;