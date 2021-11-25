import { CustomPlayer } from "./CustomPlayer";
import "./App.css";

function App() {
  const source = {
    poster:
      "https://qoder.byteark.com/images/video-frames/1/GU/cg/1GUcgd3XwsmD-large.jpg",
    src: "https://inox-bhm9yr.cdn.byteark.com/video-objects/RI2PimuHxDXw/playlist.m3u8",
    type: "application/x-mpegURL",
      title: "Big Buck Bunny",
  };

  return (
    <div className="App">
      <span className="title">Custom Player</span>
      <CustomPlayer source={source} />
    </div>
  );
}

export default App;
