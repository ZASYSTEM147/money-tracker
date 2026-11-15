# ZA Money Tracker — Firebase setup

## Firebase project
Project ID: `money-tracker-110db`

The web app is configured in `index.html` with the Firebase web app config supplied by the project owner. Firebase web API keys are client identifiers, not service-account secrets. Keep service-account private keys out of this repository.

## 1. Enable Google sign-in
1. Open Firebase Console → Authentication → Sign-in method.
2. Enable **Google** and save.
3. In Authentication → Settings → Authorized domains, add the domain where this app will be hosted (for GitHub Pages, add `YOUR-GITHUB-USERNAME.github.io`).

## 2. Create Firestore
1. Open Firebase Console → Firestore Database.
2. Create a database (production mode is recommended).
3. Choose a region close to Brunei / Southeast Asia if available.
4. Publish the contents of `firestore.rules` in the Firestore Rules tab.

The rules restrict each signed-in user to their own document path:
`users/{uid}/privateData/main`.

## 3. Host on GitHub Pages
1. Upload `index.html` and `firestore.rules` to the repository root.
2. In GitHub → Settings → Pages, choose deploy from branch and select `main` / root.
3. Add the resulting `YOUR-GITHUB-USERNAME.github.io` domain to Firebase Authentication authorized domains.

## Data behaviour
- Signed-out data stays in this browser's local storage.
- On first sign-in, if this account has no cloud data, the app asks whether to upload the data already in this browser or start with a clean tracker.
- After sign-in, app changes are saved to the signed-in user's Firestore document.
- Signing out leaves the local browser cache in place. Do not use a shared/public device for sensitive financial records.
- Export CSV / JSON backups regularly.

## Important
The Firebase web config is intended to be included in browser code. Never commit service-account JSON files, private keys, or passwords.
