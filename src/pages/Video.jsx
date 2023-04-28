import { useParams } from "react-router-dom";
import RelatedVideos from "../component/relatedVideo/RelatedVideos";
import Description from "../component/videoPlayer/Description";
import Player from "../component/videoPlayer/Player";
import { useGetvideoQuery } from "../features/api/apiSlice";

export const Video = () => {
  const { id } = useParams();
  const { data: video, isLoading, isError } = useGetvideoQuery(id);

  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError)
    content = <div>ther is an error when video fetching!</div>;
  if (!isLoading && !isError && !video.data?._id)
    content = <div>video not found!</div>;
  if (!isLoading && !isError && video.data?._id) {
    content = (
      <>
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
          <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
              <div className="col-span-full w-full space-y-8 lg:col-span-2">
                <Player video={video.data} />
                <Description video={video.data} />
              </div>

              <RelatedVideos video={video.data} />
            </div>
          </div>
        </section>
      </>
    );
  }
  return content;
};
