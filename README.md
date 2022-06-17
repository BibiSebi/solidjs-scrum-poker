# Scrum Poker

## Description
Due to the fact that there are many apps for scrum poker but they are either unintuitive or they cost something, I decided to implement a scrum poker application with SolidJS.
I will not concentrate on the frontend so I will be using the SUID library for UI components. In order to have a simultaneous communication, I will be using the [socket.io](https://socket.io/) library. The application should be easy to use and should not require everyone to sign up, only the creator of a scrum poker session needs to be registered. 

For future it would be nice to integrate Jira and other Project Management Tools so that the user does not have to switch between tabs but has everything in one place. 

TBD 
- Designs 
- Sockets 
- Testing

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
