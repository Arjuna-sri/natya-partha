import { ASSETS } from "../../config/assets";

export default function BackgroundArtwork() {
  return (
    <div className="bg-artwork" aria-hidden="true">
      <div
        className="bg-photo"
        style={{ backgroundImage: `url(${ASSETS.founderPhoto})` }}
      />
      <div className="bg-overlay" />
      <div className="bg-pattern" />
      <div className="bg-vignette" />
      <div className="bg-frame" />
    </div>
  );
}