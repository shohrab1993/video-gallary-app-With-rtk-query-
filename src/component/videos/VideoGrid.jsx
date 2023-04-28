import { useGetVideosQuery } from "../../features/api/apiSlice";
import SingleVideo from "./SingleVideo";

const VideoGrid = () => {
  const { data: videos, isLoading, isError } = useGetVideosQuery();

  // what is render

  let content;
  if (isLoading) content = <div>Loading...</div>;

  if (!isLoading && isError) content = <div>threr is an error</div>;
  if (!isLoading && !isError && videos.data?.length === 0)
    content = <div>video not found</div>;
  if (!isLoading && !isError && videos.data?.length > 0) {
    content = videos.data.map((video) => (
      <SingleVideo key={video._id} video={video} />
    ));
  }
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {content}
        {/* <div className="col-span-12">some error happened</div>  */}
      </div>
    </section>
  );
};

export default VideoGrid;
