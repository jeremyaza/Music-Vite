import { PropsControls } from "../../interface/musicplayer.interface";
import { MdReplay10, MdPlayArrow, MdStop, MdPause } from "react-icons/md";

export const ControlMusic = ({
  hasAudio,
  statusMusic,
  handleReplayMusic,
  handlePlayMusic,
  handleStopMusic,
}: PropsControls) => (
  <div className="content_music__controls">
    <button
      className="btn_control_music btn_replay"
      onClick={handleReplayMusic}
      disabled={!hasAudio}
    >
      <MdReplay10 size={28} color="var(--accent-text-color)" />
    </button>
    <button className="btn_control_music btn_play" onClick={handlePlayMusic} disabled={!hasAudio}>
      {!statusMusic ? (
        <MdPlayArrow size={28} color="var(--accent-text-color)" />
      ) : (
        <MdPause size={28} color="var(--accent-text-color)" />
      )}
    </button>
    <button className="btn_control_music btn_stop" onClick={handleStopMusic} disabled={!hasAudio}>
      <MdStop size={28} color="var(--accent-text-color)" />
    </button>
  </div>
);
