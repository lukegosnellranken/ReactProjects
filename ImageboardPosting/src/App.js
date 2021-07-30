import React, { useState } from 'react';

import Banner from './components/UI/Banner';
import AddTextPost from './components/TextPosts/AddTextPost';
import TextPostsList from './components/TextPosts/TextPostsList';

function App() {
  const [textPostsList, setTextPostsList] = useState([]);

  const addTextPostHandler = (tpUsername, tpContent) => {
    setTextPostsList((prevTextPostsList) => {
      return [...prevTextPostsList, {username: tpUsername, content: tpContent, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <Banner />
      <AddTextPost onAddTextPost={addTextPostHandler}/>
      <TextPostsList textPosts={textPostsList}/>
    </div>
  );
}

export default App;
