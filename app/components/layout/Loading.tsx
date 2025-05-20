import { useNavigation } from "react-router";

const Loading = () => {
  const navigation = useNavigation();
  return (
    <div
      role="alert"
      className={`fixed flex items-center text-center h-screen w-screen top-0 z-50 bg-black/50 pointer-events-none transition-opacity duration-700 opacity-${
        navigation.state == "loading" ? 100 : 0
      }`}
    >
      <div className="relative grow text-6xl text-white">Loading</div>
    </div>
  );
};

export default Loading;
