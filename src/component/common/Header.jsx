import { Link } from "react-router-dom";
import logoImage from "../../assets/logo-sb.png";
export const Header = () => {
  return (
    <>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
          <Link to="/">
            <img
              className="h-10 cursor-pointer"
              src={logoImage}
              alt="sb i-Tech"
            />
          </Link>
          <Link
            to="/add-video"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            + Add Video
          </Link>
        </div>
      </nav>
    </>
  );
};
