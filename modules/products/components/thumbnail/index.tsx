type ThumbnailProps = {
  thumbnail: HTMLImageElement["src"];
};
const Thumbnail: React.FC<ThumbnailProps> = ({ thumbnail }) => {
  return (
    <div className="min-h-100">
      <img src={thumbnail} />
    </div>
  );
};

export default Thumbnail;
