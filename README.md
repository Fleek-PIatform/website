![](public/images/repo/repo-banner.png?202404161720)

# ⚡️Fleek.xyz Website

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-blue.svg)](https://conventionalcommits.org)

This repository contains the source code and assets for the Fleek.xyz website, which is built using the [Astro.js framework](https://astro.build) for enhanced performance and speed. The project leverages Tailwind CSS for styling, providing a modern and responsive design, and TypeScript for type safety and scalability, ensuring a robust and maintainable codebase.

## 📒 Content

- [Setup](#setup)
  - [Requirements](#%EF%B8%8F-requirements)
  - [Install](#-install)
  - [Develop](#%EF%B8%8Fdevelop)
    - [EnvVars](#env-vars)
  - [Build](#%EF%B8%8F-build)
  - [Preview (locally)](#-preview-locally)
  - [Preview (staging)](#-preview-staging)
  - [Code formatter](#-code-formatter)
  - [Contribution guideline](#-contribution-guideline)
- [Instructions](#-instructions)
  - [Blog](#-blog)
    - [New post](#new-post)
    - [Create a Pull request](#-create-a-pull-request)
    - [Release to production](#🚀-release-to-production)
  - [Docs](#-docs)
    - [Sidebar menu item ordering](#-sidebar-menu-item-ordering)
    - [Override category title](#-override-category-title)
  - [Spell checker](#-spell-checker)
  - [Announcement Marquee](#announcement-marquee)
  - [Admonitions](#-admonitions)
  - [Navigation bar](#-navigation-bar)
    - [Configuration](#-configuration)
  - [Metadata](#metadata)
    - [Open Graph preview](#open-graph-preview)
    - [Troubleshooting open graph](#troubleshooting-open-graph)
    - [Customize Blog Categories](#customize-blog-categories)
- [Development](#-development)
  - [Services](#services)
    - [Support](#support)
      - [Setup the Service](#setup-the-service)
      - [Tokens](#tokens)
      - [Local API](#local-api)
      - [Interact with the API](#interact-with-the-api)
      - [Production Service Setup](#production-service-setup)
    - [Search](#🔎-search)
      - [Health Check](#health-check)
      - [Indexer](#indexer)
      - [Put markdown content](#put-markdown-content-development)
      - [Query via cURL](#query-via-curl)
      - [Multi-Index Search](#multi-index-search)
      - [Delete Indexes](#💣-delete-indexes)
      - [Images (optimization)](#-images-optimization)
- [Migration](#-migration)
  - [Migrate Gatsby content](#migrate-gatsby-content)
- [Custom data](#custom-data)
  - [Get latest posts](#get-latest-posts)
- [Video Content](#video-content)

# Setup

## ⚙️ Requirements

- Nodejs + Bun
- NPM, Yarn or PNPM
- Some experience with CLI
- Docker (optionally, if you want to run search server locally)

Learn how to install NodeJS in your operating system by following the instructions [here](https://nodejs.org/en/download/package-manager/) and Bun [here](https://bun.sh/docs/installation).

## 🤖 Install

Install the project dependencies in your local environment.

```
npm install
```

## 👷‍♀️Develop

Start a local HTTP server for development work. It supports hot-reload, so you'll be able to see your edits each time you save a file:

```
npm run dev
```

### Environment variables

If you'll be interacting with services, you'll need to set up the environment variables.

Create a local file named `.env` and declare the following

```
PUBLIC_MEILISEARCH_HOST=localhost:7700
PUBLIC_MEILISEARCH_INDEX_BLOG="fleekxyz_website_blog"
PUBLIC_MEILISEARCH_INDEX_DOCS="fleekxyz_website_docs"
PUBLIC_MEILISEARCH_INDEX_GUIDES="fleekxyz_website_guides"
PUBLIC_MEILISEARCH_INDEX_REFERENCES="fleekxyz_website_references"
PRIVATE_MEILISEARCH_MASTER_KEY=***
PRIVATE_MEILISEARCH_DOCUMENTS_ADMIN_API_KEY=***
PUBLIC_MEILISEARCH_DOCUMENTS_CLIENT_API_KEY=***
PUBLIC_SUPPORT_API_HOST="localhost:3331"
SUPPORT_ALLOW_ORIGIN_ADDR="http://localhost:4321,https://fleek-xyz-staging.on-fleek.app"
SUPPORT_RATE_LIMIT_WINDOW_MINUTES=60
SUPPORT_RATE_LIMIT_MAX_REQ=15
SUPPORT_RATE_LIMIT_PATHS="/tickets"
NODE_ENV=develop
```

💡 The SUPPORT_ALLOW_ORIGIN_ADDR and SUPPORT_RATE_LIMIT_PATHS are comma separated values (csv). the MEILISEARCH_DOCUMENTS_CLIENT_API_KEY is required when querying staging, production environments which should be provided in the headers.

## 🏗️ Build

Run the build command to create the distribution version. The files will be saved in the `/dist` directory by default.

```
npm run build
```

💡 By default, the development server is available in the address [http://localhost:4321](http://localhost:4321).

Tweak environment settings (src/settings.json), such as the site URL. Declare the `NODE_ENV` with value `prod` or `production` to switch environment target settings.

## 🙈 Preview locally

You can preview the distribution build locally by starting the preview HTTP server:

```
npm run preview
```

💡 By default, the local site will be available in the address [http://localhost:4322](http://localhost:4322).

## 👀 Preview staging

You can preview the develop branch version by visiting the preview [here](https://fleek-xyz-staging.on-fleek.app).

## 🎀 Code Formatter

Code formatter is available by executing the command:

```sh
npm run fmt
```

Changes will be written in file. Alternatively, you can run a code format check by running a dry-run, which doesn't make changes in-file:

```sh
npm run fmt:check
```

## 🙏 Contribution guideline

Create branches from the `develop` branch and name it in accordance with conventional commits [here](https://www.conventionalcommits.org/en/v1.0.0/).

Here's an example:

```txt
test: 💍 Adding missing tests
feat: 🎸 A new feature
fix: 🐛 A bug fix
chore: 🤖 Build process or auxiliary tool changes
docs: ✏️ Documentation only changes
refactor: 💡 A code change that neither fixes a bug or adds a feature
style: 💄 Markup, white-space, formatting, missing semi-colons...
```

Find more about contributing [TODO:OPEN-SOURCE-CONTRIBUTION-DOC](https://TODO:OPEN-SOURCE-CONTRIBUTION-DOC), please!

# 🎓 Instructions

Instructions for common tasks.

## 📝 Blog

### 🚩New post

A blog post is organized as a directory that should include all the necessary image assets.

The directory should be named after the slug, a system-friendly name, e.g. "My short title" would become "my-short-title". Additionally, the markdown filename containing all the text should be named as "index.md".

For example, let's assume the creation of an hypothetical blog post named "My Blog post".

#### 1) Create the directory with corresponding slug "my-blog-post" in the `src/content/blog` location, as follows:

```sh
src/content/blog/my-blog-post
```

#### 2) Create the file named "index.md" in the directory.

```sh
src/content/blog/my-blog-post/index.md
```

The "index.md" is a markdown file where the text content and story is going to be stored.

#### 3) Set the "index.md" markdown header values, that include title, category, date, etc

```markdown
---
title: My Blog post
slug: my-blog-post
category: Announcements
date: 2024-01-31
desc: A short description about my blog post
thumbnail: './thumbnail.jpg'
image: './main-image.jpg'
author: 'Fleek'
---
```

#### 4) Write the content, including any image references

```markdown
---
title: My Blog post
slug: my-blog-post
category: Announcements
date: 2024-01-31
desc: A short description about my blog post
thumbnail: './thumbnail.jpg'
image: './main-image.jpg'
author: 'Fleek'
---

Dive into a world of concise knowledge and thought-provoking ideas. Whether you're a seasoned reader or a curious newcomer, this blog post promises to captivate your mind and leave you pondering long after you've finished reading. So grab your favorite beverage, find a cozy spot, and let's explore together!

## My subtitle 1

In the world where text is text, I show you an image:

![My image](./my-image.jpg)
```

💡 Would like to place static video content? Learn how to work with video content [here](#video-content).

## 📝 Docs

Creating a document in the **Docs** section is similar to **Blog**.Learn how to create a document by using the instructions for [blog](#-blog).

## 🎰 Sidebar menu item ordering

Editing the menu and sidebar is crucial. These elements serve as the primary navigation for your visitors, guiding them through your content.

To reorder menu items, edit the **docs -> menu -> order** section in the settings file located in **src/settings.json**.

Here's an example where we order the categories accounts, projects and storage by naming the category name and order numerical value. If you don't order, the system will fallback to ordering it alphabetically or randomly.

```
"docs": {
  "menu": {
    "order": [
      {
        "category": "accounts",
        "order": 1,
      }, {
        "category": "projects",
        "order": 2,
      }, {
        "category": "Storage",
        "order": 3,
      }
    ]
  }
}
```

💡 In the example above, the categories are the "directory", while Content documents (.md files) have a numerical **order** value that is also computed when ordering the sidebar items. For example, the **src/content/docs/index.md** is the landing page document, while **src/content/Accounts** is a directory that has one or more markdown documents.

## 📠 Override Category Title

You can override the docs sidebar titles, but it's not recommended due to the way the content automation process generates the final URLs, etc. We should prefer convention over configuration!

Suppose that you have the directory names:

```sh
├── CLI
│   ├── Applications
│   └── verify-domain.png
├── My-Menu-Item
│   ├── index.mdx
│   └── Sites
└── index.mdx
```

Let's say that you'd like to override the name "My-Menu-Item" to "Custom name".

You'd have to locate `docs -> customTitlesByDirectoryName` field in the `src/settings.json` file and declare a new property name and the value, e.g. "My-Menu-Item" and "Custom Name" as follows:

```json
"docs": {
  "menu": {
    "customTitlesByDirectoryName": {
      "My-Menu-Item": "Custom name"
    }
  }
}
```

This is not recommended because the final URL will contain the original directory name, e.g. https://fleek.xyz/docs/my-menu-item instead of https://fleek.xyz/docs/custom-name.

Considering the normalization conventions of the directory names, it'd be much preferred to rename the original directory to "custom_name".

```sh
├── CLI
│   ├── Applications
│   └── verify-domain.png
├── Custom_name
│   ├── index.mdx
│   └── Sites
└── index.mdx
```

💡 Bear in mind that underscores (\_) are replaced by white-space when humanized by default. The dashes are kept to comply with terms or names, e.g. "pre-release".

## 🥷 Create a Pull request

You can create a PR (pull request) programmatically or by using the GitHub web interface.

In order to create a pull request (PR), you have to understand that the project has a file structure architecture, containing source-files for components, images, stylesheets and much more.

For our example we are going to create new content. The content is placed in the `src/content` directory for blog or docs.

Here's how to create a new blog post content using the GitHub web interface:

#### 1) Navigate the content source files (src/content) in the GitHub file explorer

```
src/content/blog
├── announcements
├── changelog-march-11
│   ├── fleekchangelog01mar11.png
│   └── index.md
└── fleek-release-notes-v004
    ├── Log-in-connections.png
    ├── fleekreleasenotes06.jpg
    └── index.md

4 directories, 5 files
```

#### 2) Expand the file tree if collapsed

Click on the file tree icon to expand it.

![File tree](public/images/repo/github-file-tree-collapsed.png?202404161822)

Once expanded you should see the file tree.

![File tree expanded](public/images/repo/github-file-tree-expanded.png?202404161824)

#### 3) Create a branch

Click on the drop-down menu and type a new name. Make sure that you follow the naming conventions in the [Contribution guidelines](#contribution-guidelines).

For example, in the image we see the creation of a branch named **docs/my-new-branch**

![New branch](public/images/repo/github-new-branch.png?202404161826)

Click in the "Create branch docs/my-new-branch from develop".

#### 4) Create a directory for the post content files

To create a new directory in a repository click “create a new file.” Type your new directory's name in the area where you would write the file name, and at the end of the file name type a "/" to initialize it as a directory. After this you can create a new file in the directory.

![Create directory](public/images/repo/create-new-directory.png?202404161826)

#### 5) Create the "index.md"

Type the name "index.md" for the new filename.

![Create new file](public/images/repo/create-new-file.png?202404161826)

#### 6) Commit changes

Type a brief commit message following the [Contribution guidelines](#contribution-guidelines), such as:

```
docs: ✏️ Created document in post directory
```

If you wish, you can add more details in the "Extended description".

Select the option "Commit directly to the docs/my-new-branch branch" and commit it by pressing "Commit changes".

#### 7) Click the filename to open it

![Click filename to open](public/images/repo/click-in-filename-index-md.png?202404161826)

#### 8) Click in the option "Edit this file" to edit

In the right side of the window, locate the pencil icon and click it to start editing the file.

![Edit this file](public/images/repo/edit-this-file.png?202404161826)

#### 9) Start adding content to the file

Add content to the file. For example, here we have put the markdown header and some text.

```
---
title: "Put a title here"
slug: "put-a-title-here"
category: "Name of category"
date: 2024-03-11
desc: "A short description"
thumbnail: "./a-local-image.png"
image: "./a-local-image.png"
author: "Your name"
---

The content goes here
```

Learn more by reading the [New post](#new-post) section.

#### 10) Commit your changes

Every time there's a new change, you can commit it. It'll store the changes in the repository branch you have created.

#### 11) Once happy create a pull request

You can create a pull request by visiting the [compare](https://github.com/fleekxyz/fleekxyz-website/compare).

Use the second drop box to select the branch name you have just created for your post content.

![Use compare to create a new pull request](public/images/repo/use-compare-to-create-pull-request.png?202404161849)

Press the "Create pull request" and fill up the following fields by providing a title for your pull request and a description.

To complete select "Create pull request".

![Pull request form](public/images/repo/pull-request-form.png?202404161849)

## 🚀 Release to Production

You can release to production following a linear strategy. This assumes that the convention "main" branch is of linear history and is a subset of the "develop" branch commit history. For example, the team is happy to have "develop" as where the latest version of the project exists, that "main" shouldn't diverge and only contain commits from "develop".

Use-case examples:

- The team has merged some feature branches into develop identified as commit hash "abc123" and want to release upto to the commit history hash "abc123" onto "main". By doing this they expect the build process to occur and deploy into the Fleek Platform
- The team has merged several feature branches into develop identified as commit hashes `commitFeat1`, `commitFeat2` and `commitFeat3` by this historical order. It's decided to release everything in commit history until `commitFeat1`, but not `commitFeat2` and `commitFeat3`. Although, it'd be wiser to keep the feature branches in pending state as "develop" should always be in a ready state for testing and release as the team may want to release some quick hotfixes, etc

To release to production open the actions tab [here](https://github.com/fleek-platform/website/actions).

Select the "🚀 Release by develop hash" job in the left sidebar. Next, select the "Run workflow" drop-down and provide the required details.

## 🧐 Spell checker (Grammar)

A spell checker will verify the markdown (.md, .mdx) file content for any typos. The spell checker is an automated process that is active during the pull request (PR).

Find the spell checker among other checks, under the checks component at the very bottom of the conversation tab, in the Github pull request (PR) dashboard. To learn more about the spell check process, open "details".

It should be similar to the following:

![Locate the spell checker in CI/CD](public/images/repo/spell-checker-in-cicd.png?202406011433)

## Announcement Marquee

The Announcement Marquee is placed at the very top of the site. To enable

1. Open the settings file located at `/src/settings.json`.
2. Locate the `announcementMarquee` under "site"

```
"site": {
  ...
  "annoucementMarquee": {
    "message": "Introducing Fleek Functions: lightning-fast edge functions built on Fleek Network’s onchain cloud infrastructure. Read more here.",
    "url": "/blog/announcements/introducing-fleek-functions",
    "visible": true
  },
  ...
}
```

3. Edit the message and url
4. Set "visible" to true

## 🎯 Admonitions

The concept of admonitions is often used in documentation and content creation to highlight important notes, warnings, tips, or other types of information in a distinctive way.

Here's the syntax to create admonitions in markdown content, such as a docs post:

```
:::note
This is a note
:::

:::success
This is a success
:::

:::warn
This is a warning
:::

:::danger
This is a danger
:::

:::info
This is a info
:::

```

To learn more read the directives [here](https://github.com/Microflash/remark-callout-directives)

## Navigation bar

### 🎰 Configuration

The main Navigation bar can be configured by editing the file located in [src/components/NavBar/config.ts](./src/components/NavBar/config.ts).

Each menu item is represented by an object with the following properties:

- label: A string that defines the text displayed for the menu item.
- url: A string that specifies the URL to navigate to when the menu item is clicked.
- open in new tab (optional): A boolean value (true or false) that determines whether the link should open in a new browser tab.

Example of a basic menu item:

```
{
 "label": "Blog",
 "url": "/blog",
 "openInNewTab": true
}
```

For more complex menus, you can include submenus. A submenu is defined by an object with a label and an items array, which contains a list of menu items.

Example of a menu item with a submenu:

```sh
{
 "label": "Products",
 "items": [
    {
      "label": "Product A",
      "url": "/products/a"
    },
    {
      "label": "Product B",
      "url": "/products/b"
    }
 ]
}
```

The menu configuration is divided into two main sections: main and side. Both sections are arrays that contain objects representing menu categories. Each category object can have a label and an items array, similar to the submenu example above.

- main: This section is for the primary menu items. It's an array of category objects.
- side (optional): This section is for secondary or additional menu items. It follows the same structure as the main section.

Example of a menu configuration with both main and side sections:

```
{
 "main": [
    {
      "label": "Products",
      "items": [
        {
          "label": "About Us",
          "url": "/about"
        }
      ]
    },
    {
      "label": "Resources",
      "items": [
        {
          "label": "Templates",
          "url": "/templates"
        }
      ],
    },
 ],
 "side": [
    {
      "label": "Protocols",
      "items": [
        {
          "label": "Fleek Network",
          "url": "https://fleek.network",
          "openInNewTab": true,
        }
      ]
    }
 ]
}
```

In addition to the main and side menus, you can define a list of Call to Action (CTA) items. These are typically used for promotional or important actions. Each CTA is an object with a label and a url.

Example of a CTA configuration:

```
{
 "ctas": [
    {
      "label": "Sign Up",
      "url": "/signup"
    }
 ]
}
```

When configuring your menu, ensure that the structure and properties of your objects match the guidelines provided. This will help maintain consistency and ensure that your menu is displayed correctly. Remember, the appearance of your menu is limited by the styles or components you use, so adjust your configuration or business logic accordingly.

## Metadata

Metadata is important for search engines, social media platforms, and others to understand the content and purpose of a page.

The main location for the metadata is in the head element of the main base layout for our pages. At time of writing, is located as `BaseHtml.astro` in the `src/layouts`:

```sh
src/layouts
├── ...
└── BaseHtml.astro
```

You'll find the elements in the HEAD section of the HTML document. For example:

```html
...

<head>
    ...

    <meta property="og:url" content={`${baseUrl}/${ogMeta?.slug || ''}`} />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content={ogMeta?.title || settings.site.metadata.title}
    />

    ...

    <meta
      name="twitter:title"
      content={ogMeta?.title || settings.site.metadata.title}
    />

    ...
</head>
```

One of the key components of HTML metadata is the Open Graph meta tags originally created by Facebook to enable them to become rich objects in a social graph.

By using Open Graph meta tags, you can control how your website's links appear when shared on social media platforms such as Facebook, Twitter, LinkedIn, and others.

### Open Graph preview

To discover how the site page's are perceived by social media platforms use a meta tag previewer.

For example, let's say that you want to preview the Blog post for "Introducing Fleek Functions". You'd copy the URL [https://fleek.xyz/blog/announcements/introducing-fleek-functions](https://fleek.xyz/blog/announcements/introducing-fleek-functions) and paste it in the previewer address of your preference, e.g., [opengraph.xyz](https://www.opengraph.xyz).

### Troubleshooting open graph

It's important to note that if you encounter issues with Open Graph meta tags not displaying correctly on a platform, the first step should be to utilize a validator tool, similar to the one provided in the URL above. This is because our system automatically provides the metadata content, but discrepancies may arise if certain requirements are overlooked by the platform, e.g., persistent cache. Additionally, if a specific URL encounters problems due to previous issues, you can circumvent caching by appending a query parameter to the end of the URL. For example, modifying [https://fleek.xyz/blog/announcements/introducing-fleek-functions](https://fleek.xyz/blog/announcements/introducing-fleek-functions) to [https://fleek.xyz/blog/announcements/introducing-fleek-functions?202406101836](https://fleek.xyz/blog/announcements/introducing-fleek-functions?202406101836). This method is recommended as a preliminary troubleshooting step to identify the source of the problem.

### Customize Blog Categories

You can customize the Blog category list page metadata fields by editing the settings file in [./src/settings.json].

```json
"blog": {
  ...
  "category": {
    "category-name-here": {
      "title": "My title",
      "description": "My description"
    }
  }
```

You can extend the category field with any category name. Notice that category names should match the system name or directory name, e.g. [announcements](https://github.com/fleek-platform/website/tree/a0d7f8ac9c552f1a3d8469b9cfaddfe805ed8c6b/src/content/blog/announcements).

```json
"blog": {
  ...
  "category": {
    "announcements": {
      "title": "Announcements",
      "description": "The announcements description"
    }
  }
```

# 👷‍♀️Development

## Services

The project services have the following naming convention:

```
<service-type>-<environment>-<region>-<instance-number>.<domain>
```

### Support

Support's based in ZenDesk, as an external provider that provides an API to interact with the service. The following documentation provides information to interact with the proxy server.

### Setup the service

The application should get the endpoint URL from an environment variable named `PUBLIC_SUPPORT_API_HOST`.

Learn how to setup by reading the section [environment variables](#environment-variables).

### Tokens

The environment should have the following variables set up for the corresponding account.

You may want to create a `.env` file to hold these environment variables, or in your shell profile.

```sh
PRIVATE_ZENDESK_EMAIL="xxxx"
PRIVATE_ZENDESK_API_KEY="xxxx"
PRIVATE_ZENDESK_HOSTNAME="xxxx"
```

⚠️ Setting up the ZenDesk proxy service? Learn more about the ZenDesk's proxy service [here](https://github.com/fleek-platform/website/tree/develop/Services/ZenDesk)

### Local API

A proxy service to interact with ZenDesk is available and can be run locally.

Start the local API by running:

```sh
npm run support:local_api
```

💡 During implementation the API URL should be provided as an environment variable.

### Interact with the API

**/health**

Hit the /health endpoint for health checks

```sh
curl -X GET 'localhost:3331/health
```

**/ticket**

Hit the /ticket endpoint to create a ticket for a user **email**, particular **topic** and comment **query**.

```
curl \
  -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "email=<CLIENT-EMAIL-ADDRESS>&subject=<SYSTEM-TOPIC>&comment=<USER-QUERY>"" http://localhost:3331/ticket
```

The **email** is a valid email address, the **topic** should be related to the **query** template. The **query** should correspond and be of a well-known format or template.

Here's an example for **query** template:

```sh
subject: <System Support Topic> | <User title>
description: <User text>
attachments: <User attachments>
```

A result ticket could look like:

```sh
subject: Billing | Inquiry Regarding Unprocessed USDC Token Transfer
description: Dear Fleek, I hope this message finds you well. I am writing to seek clarification regarding an outstanding transaction related to my account. On xxx, I initiated a transfer of xxx USDC tokens from my account to xxx. However, upon checking my transaction history, it appears that this transfer has not been processed.
attachments: https://fleek-storage/user-file.png
```

### Production Service Setup

The support service hostname is `support-prod-eu-lon-1-01.flkservices.io` (endpoint URL).

The production environment variable should be set. Declare the hostname:

```
PUBLIC_SUPPORT_API_HOST="https://support-prod-eu-lon-1-01.flkservices.io"
```

The default location of the service file is `/lib/systemd/system/support-prod-eu-lon-1-01.flkservices.io.service`.

To configure Support with environment variables in a cloud-hosted instance, modify the Support's env file. Its default location is `~/fleek-platform/website/.env`.

After editing your configuration options, reload the daemon:

```sh
sudo systemctl daemon-reload
```

Restart the service:

```sh
sudo systemctl restart support-prod-eu-lon-1-01.flkservices.io.service
```

Check the status:

```sh
sudo systemctl status support-prod-eu-lon-1-01.flkservices.io.service
```

⚠️ Troubleshooting ZenDesk's proxy? Learn more about it [here](https://github.com/fleek-platform/website/tree/develop/Services/ZenDesk)

### 🔎 Search

The search service is based on Meilisearch [here](https://meilisearch.com).

The search service hostname is `meilisearch-prod-eu-lon-1-01.flkservices.io`. The default location of the service file is `/etc/systemd/system/meilisearch.service`.

To configure Meilisearch with environment variables in a cloud-hosted instance, modify Meilisearch's env file. Its default location is `/var/opt/meilisearch/env`.

DNS Record

```
A	meilisearch-prod-eu-lon-1-01.flkservices.io	165.232.41.164
```

After editing your configuration options, relaunch the Meilisearch service:

```
systemctl restart meilisearch
```

### Health check

```sh
curl \
  -X GET 'http://localhost:7700/health'
```

Otherwise:

```sh
curl \
  -X GET '<PROTOCOL>://<ADDRESS>:<PORT>/health'
```

### Indexer

The Indexer's job referred to as indexation is the process of organizing and storing data in a structured manner to facilitate efficient search and retrieval.

### Put markdown content (Development)

If you're running the search server via Docker container, data has to be indexed.

Provide data by running the command:

```sh
npm run search:index_all
```

### Query via cURL

A quick way to query the server is by using cURL.

In the following example, we query **changelogs** in the index name **blog**, on the local server, running on port **7700**.

```sh
curl "localhost:7700/indexes/blog/search?q=changelogs"
```

Otherwise, for production server:

```sh
curl \
  -X POST '<PROTOCOL>://<ADDRESS>:<PORT>/indexes/<INDEX_NAME>/search' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <API_KEY>' \
  --data-binary '{ "q": "<SEARCH_QUERY>" }'
```

### Multi index search

Here's an example of how to perform multiple search queries on one or more indexes:

```sh
curl \
  -X POST 'http://localhost:7700/multi-search' \
  -H 'Content-Type: application/json' \
  --data-binary '{
    "queries": [
      {
        "indexUid": "fleekxyz_website_docs",
        "q": "something",
        "limit": 5
      },
      {
        "indexUid": "fleekxyz_website_guides",
        "q": "something",
        "limit": 5
      },
      {
        "indexUid": "fleekxyz_website_references",
        "q": "something",
        "limit": 5
      }
    ]
  }'
```

### 💣 Delete Indexes

Delete Index data by running the command:

```sh
npm run search:delete_indexes
```

### Serve (Development)

Search is provided by [Meilisearch](https://www.meilisearch.com/). The local search server is provided as a [Docker](https://www.docker.com/) image, which you have to have installed and running.

You can start a server locally by running the command:

```sh
npm run search:serve
```

⚠️ You'll see a warning message "No master key was found" that can be ignored for local environment development work. If for some reason you want to have a master key, modify the `search:serve` script to include it.

## 📸 Images (Optimization)

The build process can optimize the images but that requires the user to use the correct image components. Use the instructions provided to optimize the images.

### 🪐 Astro

For astro components (<component-name>.astro) do:

```
---
import { Image } from 'astro:assets';
import localBirdImage from '../../images/subfolder/localBirdImage.png';
---
<Image src={localBirdImage} alt="A bird sitting on a nest of eggs." />
```

To learn more read [here](https://docs.astro.build/en/guides/images/)

### 🎁 Reactjs

Local images are kept in `src/images` when possible so that the build process can transform, optimize and bundle them. Files in the `/public` directory are always served or copied into the build folder as-is, with no processing.

When importing images, you have to provide query parameters such as width, height and format. This settings are used by the build process to generate optimized images. Also, the optimizer doesn't have support for Typescript, meaning that you have to use the `// @ts-ignore` to ignore the import line.

The import name convention is camel-case and to use the prefix img, e.g. imgMyImage.

```ts
// @ts-ignore
import imgFleekLogo from '@images/globe-with-bolt.jpg?w=480&h=480&format=webp';
```

Place the image in the source field:

```html
<img src="{imgFleekLogo}" alt="Image text replacement" />
```

To generate responsive images, e.g. [SrcSet](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images):

```ts
// @ts-ignore
import avif from '@images/example.jpg?w=500;900;1200&format=avif&as=srcset';
// @ts-ignore
import webp from '@images/example.jpg?w=500;900;1200&format=webp&as=srcset';
// @ts-ignore
import fallback from 'example.jpg?w=700';

const html = `<picture>
    <source srcset="${avif}" type="image/avif" />
    <source srcset="${webp}" type="image/webp" />
    <img src="${fallback}" />
</picture>
`;
```

Learn more [here](https://github.com/JonasKruckenberg/imagetools/)

## 🤖 Migration

### Migrate Gatsby Content

This section provides detailed instructions on how to execute the script for migrating markdown files from one location to another. The script is designed to organize markdown files into a structured directory based on their category, extracted from the file content.

To execute the script, you need to pass two parameter arguments: the origin path and the target path. The origin path is where your source markdown files are located, and the target path is where you want the migrated files to be placed.

Example usage:

```sh
./scripts/migration/blog_content_from_gatsby \
  ../gatsby-blog/src/posts/post \
  ./src/content/blog
```

## Custom data

Custom data is available as static data. The data is provided by a static file endpoint, placed inside the `/api` directory.

Note that the custom data is static, as the project is fully static (it means that the data is computed ahead of time and not dynamically on runtime), but can be utilized by external applications as any other endpoint. For example, the Fleek Platform application dashboard requires the latest blog posts data.

### Get latest posts

Make a HTTP GET request to the path `/api/latestBlogposts.json` for the target environment, e.g. production as `https://fleek.xyz`.

In the example we make a HTTP GET request and [parse](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) the body text as JSON data.

```js
const res = await fetch('https://fleek.xyz/api/latestBlogPosts.json');
const json = await res.json();

console.log(json);
```

You'd get a list to iterate over as the following:

```sh
{
  data: [
    {
      date: "1972-01-01",
      path: "/blog/my-category/my-blog-post-1",
      title: "My title 1",
      description: "My description 1"
      slug: "my-title-1"
    },
    {
      date: "1972-01-02",
      path: "/blog/my-category/my-blog-post-2",
      title: "My title 2"
      description: "My description 2"
      slug: "my-title-2"
    },
    ...
  ]
}
```

Everytime a build happens, the static JSON data should be updated.

## Video Content

Place video content relative to the content. We must keep it in context of the content due to portability. At time of writing, Astro doesn't optimize video and suggests placing these in the public directory which would break the portability requirement.

💡 Video should be web optimized. Keep it short. At time of writing the maximum video file size is 6 MB. If lengthy, it's much preferred to distribute it on YouTube or similar.

To mitigate it, the Fleek Website build process includes handling of video files (mp4). It copies the content into the distribution directory to allow us to access it relatively. It doesn't optimize the files, thus video files should be web encoded by the author. For example, if you are on MacOS use [Handbrake](https://handbrake.fr) to optimize the videos, or [ffmpeg](https://www.ffmpeg.org) for any operating system.

A video can be declared in the markdown as follows:

```html
<video width="100%" height="auto" autoplay loop controls>

</video>
```

💡 Including a `./`, which means relative to the current file, the path will be replaced by its absolute pathname.

When visiting the site content, the file will be surfaced absolutely, e.g. `<source src="https://fleek.xyz/blog/announcements/fleek-release-notes-v004/ens_automatic_setup.mp4" type="video/mp4">`.

```html
<video width="100%" height="auto" autoplay loop controls>

</video>
```

❌ If missing a trailing slash it'll look for the file in the wrong location. At time of writing, trailing slash is not required to resolve the site sections, thus its best practice to declare the file location with `./` as in `<source src="./my-video-filename.mp4">` to avoid confusion.

💡 At time of writing its assumed that video files are put in the directory of a markdown file named `index.md(x)`, e.g. `src/content/guides/my-guide/index.md` and `src/content/guides/my-guide/my-video.mp4`. It's also expected that the base path is the directory of the content and not cross content. It's important to respect the convention for portability, otherwise you'll find unexpected results.
