export interface PropsMusicPlayer {
  title: string;
}

export interface PropsCover {
  image: string;
  isPlayVideo: boolean;
}

export interface PropsControls {
  hasAudio: boolean;
  statusMusic: boolean;
  handleReplayMusic: React.MouseEventHandler<HTMLButtonElement>;
  handlePlayMusic: React.MouseEventHandler<HTMLButtonElement>;
  handleStopMusic: React.MouseEventHandler<HTMLButtonElement>;
}
