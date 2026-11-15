# ZA Money Tracker — branded installable web app

## Publish
Upload every file in this folder to the root of your GitHub repository and enable GitHub Pages (Settings → Pages → Deploy from branch → main → /(root)).

## Install on Android
Open the HTTPS GitHub Pages URL in Chrome or Microsoft Edge. Use the browser's menu and choose **Install app** or **Add to Home screen**. The app uses the supplied panda logo for its launcher icon.

The login page includes an install button when the browser exposes the install prompt.

## iPhone
Open the HTTPS URL in Safari → Share → Add to Home Screen. (iOS Chrome/Edge generally use the system's Add to Home Screen flow rather than Android-style PWA install prompts.)

## Firebase
The app retains the Firebase project configuration and Google sign-in / Firestore integration. In Firebase Authentication → Settings → Authorized domains, add your GitHub Pages hostname, e.g. `yourname.github.io`. Enable Google sign-in and create Firestore; publish `firestore.rules`.

## Offline note
The service worker caches the app shell and branding assets. Google sign-in and Firestore cloud sync still require an internet connection.
