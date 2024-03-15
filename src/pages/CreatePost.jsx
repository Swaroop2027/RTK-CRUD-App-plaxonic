import { useState } from "react";
import { useAddPostMutation } from "../services/postApi";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [data, setData] = useState({});
  const [addPost] = useAddPostMutation();
  const navigate = useNavigate();

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
    await addPost(data);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl my-8 font-semibold">Create new post</p>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-2xl rounded-md p-8"
      >
        <div>
          <input
            type="text"
            name="userId"
            placeholder="userId"
            required
            onChange={(e) => handleChange(e)}
            className="bg-fuchsia-200 w-[300px] my-4 p-4 rounded-md text-black placeholder:text-gray-600 text-xl outline-none focus:border-2 focus:border-fuchsia-500 focus:transition focus:ease-in-out focus:duration-150"
          />
        </div>
        <div>
          <input
            type="text"
            name="id"
            placeholder="id"
            required
            onChange={(e) => handleChange(e)}
            className="bg-fuchsia-200 w-[300px] my-4 p-4 rounded-md text-black placeholder:text-gray-600 text-xl outline-none focus:border-2 focus:border-fuchsia-500 focus:transition focus:ease-in-out focus:duration-150"
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="title"
            required
            onChange={(e) => handleChange(e)}
            className="bg-fuchsia-200 w-[300px] my-4 p-4 rounded-md text-black placeholder:text-gray-600 text-xl outline-none focus:border-2 focus:border-fuchsia-500 focus:transition focus:ease-in-out focus:duration-150"
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            placeholder="body"
            required
            onChange={(e) => handleChange(e)}
            className="bg-fuchsia-200 w-[300px] my-4 p-4 rounded-md text-black placeholder:text-gray-600 text-xl outline-none focus:border-2 focus:border-fuchsia-500 focus:transition focus:ease-in-out focus:duration-150"
          />
        </div>

        <div className="w-[300px] my-4 text-center">
          <button
            type="submit"
            className="text-green-600 font-semibold text-lg hover:text-white hover:bg-green-600 hover:rounded-md hover:p-2"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
