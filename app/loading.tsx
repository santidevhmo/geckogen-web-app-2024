import Loader from "./components/HelixLoader/HelixLoader";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <Loader/>
      </div>
    </div>
  );
};

export default Loading;
