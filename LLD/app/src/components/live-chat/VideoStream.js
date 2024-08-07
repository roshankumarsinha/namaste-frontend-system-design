const VideoStream = () => {
  return (
    <div className="m-5">
    {/* 
      This is an iframe that embeds a youtube video, which is taken from the youtube video URL
    */}
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/4xDzrJKXOOY?si=GC4yRwBjKDaji8Jm"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoStream;
