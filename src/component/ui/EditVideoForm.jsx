import { useState } from "react";
import { useUpdateVideoMutation } from "../../features/api/apiSlice";
import InputText from "./InputText";

const EditVideoForm = ({ video }) => {
  const {
    title: iniTitle,
    description: iniDescription,
    author: iniAuthor,
    date: iniDate,
    duration: iniDuration,
    views: inViews,
    link: iniLink,
    thumbnail: iniThumbnail,
    _id,
  } = video;
  const [title, setTitle] = useState(iniTitle);
  const [description, setDescription] = useState(iniDescription);
  const [author, setAuthor] = useState(iniAuthor);
  const [date, setDate] = useState(iniDate);
  const [duration, setDuration] = useState(iniDuration);
  const [views, setViews] = useState(inViews);
  const [link, setLink] = useState(iniLink);
  const [thumbnail, setThumbnail] = useState(iniThumbnail);
  const [updateVideo, { isLoading, isError, isSuccess }] =
    useUpdateVideoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo({
      id: _id,
      data: {
        title,
        description,
        author,
        date,
        duration,
        views,
        link,
        thumbnail,
      },
    });
  };
  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <InputText
              label="Title"
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <InputText
              label="Author"
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <div className="col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your video
              </p>
            </div>

            <InputText
              label="YouTube Video Link"
              type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <InputText
              label="Thumbnail link"
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />

            <InputText
              label="Date"
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <InputText
              label="Duration"
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <InputText
              label="Views"
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              value={views}
              onChange={(e) => setViews(e.target.value)}
            />
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
        {!isLoading && isError && (
          <div style={{ color: "red" }}>there is an error to create video!</div>
        )}
        {isSuccess && (
          <div style={{ color: "greenyellow" }}>
            video created successfully!
          </div>
        )}
      </div>
    </form>
  );
};

export default EditVideoForm;
