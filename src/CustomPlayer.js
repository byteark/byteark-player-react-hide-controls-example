import { ByteArkPlayerContainer } from "byteark-player-react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CustomPlayer.scss";

export const CustomPlayer = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const { source } = props;

  // call when the end of the media resource is reached (currentTime == duration)
  const onEnded = () => {

    // fetch something

    setIsShowing(true);
  };
  const options = {
    fluid: true,
    autoplay: false,
    aspectRatio: "16:9",
    poster: source.poster,
    sources: {
      src: source.src,
      type: source.type,
      title: source.title,
    },
    onPlayerCreated: (playerInstance) => {
      // hide header bar when title are not included in the source.
      if (!source.title) {
        const headerBar = document.getElementsByClassName("vjs-header-bar")[0];
        headerBar?.classList.add("vjs-hidden");
      }

      playerInstance.on("ended", onEnded);
    },
    userActions: {
      // prevent double click to open full screen
      doubleClick: () => {},
    },
  };

  return (
    <div className={`custom-player extra-content-${isShowing ? "show" : ""}`}>
      <ByteArkPlayerContainer {...options} />
      {isShowing && (
        <div className="extra-content-container">
          <div className="extra-content">
            <button
              className="close-button"
              onClick={() => {
                setIsShowing(false);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </button>
            Extra content
          </div>
        </div>
      )}
    </div>
  );
};
