---
title: 'Introducing Fleek Functions'
date: 2024-06-06
desc: 'Fleek Functions are lightning fast, auto-scaling edge functions built on top of Fleek Networks onchain cloud infrastructure.'
thumbnail: './fleekfunctionsthumb.png'
image: './fleekfunctionsthumb.png'
author: 'Fleek'
---

We are very excited to introduce a new product line for developers: Fleek Functions

Fleek Functions are lightning fast, auto-scaling edge functions built on top of Fleek Network’s onchain cloud infrastructure.

In many scenarios, Fleek Functions should be a more performant, lower cost, lower overhead, and a more future-proof option for developers looking to execute server-side code. This holds true even when compared to current popular serverless alternatives such as Lambda functions, due to the unique attributes of the underlying infrastructure (Fleek Network) that provides better guarantees to developers compared to traditional cloud platforms.

Today we are releasing the alpha version of Fleek Functions, which run on a new testnet version of Fleek Network. Until functionality is finalized further, we do not recommend using Fleek Functions in production apps due to changes that may be made during this ongoing development period.

Now let’s dive straight into everything developers should know about Fleek Functions!

---

## Why should I use Fleek Functions in my project?

There are a few key benefits to consider when evaluating Fleek Functions for use within your application:

![](latencygraphic.png)

> Results from previous Fleek Functions early performance test. See full results [here](https://blog.fleek.network/post/fleek-network-testnet-phase-3-results/).

**Reduced Latency**: The primary advantage of using Fleek Functions over a service you may be familiar with such as AWS’s Lambda functions is the edge runtime environment, which reduces the latency of your function calls. By running Fleek Functions on Fleek Network’s edge-optimized onchain cloud infrastructure, which consists of a large number of geo-aware, globally distributed nodes, Fleek minimizes the response time of these functions.

**Reduced Overhead**: Because functions are only called on an as-needed basis and there are no servers to manage, Fleek Functions require far less overhead than other self-managed servers or rentals. They allow you to focus on your code, rather than on server infrastructure management.

**Auto-Scaling**: Users who are in need of minimal resources during low-traffic periods or far more resources during traffic spikes can use precisely the volume of resources that they require, in an auto-scaling model that is maximally cost-effective.

**Reduced Costs:** While pricing is still being fully finalized (and therefore Fleek Functions are free to use for now), there are strong indications that Fleek Functions will be significantly cheaper than current popular serverless alternatives such as Lambda functions and Vercel Functions. Thanks to Fleek Network, pricing is also fully transparent and almost entirely usage based, so you don’t need to deal with any of the price gouging that comes with most traditional cloud platforms.

**Self-Sovereignty**: Using Fleek Functions means you get to remain self-sovereign, due to the permissionless, censorship resistant, and onchain nature of Fleek Network. With Fleek Functions, nobody can deplatform you or censor you or tamper with your code or data. You can finally say goodbye to all that corporate cloud platform nonsense.

---

## What can I do with Fleek Functions?

Put simply, you can call Fleek Functions from the front-end of your application just as you would invoke any code that returns a response from a server. Among other things, you can use Fleek Functions to:

- Call APIs to retrieve or populate data on the user interface
- Make routing requests
- Implement server-side rendering (SSR) for your entire application
- Build use cases like Next.js hosting
- Do image optimization and resize images
- Use them to replace any existing serverless, edge, or cloud functions you currently use in your stack

And countless other things. There isn’t much you can’t build with serverless compute frameworks these days.

---

## Do I need to use Fleek Functions for my Fleek project, or is Fleek able to support dynamic sites that do not use Fleek Functions?

Prior to the release of Fleek Functions, Fleek was able to support users’ dynamic sites, but by necessity, users were required to manage their back-end services outside of Fleek.

Fleek can now support dynamic sites without requiring users to manage this aspect of their application elsewhere, but even in the wake of Fleek Functions’ release, it is not required.

Users still have the option of self-managing their servers or managing their back-end code through another provider. We believe Fleek Functions offer benefits over these alternatives but do not require their exclusive use or prevent users from exploring other solutions.

---

## Moving Fleek Functions from Alpha to Beta to Full Production Release

While this feature is in alpha, there are some important caveats about its functionality, chiefly that this feature is not yet accessible within the platform UI.

### Where to use Fleek Functions in Alpha

Today Fleek Functions can only be created and managed within Fleek's CLI and SDK, but soon we plan to integrate this functionality into the platform UI as well. When we do roll out Fleek Functions within the platform UI, you will find this functionality under the “Functions” tab of your project page, which currently serves as a placeholder and directs users to the information found here.

### How to Use Fleek Functions in Alpha

While the Fleek Functions feature is in alpha and until a future date when its functionality has been finalized, we do not recommend relying on Fleek Functions within production applications. In the interim, we encourage our users to experiment with the addition of Fleek Functions to hobby projects or sandboxes. We invite users to preview the performance and other benefits of Fleek Functions in a controlled environment such as this to assuage any doubts about its future value to a production application.

### Coming Soon: Supporting Common Use Cases with Communal Fleek Functions

We plan to improve and solidify this feature based on feedback from the community, but to also explore ways that the community can directly contribute shared communal Fleek Functions. Developers building on Fleek often require custom back-end code to facilitate the bespoke needs of their application and users, but just as certain utility npm packages like lodash attract installs into millions of unique repos, some Fleek Functions will fulfill a need shared by a preponderance of Fleek users.

If these functions were created in isolation, they would often duplicate the work of other community members. One might be a less battle-tested, elegant solution to the same problem another user has encountered.

Users are under no obligation to publish Fleek Functions, but we plan to highlight open-source contributions from Fleek users that we believe may be valuable to our community at large. Just as we currently highlight useful templates for users building their applications with specific frameworks and an awesome-fleek directory of useful tools built on Fleek, we anticipate there may be value in organizing a directory of boilerplate but configurable Fleek Functions that have widespread applicability to our users’ projects.

---

## Release Timeline for Fleek Functions

We look forward to seeing the Fleek Functions developers create and share in the coming days, weeks, and months. We believe Fleek Functions collectively represent one of the more significant value unlocks for our users since Fleek’s inception, especially given that it is the first of our features to leverage Fleek Network.

As of today, Fleek Functions will move through the following phases:

- **Alpha release**: Fleek Functions can be created and managed through the Fleek CLI and SDK, but cannot be accessed through the Fleek Platform UI. They are not recommended for production-grade applications.
- **Beta release**: Following rigorous testing, we will move Fleek Functions to a beta state. We will still advise caution when integrating Fleek Functions into production applications at this stage, but they will be nearing their production release and thus will be less likely to change or produce unexpected side effects.
- **Production release**: The Fleek Platform UI will support the creation and management of Fleek Functions. Fleek Functions will leave beta and be recommended for production applications. We will begin facilitating a community-created directory of open-source Fleek Functions.

Ready to get started with Fleek Functions and explore the cost and performance improvements they can enable for your application? Follow the new guide in our docs.

Here is also a full list of links and resources to help you get started:

Fleek Function Docs:

Fleek Function Tutorial:

Fleek CLI:

Fleek Function Early Performance Test:
