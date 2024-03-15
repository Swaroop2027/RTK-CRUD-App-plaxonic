import { useState } from "react";
import { useUpdatePostMutation } from "../services/postApi";
import { useLocation, useNavigate } from "react-router-dom";

const UpdatePost = () => {
  const location = useLocation();
  const post = location.state;

  const navigate = useNavigate();

  const [data, setData] = useState({
    userId: post.userId,
    id: post.id,
  });

  const [updatePost] = useUpdatePostMutation();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "userId") {
      setData({ ...data, [name]: parseInt(value) });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await updatePost(data);
    navigate("/");
  };

  //   console.log(data);

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl my-8 font-semibold">Update post</p>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-2xl rounded-md p-8"
      >
        <div>
          <input
            type="text"
            name="userId"
            placeholder="userId"
            value={post.userId}
            readOnly
            className="bg-fuchsia-200 w-[300px] my-4 p-4 rounded-md text-black placeholder:text-gray-600 text-xl outline-none focus:border-2 focus:border-fuchsia-500 focus:transition focus:ease-in-out focus:duration-150"
          />
        </div>
        <div>
          <input
            type="text"
            name="id"
            placeholder="id"
            value={post.id}
            readOnly
            className="bg-fuchsia-200 w-[300px] my-4 p-4 rounded-md text-black placeholder:text-gray-600 text-xl outline-none focus:border-2 focus:border-fuchsia-500 focus:transition focus:ease-in-out focus:duration-150"
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={(e) => handleChange(e)}
            className="bg-fuchsia-200 w-[300px] my-4 p-4 rounded-md text-black placeholder:text-gray-600 text-xl outline-none focus:border-2 focus:border-fuchsia-500 focus:transition focus:ease-in-out focus:duration-150"
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            placeholder="body"
            onChange={(e) => handleChange(e)}
            className="bg-fuchsia-200 w-[300px] my-4 p-4 rounded-md text-black placeholder:text-gray-600 text-xl outline-none focus:border-2 focus:border-fuchsia-500 focus:transition focus:ease-in-out focus:duration-150"
          />
        </div>

        <div className="w-[300px] my-4 text-center">
          <button
            type="submit"
            className="text-orange-400 font-semibold text-lg hover:text-white hover:bg-orange-400 hover:rounded-md hover:p-2"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
