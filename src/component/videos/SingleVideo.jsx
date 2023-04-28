/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import autorImage from "../../assets/logo-sb.png";

const SingleVideo = ({ video }) => {
  const { author, date, duration, thumbnail, title, views, _id } = video;
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`/video/${_id}`}>
            <img src={thumbnail} className="w-full h-auto" alt={title} />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <Link to={`/video/${_id}`} className="shrink-0">
            <img
              src={autorImage}
              className="rounded-full h-6 w-6"
              alt="Learn with Sumit"
            />
          </Link>

          <div className="flex flex-col">
            <Link to={`/video/${_id}`}>
              <p className="text-slate-900 text-sm font-semibold">{title}</p>
            </Link>
            <Link
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              to={`/video/${_id}`}
            >
              {author}
            </Link>
            <p className="text-gray-400 text-xs mt-1">
              {views} views . {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
