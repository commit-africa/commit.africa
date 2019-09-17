# Commit Africa Front-end

[![](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/commit-africa-community/community) [![](https://img.shields.io/badge/slack-@zatech/%23tech%E2%80%92for%E2%80%92good-purple.svg?logo=slack)](https://zatech.github.io) [![](https://img.shields.io/badge/slack-@zatech/%23tech%E2%80%92for%E2%80%92good-purple.svg?logo=slack)](https://docs.google.com/forms/u/1/d/e/1FAIpQLScBPmaH71EuV3HTw-4KSB6x-Xs-6Euf3baSfsMt1wi8n9adkA/viewform)  [![](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![](https://img.shields.io/badge/License-CC%20BY‒SA‒4%2E0-yellow.svg)](https://creativecommons.org/licenses/by-sa/4.0/) 

## Discussion

Have any question or suggestions, please reach out to the core team on Gitter at [commit-africa/community](https://gitter.im/commit-africa-community/community).

Alternatively, if you want to get involved in the larger discussion around usage of technology for social good in Africa join us on Slack (on either the [Code for Africa](https://docs.google.com/forms/u/1/d/e/1FAIpQLScBPmaH71EuV3HTw-4KSB6x-Xs-6Euf3baSfsMt1wi8n9adkA/viewform) or [ZA Tech](https://zatech.github.io) workspaces) in the `#tech-for-good` channel.

## Licensing

* The following licensing only applies to the content inside this repo itself and is not inherited by any projects/repositories linked to from this repo.
* All code is licensed under the [MIT license](https://en.wikipedia.org/wiki/MIT_License).
* All non-code content is licensed under [Creative Commons BB-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/.)

## Contributor instructions:

### 🌱 1. Set up local environment
1. Clone the repository by running `git clone https://github.com/commit-africa/commit.africa.git`.
2. Make sure you have the latest release of [NodeJS](https://nodejs.org/en/) installed.
3. Make sure you have the latest release of [Yarn](https://yarnpkg.com/en/docs/install) installed.
4. Run `yarn` in the root folder of the repository to install all dependancies.

### 👓 2. Read our documentation
1. Please review the [branches](https://github.com/agis/git-style-guide) and [commits](https://github.com/agis/git-style-guide) sections in the following [documentation](https://github.com/agis/git-style-guide).
3. Please read the following [document outlining the architecture and conventions used in the Commit Africa front-end](https://github.com/commit-africa/commit.africa/blob/master/packages/docs/src/README.md).

### ❤️ 3. Contribute
1. Create a new branch in accordance with the above (skip this step if you are contributing on a specific branch)
2. Make sure to integrate ESLint for your specific IDE ([see guide](https://eslint.org/docs/user-guide/integrations)) to get real-time linting errors in [TypeScript](https://www.typescriptlang.org/).
3. Make sure to integrate Stylelint ([see guide](https://stylelint.io/user-guide/complementary-tools#editor-plugins)) for your IDE to get real-time linting errors in [Styled Components](https://www.styled-components.com/).
4. If you are making changes to internal logic please run `yarn test` as often as possible to catch any errors you introduced and confirm the scope of your changes.
5. If you are adding a new React component please see `.blueprints/component` for convetion used. If you are using Visual Studio Code you can automate the creation of new components via [the Blueprint extension](https://marketplace.visualstudio.com/items?itemName=teamchilla.blueprint).
6. If you are adding an entry (in the `packages/webapp/src/data`) please use the following format:

```
---
name: Project name
region: Western Cape
country: South Africa
core-team: 3
---

This is a blurb explaining what this project is about and what types of contributions the team is looking for.
```

### 🚀 3. Make a pull request
1. If you are making a public pull request use [the forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow).
2. If you are a core contributor (i.e. you have write access) please use [the feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
2. Make a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) via the [Github](https://github.com) dashboard to the `master` or feature branch.
3. The responsible core-contributor (as per the repo) will automatically be tagged in all pull requests via the `docs/CODEOWNERS` file.
4. Once your code has been accepted and merged into `master` [Netlify](https://www.netlify.com/) will automatically deploy the changes to [https://commit.africa](https://commit.africa).

## Roadmap

### 0.0.2

* Adds submission page
  * 