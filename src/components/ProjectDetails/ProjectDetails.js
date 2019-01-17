import React from 'react';
import { has } from 'lodash/fp';
import Button from '../Button';
import {
  Wrapper,
  Info,
  Description,
  Awards,
  Overflow,
  Resources,
} from './ProjectDetails.styles';

const ProjectDetails = props => {
  const { description } = props;
  const descriptionContent = has('childMarkdownRemark.html', description)
    ? description.childMarkdownRemark.html
    : '';

  return (
    <Wrapper>
      <Info>
        <Description
          dangerouslySetInnerHTML={{
            __html: descriptionContent,
          }}
        />

        <Awards>
          {props.awards &&
            props.awards.map((award, index) => <li key={index}>{award}</li>)}
        </Awards>
      </Info>
      <Overflow>
        <Resources>
          {props.source && (
            <Button href={props.source} target="_blank">
              Source
            </Button>
          )}
          {props.url && (
            <Button href={props.url} target="_blank">
              View {props.source ? 'Demo' : 'Site'}
            </Button>
          )}
        </Resources>
      </Overflow>
    </Wrapper>
  );
};

export default ProjectDetails;
