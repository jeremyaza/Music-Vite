import { PropsCover } from "../../interface/musicplayer.interface";

export const CoverMusic = ({ image, isPlayVideo }: PropsCover) => (
  <div className="content_music__cover">
    <img alt="cover-1" className={`cover ${isPlayVideo ? "cover_play" : ""}`} src={image} />
  </div>
);
