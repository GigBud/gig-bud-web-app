# Welcome to Gig Bud

## Introduction

Gig Bud is a platform that connects gig seekers and gig providers in easy way.

## Technologies Used

This repository contains the source code of our application. The technology used to built it is [Next.js](https://nextjs.org/) with it's version `v13.x.x`, [React.js](https://reactjs.org/) with it's version `v18.x.x`, [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/), you should have [Node.js](https://nodejs.org/) installed in your machine, and use the latest LTS version like `v18.x.x.`, [Node.js](https://nodejs.org/) comes with `npm` installed with it, we gonna use it a lot.

## Getting Started

First, **always** check [package.json](./package.json) and take a look at the dependencies and the scripts, also look at the folder structure and understand it.

Second, clone this repository:

    git clone https://github.com/GigBud/gig-bud-code.git

Then, install all the dependencies:

    npm install

Then, start the development server:

    npm run dev

Then, open the browser and go to [http://localhost:3000](http://localhost:3000) to see the application frontend, and [http://localhost:3000/api](http://localhost:3000/api) to see the API.

Other Commands you can use:

    npm run build
    npm run start
    npm run lint
    npm run lint:fix
    npm run prettier
    npm run prettier:fix
    npm run format

## Folder Structure

```
.
├── app/
│   All Frontend routes
│
├── components/
│   All Frontend components
│
├── models/
│   All models for the database
│
├── pages/
│   ├── api/
│   All Backend routes
│
├── public/
│   All static files and images
│
├── store/
│   All global state
│
├── styles/
│   All styles
│
├── utils/
│   All utils
│
├── package.json and other configurations files at the root
│
```

## Contribution

Soon
