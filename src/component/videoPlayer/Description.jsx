/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import deleteImage from "../../assets/delete.svg";
import editImage from "../../assets/edit.svg";
import { useDeleteVideoMutation } from "../../features/api/apiSlice";
const Description = ({ video }) => {
  const navigate = useNavigate();
  const { title, date, description, _id } = video;
  const [deleteVideo, { isLoading, isError, isSuccess }] =
    useDeleteVideoMutation();

  const handleDelete = () => {
    if (_id) deleteVideo(_id);
  };
  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>

        <div className="flex gap-10 w-48">
          <div className="flex gap-1">
            <div className="shrink-0">
              <img className="w-5 block" src={editImage} alt="Edit" />
            </div>
            <Link
              to={`/edit-video/${_id}`}
              className="text-sm leading-[1.7142857] text-slate-600"
            >
              Edit
            </Link>
          </div>
          <div className="flex gap-1 cursor-pointer" onClick={handleDelete}>
            <div className="shrink-0">
              <img className="w-5 block" src={deleteImage} alt="Delete" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
      {!isLoading && isError && (
        <div style={{ color: "red" }}>there is an error!</div>
      )}
    </div>
  );
};

export default Description;
