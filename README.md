# BirdLearn

BirdLearn is a static web app for learning about Bay Area birds. It includes:

- Bird Info, Analysis, and Settings tabs
- Search by bird name
- Alphabetical, newest first, and oldest first sorting
- Four document tabs per bird: Description, Map, Pictures & Sounds, Quiz
- Local quiz progress, accuracy, badges, volume, and text size settings

## Run Locally

Open `index.html` in a browser, or serve the folder with any static file server.

## Deploy To Vercel

Create a GitHub repository from this folder and import it in Vercel as a static project. No build command is required.

## Add Real Bird Assets

The sample birds currently use visual placeholders. Replace the media placeholders in `app.js` with your own image and sound paths, then place assets in a folder such as:

```text
public/birds/
```

For a static app, you can also create an `assets/` folder beside `index.html` and reference files like `assets/birds/annas-hummingbird.jpg`.
