import { Routes, Route } from 'react-router';

import PostContainer from './containers/PostContainer.tsx';
import PostsListContainer from './containers/PostsListContainer.tsx';
import Layout from './components/Layout.tsx';
import AppBar from './components/AppBar.tsx';
import Toast from './components/Toast/Toast.tsx';

const App = () => {
  return (
    <Layout appBar={<AppBar />}>
      <Routes>
        <Route path="posts/new" element={<div>posts/new</div>} />
        <Route path="posts/:postId" element={<PostContainer />} />
        <Route path="/" element={<PostsListContainer />} />
      </Routes>
      <Toast />
    </Layout>
  );
};

export default App;
