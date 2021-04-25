import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { Post } from "../components/Post";
const PostsPage = ({ dispatch, loading, hasErrors, posts }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading Posts...</p>;
    if (hasErrors) return <p>Unable to display posts</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};
// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  hasErrors: state.posts.hasErrors,
  posts: state.posts.posts,
});
export default connect(mapStateToProps)(PostsPage);
