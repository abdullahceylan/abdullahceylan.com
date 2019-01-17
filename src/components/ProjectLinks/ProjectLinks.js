import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, Previous, Next } from './ProjectLinks.styles';

const ProjectLinks = props => {
  return (
    <Wrapper>
      {props.previous && (
        <Previous>
          <Link to={`/${props.previous.slug}/`}>Prev</Link>
        </Previous>
      )}
      {props.next && (
        <Next>
          <Link to={`/${props.next.slug}/`}>Next</Link>
        </Next>
      )}
    </Wrapper>
  );
};

export default ProjectLinks;
