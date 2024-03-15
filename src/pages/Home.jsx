import { useDeletePostMutation, useGetPostsQuery } from "../services/postApi";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/create-post");
  };

  const deleteHandler = async (post) => {
    await deletePost(post);
  };

  return (
    <div>
      <h1 className="text-center text-4xl text-indigo-500 font-semibold underline my-4">
        Post Details
      </h1>

      <div className="text-end">
        <button
          className="bg-green-400 p-3 rounded-md text-white mr-4"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </div>

      {isLoading && (
        <h2 className="text-center text-3xl font-semibold my-2">
          Loading Data...
        </h2>
      )}
      {isFetching && (
        <h2 className="text-center text-3xl font-semibold my-2">
          Fetching Data...
        </h2>
      )}
      {error && (
        <h2 className="text-center text-3xl font-semibold my-2">
          Something went wrong
        </h2>
      )}
      {isSuccess && (
        <div className="grid grid-cols-3">
          {data?.map((post) => {
            return (
              <Card
                key={post.id}
                userId={post.userId}
                title={post.title}
                body={post.body}
                deleteHandler={deleteHandler}
                post={post}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
