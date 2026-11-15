# ZA Money Tracker — refresh loading meter v7

Upload every file in this package to the root of the `money-tracker` GitHub repository, replacing files with the same names.

## This update
- The panda-logo loading meter now appears immediately on every page load and browser refresh, before Firebase session restoration starts.
- The meter stays visible while Firebase checks the saved Google session and loads private cloud data, then closes when the app is ready.
- A safety timeout prevents a permanently stuck loading overlay if the authentication module cannot respond.
- Service worker cache upgraded to v7 so installed PWAs can fetch the new refresh screen.

After committing, wait for GitHub Pages deployment. Open the site online and refresh once. If an installed app still shows an old screen, fully close it and reopen it while connected to the internet.
