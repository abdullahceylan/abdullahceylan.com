import React from 'react';
import { graphql } from 'gatsby';
import { has } from 'lodash/fp';
import Helmet from 'react-helmet';
import Container from '../components/Container';
import Hero from '../components/Hero';
import ProjectDetails from '../components/ProjectDetails';
import ProjectLinks from '../components/ProjectLinks';
import ImageList from '../components/ImageList';
import Video from '../components/Video';

const ProjectTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    description,
    cover,
    url,
    source,
    awards,
    images,
    video,
    thumbnail,
  } = data.contentfulProject;

  const previous = pageContext.prev;
  const next = pageContext.next;

  const descriptionContent = has('internal.content', description)
    ? description.internal.content
    : title;

  return (
    <>
      <Helmet>
        <title>{`${title} - Abdullah Ceylan`}</title>
        <meta name="description" content={descriptionContent} />
        <meta property="og:title" content={`${title} - Abdullah Ceylan`} />
        <meta property="og:description" content={descriptionContent} />
        <meta
          property="og:url"
          content={`https://www.abdullahceylan.com/${slug}/`}
        />
        <meta property="og:image" content={cover.fluid.src} />
      </Helmet>
      <Container>
        <Hero image={cover} title={title} />
        <ProjectLinks previous={previous} next={next} />
        <ProjectDetails
          description={description}
          awards={awards}
          url={url}
          source={source}
        />
        <Video video={video} thumbnail={thumbnail} />
        <ImageList images={images} />
      </Container>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      id
      slug
      date
      url
      source
      awards
      description {
        internal {
          content
        }
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      thumbnail {
        title
        fluid {
          src
        }
      }
      images {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      video {
        id
        title
        file {
          url
        }
      }
      hide
    }
    allContentfulProject(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
        }
        previous {
          slug
          hide
        }
        next {
          slug
          hide
        }
      }
    }
  }
`;

export default ProjectTemplate;
