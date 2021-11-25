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
      <ul>
        <li>
          Hide all controls button in control bar (except play/pause and volume
          button)
        </li>
        <li>Hide header bar when title are not included in the source</li>
        <li>Disable double click to open the full screen</li>
        <li>Add ended event function</li>
        <li>
          Extra content component will display when player fired ended event
        </li>
      </ul>
      <CustomPlayer source={source} />
    </div>
  );
}

export default App;
