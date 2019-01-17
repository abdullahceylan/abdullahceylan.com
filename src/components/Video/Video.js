import React from 'react';
import { Wrapper } from './Video.styles';

const Video = props => {
  return (
    <>
      {props.video && (
        <Wrapper>
          <video
            preload
            loop
            autoPlay
            muted
            playsInline
            src={props.video.file.url}
            poster={props.thumbnail.fluid.src}
          />
        </Wrapper>
      )}
    </>
  );
};

export default Video;
