import React from 'react';
import Img from 'gatsby-image';
import { List, Item, ProjectLink, Cover, Overflow, Title } from './Work.styles';

const Work = props => {
  return (
    <List>
      {props.projects.map(({ node: project }) => {
        if (project.hide) return null;
        return (
          <Item key={project.id}>
            <ProjectLink to={`/${project.slug}/`}>
              <Cover>
                <Img
                  fluid={project.cover.fluid}
                  alt={project.cover.title}
                  title={project.cover.title}
                  backgroundColor={'#272727'}
                />
              </Cover>
              <Overflow>
                <Title>{project.title}</Title>
              </Overflow>
            </ProjectLink>
          </Item>
        );
      })}
    </List>
  );
};

export default Work;
