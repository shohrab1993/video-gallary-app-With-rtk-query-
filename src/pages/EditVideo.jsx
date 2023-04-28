import { useParams } from "react-router-dom";
import EditVideoForm from "../component/ui/EditVideoForm";
import { useGetvideoQuery } from "../features/api/apiSlice";

export const EditVideo = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetvideoQuery(id);

  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>there is an error!</div>;
  if (!isLoading && !isError && !data.data?._id)
    content = <div>video not found!</div>;
  if (!isLoading && !isError && data.data?._id) {
    content = (
      <>
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
          <div className="max-w-7xl mx-auto px-5 lg:px-0">
            <div className="w-full">
              <div className="px-4 sm:px-0 pb-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Edit video
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Please fillup the form to edit video
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <EditVideoForm video={data.data} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return content;
};
