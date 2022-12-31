import "../styles/musicplayer.scss";
import { useEffect, useRef, useState } from "react";
import { convertElapsedTime } from "../utils/process";
import CoverTest1 from "../assets/cover-test/img.webp";
import AudioTest1 from "../assets/audio-test/posty.mp3";
import AudioTest2 from "../assets/audio-test/posty.ogg";
import { CoverMusic } from "../components/Cover/CoverMusic";
import { ControlMusic } from "../components/Controls/ControlMusic";
import { PropsMusicPlayer } from "../interface/musicplayer.interface";

const MusicPlayer = ({ title }: PropsMusicPlayer) => {
  const audio = useRef<any>(null);
  const [hasAudio, setHasAudio] = useState<boolean>(false);
  const [controlMusic, setControlMusic] = useState<boolean>(false);

  // Time
  const [progress, setProgress] = useState<string>("0");
  const [elapsedTime, setElapsedTime] = useState<string>("0:00");
  const [durationTime, setDurationTime] = useState<string>("0:00");

  useEffect(() => {
    if (audio !== null && !hasAudio) setHasAudio(true);
  }, [audio]);

  const replay = () => {
    let currentTime = audio.current.currentTime;
    let replay_10 = currentTime - 10;
    audio.current.currentTime = replay_10;
  };

  const play = () => {
    setControlMusic(!controlMusic);
    if (!controlMusic) audio.current.play();
    else audio.current.pause();
  };

  const stop = () => {
    setControlMusic(false);
    audio.current.pause();
    audio.current.currentTime = 0;
  };

  const progressAudio = () => {
    const duration: number = audio.current.duration;
    let currentTime: number = audio.current.currentTime;

    setDurationTime(convertElapsedTime(duration));
    setElapsedTime(convertElapsedTime(currentTime));
    setProgress(`${(currentTime / duration) * 100}`);

    if (currentTime === duration) stop();
  };

  return (
    <div className="content_music">
      <p className="content_music__title">{title}</p>
      {/* Cover */}
      <CoverMusic image={CoverTest1} isPlayVideo={controlMusic} />
      <div className="content_music__audio">
        <audio id="audio" ref={audio} onTimeUpdate={progressAudio}>
          <source src={AudioTest2} type="audio/mp3" />
          <source src={AudioTest1} type="audio/ogg" />
          Your browser does not support the audio element
        </audio>
      </div>
      {/* Progress bar */}
      <div className="content_music__progress_bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <div className="content_music__information_time">
        <p>{elapsedTime}</p>
        <p>{durationTime}</p>
      </div>
      {/* Control Music */}
      <ControlMusic
        hasAudio={hasAudio}
        handlePlayMusic={play}
        handleStopMusic={stop}
        statusMusic={controlMusic}
        handleReplayMusic={replay}
      />
    </div>
  );
};

export default MusicPlayer;
