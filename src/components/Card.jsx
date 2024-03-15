import { useNavigate } from "react-router-dom";

const Card = ({ userId, title, body, deleteHandler, post }) => {
  const navigate = useNavigate();

  const handleUpdatePost = () => {
    navigate("/update-post", { state: post });
  };

  return (
    <div className="shadow-2xl m-4 border-2 border-solid border-indigo-500 transition ease-in-out duration-150 rounded-lg hover:-translate-x-2 hover:-translate-y-3">
      <div className="p-4 text-center">
        <p className="text-xl hover:animate-ping">
          User Id: <span className="font-[600]">{userId}</span>
        </p>
      </div>
      <hr />

      <div className="p-4">
        <span className="font-semibold text-xl">Title: </span>
        <span className="capitalize">{title}</span>
      </div>
      <hr />

      <div className="p-4 hover:animate-pulse">
        <span className="font-semibold text-xl">Body: </span>
        <span className="capitalize hover:text-indigo-400">{body}</span>
      </div>

      <div className="flex justify-evenly p-3">
        <button
          className="bg-orange-400 p-3 rounded-md text-white"
          onClick={handleUpdatePost}
        >
          Update
        </button>
        <button
          className="bg-red-500 p-3 rounded-md text-white"
          onClick={() => deleteHandler(post)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
