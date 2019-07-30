import exampleVideoData from '../data/exampleVideoData.js';

var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + props.video[0].id.videoId} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.video[0].snippet.title}</h3>
      <div>{props.video[0].snippet.description}</div>
    </div>
  </div>
);


// var VideoPlayer = (prop) => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + prop.video.id.videoId} allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>{prop.video.snippet.title}</h3>
//       <div>{prop.video.snippet.description}</div>
//     </div>
//   </div>
// );
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
