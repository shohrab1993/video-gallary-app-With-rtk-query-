/* eslint-disable react/prop-types */
import { useGetRelatedVideosQuery } from "../../features/api/apiSlice";
import RelatedVideo from "./RelatedVideo";
const RelatedVideos = ({ video }) => {
  const { _id, title } = video;
  const {
    data: relatedVideo,
    isLoading,
    isError,
  } = useGetRelatedVideosQuery({ _id, title });

  let content;
  if (isLoading) content = <div>Loading</div>;
  if (!isLoading && isError)
    content = <div>ther are an error to get related videos!</div>;
  if (!isLoading && !isError && relatedVideo.data?.length === 0)
    content = <div>no video found!</div>;
  if (!isLoading && !isError && relatedVideo.data?.length > 0) {
    content = relatedVideo.data.map((video) => (
      <RelatedVideo key={video._id} video={video} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideos;
