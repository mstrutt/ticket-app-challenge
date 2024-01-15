# README

## Setup instructions

Create a .env.local file containing `NEXT_PUBLIC_API_AUTH_TOKEN=` and then your auth token for the API

Get the project up and running (I'm using node v21.5.0):

```
npm instal
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in browser.

## Design decisions

* Using [Redux Toolkit](https://redux-toolkit.js.org/) for best practice [Redux](https://redux.js.org/) workflow.
* Setup with a [Next.js](https://nextjs.org/) starter app including Redux Toolkit as it was the recommended quickstart and I didn't want to spend too long on setup. I haven't done anything server-specific.
* I used [Normalizr](https://www.npmjs.com/package/normalizr) for processing nested data.
* I used a `<table>` to represent what I saw as tabular data (neatly organised into columns). It provides good semantics to the user, though it may be something I pivoted away from when it came to design/interactivity. I've tried to consider good semantics and accessibility through, but it hasn't been the main focus.

## Further extension

I've used `@TODO` comments throughout explaining how I would extend code further / overcome its limitations.
