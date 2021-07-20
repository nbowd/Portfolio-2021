import HoverVideoPlayer from 'react-hover-video-player';

function HelpDeskVideo ({vidSrc, imgSrc}) {
  return (
    <HoverVideoPlayer
      videoSrc={vidSrc}
      pausedOverlay={
        <img
          src={imgSrc}
          alt="Screenshot of HelpDesk UI"
          style={{
            // Make the image expand to cover the video's dimensions
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      }
      loadingOverlay={
        <div className="loading-spinner-overlay" />
      }
    />
  );
}

export default HelpDeskVideo