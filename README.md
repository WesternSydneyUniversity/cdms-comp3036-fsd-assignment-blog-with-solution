# Assignment 2 - Blog - Client App

The goal of this assignment is to implement all the client side functionality.
Example implementation is in the image below.

## Success Criteria

- ✅ All of the tests must be passing
- ✅ You must be able to explain any code in the codebase

### Requirements - Assignment 2.1 - Client

> 💡Idea! Create a new issue in your repository, where you can track the completion of these items. Just copy paste them into the issue and mark them as complete as you go. Make sure you copy the source from README.md not the preview text.

### HOME SCREEN

- [ ] User must see only the "active" posts
- [ ] User must see the list of blog post categories, where each category points to UI showing only posts of that category
- [ ] User must see the list of blog post tags, where each tag points to UI showing only posts of that category
- [ ] User must see the history of blog posts, showing month and year, where each moth, year tuple points to UI showing only posts of that category
- [ ] The list shows the following items:
  - blog title, pointing to detail page
  - short description
  - date
  - image
  - tags
  - likes
  - views
- [ ] User must be able to switch between dark and light theme with a button
      The dark theme setting is stored in the "data-theme" attribute on html element
- [ ] There is a search functionality that filters blogs based on string found in title or description, redirecting to search page

### DETAIL SCREEN

- [ ] Detail page shows the same items as list item, but the short description is replaced by formatted long description
- [ ] Detail text is stored as Markdown, which needs to be converted to HTML

### CATEGORY SCREEN

- [ ] Displays posts from the category from url (e.g. /category/react)
- [ ] Displays "0 Posts" when search does no posts have that category

### HISTORY SCREEN

- [ ] Displays posts from year and month specified in the url (e.g. /history/2024/12)
- [ ] Displays "0 Posts" when no posts are from that given month and year

### TAG SCREEN

- [ ] Displays posts with the tag url (e.g. /tags/dev-tools)
- [ ] Displays "0 Posts" when search does no posts have that tag

### SEARCH SCREEN

- [ ] Displays results based on search string stored in the query string (e.g. /search?q=Fat)
- [ ] Displays "0 Posts" when search does not find anything

### Requirements - Assignment 2.2 - Admin

> 💡Idea! Create a new issue in your repository, where you can track the completion of these items. Just copy paste them into the issue and mark them as complete as you go. Make sure you copy the source from README.md not the preview text.

#### ADMIN HOME SCREEN

- [ ] Shows Login screen if not logged
- [ ] Shows List screen if logged
- [ ] There must be a logout button
- [ ] Clicking the logout button logs the user out
- [ ] Authenticate the current client using a hard-coded password
- [ ] Use a cookie to remember the signed-in state.

#### ADMIN LIST SCREEN

- [ ] Shows both active and inactive posts
- [ ] Article list is only accessible to logged-in users.
- [ ] There is a filter screen that allows filtering posts by:
  - [ ] Title or content
  - [ ] Tags
  - [ ] Date
  - [ ] Visibility
- [ ] You can combine multiple filters
- [ ]Users can sort posts by name or creation date, both ascending and descending
- [ ] The post list displays a list of filtered items with the following information:
  - [ ] The list post item displays the image, title of the post
  - [ ] The list post items display metadata such as category, tags, and "active" status.
  - [ ] The active status is a button that, on click, just displays a message
- [ ] Clicking on the title takes the user to the MODIFY SCREEN, allowing the user to modify the current post
- [ ] There is a button to create new posts
- [ ] Clicking on the "Create Post" button takes the user to the CREATE SCREEN

#### ADMIN CREATE and UPDATE screen

Both create and update screens display the same UI, but the update screen preloads the data into fields.

- [ ] Page is only accessible to logged in user
- [ ] There must be the following fields which must be validated for errors:
  - [ ] Title (`input, string`)
  - [ ] Description (textarea, string, max 200 characters)
  - [ ] Content (`textarea, markdown string`)
  - [ ] Tag List (`input, string`) shows a comma-separated list of tags.
  - [ ] Image URL (`input, URL`)
- [ ] Under the Description is a "Preview" button that replaces the text area with a rendered markdown string and changes the title to "Close Preview".
- [ ] When the preview is closed, the cursor must be in the same position as before opening the preview.
- [ ] Under the image input is an image preview.
- [ ] User can click on the "Save" button that displays an error ui if one of the fields is not specified or valid.

## Prerequisites

First, make sure that "pnpm" and "turbo" is installed in your computer. If not, please follow installation instructions for pnpm. If turbo is not installed, please install it using pnpm with the following command:

Then, run the following command to install turborepo.

```
pnpm add -g turbo
```

## Installing the project

Once the pnpm is installed, in the root of the project install the packages

```
pnpm i
```

To run end to end tests you need to install headless browsers. Please run the following command in the `tests/playwright-web` directory

```
pnpx playwright install
```

## Running the project

To run the project, run the following command in the root directory of your project:

```
turbo dev
```

This will run:

- Client application at [http://localhost:3001](http://localhost:3001)
- Admin application at [http://localhost:3002](http://localhost:3002)

## Running tests

To run the tests please run, you have two options.

### Running Tests in Console

If you only wish to visualise the test results in console, please run the following command in the root of your project for the first part of the second assignment (i.e. Assignment 2.1):

```
turbo test-1
```

This launches the turbo console UI similar to below, where you can swap between different projects:

![Turbo UI](https://skillpies.s3.ap-southeast-2.amazonaws.com/courses/full-stack-development/sections/assignment-2-1-blog-client-in-advanced-react/Screenshot%202025-02-05%20at%2014.30.45.png)

> ⚠️⚠️ Make sure that ALL tests pass!

If you want to run the tests for second part (i.e. Assignment 2.2) or third part (i.e. Assignment 2.3), run these commands:

```
turbo test-2 // or
turbo test-3
```

If you want to run all tests, please run

```
turbo all:test
```

### Running Tests in UIs

The packaged tests framework also have the possibility of visually represent your tests for nicer view of test results. To see the UIs, run this command instead of `turbo test-1`:

```
turbo dev:test-1
```

This will launch the End to End testing framework Playwright's test UI similar to below, please use the Play buttons to run individual tests:

![Playwright UI](https://skillpies.s3.ap-southeast-2.amazonaws.com/courses/full-stack-development/sections/assignment-2-1-blog-client-in-advanced-react/Screenshot%202025-02-05%20at%2014.40.35.png)

It also launches the unit and integration test framework Vitest's UI, similar to below. Here, you can also use the play buttons to execute individual tests!

![Vitest UI](https://skillpies.s3.ap-southeast-2.amazonaws.com/courses/full-stack-development/sections/assignment-2-1-blog-client-in-advanced-react/Screenshot%202025-02-05%20at%2014.46.31.png)

## Project structure

The project is monorepo with the following packages split into three categories:

**Applications**

Contains the following web applications:

- **apps/admin** - Admin Website
- **apps/web** - Client website

**Packages**

Contains the following packages with shared code and configurations:

- **packages/ui** - Library of UI elements shared between admin and client
- **packages/utils** - Library of utility functions shared between other projects
- **packages/eslint-config**, **packages/tailwind-config** and **packages/typescript-config** contain configuration files for build pipelines for this project

**Tests**

Contains the following test applications:

- **tests/playwright-admin** - End to End tests for the admin application
- **tests/playwright-web** - End to End tests for the client application
- **tests/storybook** - Configured storybook instance for development and testing of React components in isolation

## Application Structure

The client application comes with pre-defined router (only one route is missing for your learning).
The client application also comes with pre defined structure of components and utilities for you to complete.
Tha admin application is much more bare with most functionality AND structure needed to be completed by you.
