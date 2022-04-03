import React, { useState, useEffect } from "react";
import "../styles/bibleAudio.css";
import { oldBookSet, newBookSet } from "../utilities/constVariables";

const BibleAudio = () => {
  const [currentMenu, setCurrentMenu] = useState("old");
  const [currentBook, setCurrentBook] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const [currentlyPlaying, setCurrentlyPlaying] = useState({
    currentBook: "",
    currentPage: 0,
  });

  const oldTestamentUrl =
    "https://j-grace.s3-us-west-2.amazonaws.com/oldTestament/";
  const newTestamentUrl =
    "https://j-grace.s3-us-west-2.amazonaws.com/newTestament/";

  useEffect(() => {
    document.getElementById("audio").addEventListener("ended", handleOnEnd);
    return () => {
      document
        .getElementById("audio")
        .removeEventListener("ended", handleOnEnd);
    };
  }, [currentPage]);

  const generateOldTestamentUrl = (idx) => {
    return idx >= 9
      ? oldTestamentUrl +
          `${oldBookSet[currentBook].koreanName}_${idx + 1}장.mp3`
      : oldTestamentUrl +
          `${oldBookSet[currentBook].koreanName}_0${idx + 1}장.mp3`;
  };

  const generateNewTestamentUrl = (idx) => {
    return idx >= 9
      ? newTestamentUrl + `${newBookSet[currentBook].name}+${idx + 1}.mp3`
      : newTestamentUrl + `${newBookSet[currentBook].name}+0${idx + 1}.mp3`;
  };

  const play = (url, idx) => {
    setCurrentPage(idx + 1);
    setCurrentlyPlaying((prevState) =>
      Object.assign({}, prevState, { currentBook, currentPage: idx + 1 })
    );
    let audio = document.getElementById("audio");
    audio.src = url;

    audio.load();
    audio.play();
  };

  const handleOnEnd = async () => {
    if (
      currentPage > 0 &&
      currentMenu === "old" &&
      currentPage < oldBookSet[currentBook].pageNumber
    ) {
      let audio = document.getElementById("audio");
      audio.src = await generateOldTestamentUrl(currentPage);
      audio.load();
      audio.play();
      setCurrentPage(currentPage + 1);
      setCurrentlyPlaying((prevState) =>
        Object.assign({}, prevState, {
          currentBook,
          currentPage: currentPage + 1,
        })
      );
    }

    if (
      currentPage > 0 &&
      currentMenu === "new" &&
      currentPage < newBookSet[currentBook].pageNumber
    ) {
      let audio = document.getElementById("audio");
      audio.src = await generateNewTestamentUrl(currentPage);
      audio.load();
      audio.play();
      setCurrentPage(currentPage + 1);
      setCurrentlyPlaying((prevState) =>
        Object.assign({}, prevState, {
          currentBook,
          currentPage: currentPage + 1,
        })
      );
    }
  };

  return (
    <>
      <div className="bible-audio-banner">
        {" "}
        <p>
          그러므로 믿음은 들음에서 나며
          <br />
          들음은 그리스도의 말씀으로 말미암았느니라
        </p>
      </div>
      <div className="bible-audio-container">
        <div className="testament-container">
          <span
            style={
              currentMenu === "old" ? { borderLeft: "5px solid #E67E22" } : {}
            }
            onClick={() => {
              setCurrentMenu("old");
              setCurrentBook("");
            }}
          >
            구약성경
          </span>
          <span
            style={
              currentMenu === "new" ? { borderLeft: "5px solid #E67E22" } : {}
            }
            onClick={() => {
              setCurrentMenu("new");
              setCurrentBook("");
            }}
          >
            신약성경
          </span>
        </div>
        <div className="audio-outer-container">
          <img src="https://j-grace.s3-us-west-2.amazonaws.com/sermonImages/sermonAudioLogo.png" alt={"audio-logo"} />
          <div className="audio-container">
            <div className="audio-details">
              <i
                className="fas fa-headphones-alt"
                style={{ fontSize: "25px", marginRight: "10px" }}
              ></i>
              <span>
                {currentlyPlaying.currentBook}
                {currentlyPlaying.currentPage > 0 &&
                  currentlyPlaying.currentPage}
              </span>
            </div>
            <audio id="audio" style={{ outline: "none" }} controls>
              <source type="audio/mp3" />
            </audio>
          </div>
        </div>

        <div className="books-container">
          <div className="books-menu-outer-container">
            {currentMenu === "old" && (
              <>
                <div className="books-menu-container">
                  {Object.keys(oldBookSet).map((e) => {
                    return (
                      <span
                        key={e}
                        className="book"
                        style={
                          currentBook === e
                            ? { borderLeft: "5px solid #E67E22" }
                            : {}
                        }
                        onClick={() => setCurrentBook(e)}
                      >
                        {e}
                      </span>
                    );
                  })}
                </div>

                <div className="audio-list-container">
                  {Array.apply(null, {
                    length: currentBook
                      ? oldBookSet[currentBook].pageNumber
                      : 0,
                  }).map((_, idx) => {
                    return (
                      <span
                        key={idx}
                        className="page"
                        onClick={() => {
                          play(generateOldTestamentUrl(idx), idx);
                        }}
                      >{`${oldBookSet[currentBook].koreanName} ${
                        idx + 1
                      }`}</span>
                    );
                  })}
                </div>
              </>
            )}
            {currentMenu === "new" && (
              <>
                <div className="books-menu-container">
                  {Object.keys(newBookSet).map((e) => {
                    return (
                      <span
                        key={e}
                        className="book"
                        style={
                          currentBook === e
                            ? { borderLeft: "5px solid #E67E22" }
                            : {}
                        }
                        onClick={() => setCurrentBook(e)}
                      >
                        {e}
                      </span>
                    );
                  })}
                </div>

                <div className="audio-list-container">
                  {Array.apply(null, {
                    length: currentBook
                      ? newBookSet[currentBook].pageNumber
                      : 0,
                  }).map((_, idx) => {
                    return (
                      <span
                        key={idx}
                        className="page"
                        onClick={() => {
                          play(generateNewTestamentUrl(idx), idx);
                        }}
                      >{`${newBookSet[currentBook].koreanName} ${
                        idx + 1
                      }`}</span>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BibleAudio;
