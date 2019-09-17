import React, { Fragment } from 'react';
import styled from 'styled-components';
import Layout from '../src/components/elements/Layout';

import { configure, addDecorator } from "@storybook/react";
import { addReadme, configureReadme } from 'storybook-readme';
const req = require.context("../src", true, /.story.tsx$/);

const Wrapper = ({ children }) => <Layout footer={null} header={null}>{children}</Layout>

const Documentation = styled.div`
  max-width: 1000px;
  padding: 50px;
  margin: 0 auto;

  & .warning {
    background: orange;
    padding: 4px;
  }

  & .problem {
    background: salmon;
    padding: 4px;
  }

  & .stable {
    background: springgreen;
    padding: 4px;
  }
`;

configureReadme({
  StoryPreview: Wrapper,
  DocPreview: Documentation,
});

addDecorator(addReadme);
addDecorator(withKnobs);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
