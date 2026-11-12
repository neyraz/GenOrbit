# GenOrbit

Bacterial genome maps in one HTML file. Load any bacterial genome from NCBI and explore it on circular and linear maps, with protein functions, the cell wall pathway, homologues, comparisons and exports.

This folder makes GenOrbit an **app you can install from Microsoft Edge (or Chrome)**. The installed app:

- has its own window, Start-menu entry and taskbar icon;
- starts without internet (loading genomes, BLAST and other online look-ups still need it);
- opens GenOrbit files you double-click in Windows: sessions (`.genorbit`) and homologue files (`.genorbit-hom`).

GenOrbit claims no other file type (`.json`, `.gz`, GenBank `.gb`/`.gbk`), so it never takes files away from other programs. Open those with **Open file** or by dropping them on the window.

Your genomes and sessions never go to GitHub. GitHub only hosts the program; files you open stay on your PC.

---

## What each file does

| File | What it is for |
|---|---|
| `GenOrbit.html` | The program itself (the same file you can also open by double-clicking it). |
| `index.html` | The start page: it simply opens `GenOrbit.html`. |
| `manifest.webmanifest` | The app's "ID card": name, icons, colours, and which file types it opens. |
| `sw.js` | The service worker: keeps a copy of GenOrbit so the app starts offline. It never touches NCBI, UniProt or other online services. |
| `icon-*.png`, `icon.svg`, `favicon-*.png` | App icons (the ring logo) in the sizes Windows and Edge use. |
| `icon-maskable-*.png` | The same icon for systems that crop icons to a circle. |
| `genorbit-map.jpg` | A picture shown in Edge's install window. |
| `.nojekyll` | Tells GitHub to publish the files as they are (optional). |

---

## 1. Put GenOrbit on GitHub (once)

1. Sign in at <https://github.com> and choose **+ → New repository** (top right) to make a repository.
   - **Repository name:** `GenOrbit` (any name works; it becomes part of the web address).
   - Choose **Public**. (GitHub Pages needs a public repository on the free plan.)
   - Click **Create repository**.
2. In the new repository, click **uploading an existing file** (or **Add file → Upload files**).
3. Unzip `GenOrbit-github.zip` on your PC (right-click → **Extract All**). Open the `GenOrbit-github` folder, select **all the files in it** (Ctrl + A) and drag them into the GitHub page. There are no sub-folders: every file sits at the top level, next to `GenOrbit.html`.
   - If `.nojekyll` is not taken, never mind: it is optional.
4. Write a short message such as `First version`, keep **Commit directly to the main branch**, and click **Commit changes**.
5. Go to **Settings → Pages** (in the left menu, under "Code, planning, and automation").
   Under **Build and deployment → Source** choose **Deploy from a branch**, then branch **main** and folder **/(root)**, and click **Save**.
6. Wait 1–2 minutes and refresh the Pages settings page. It shows the address of your site, for example:
   `https://YOUR-GITHUB-NAME.github.io/GenOrbit/`

## 2. Install the app in Edge

GitHub lets browsers keep its files for up to 10 minutes, so wait about 10 minutes after an upload before installing.

1. Open that address in Microsoft Edge and press **Ctrl + F5** once (reload, fetching everything fresh). GenOrbit opens.
2. Check that `https://YOUR-GITHUB-NAME.github.io/GenOrbit/icon-192.png` shows the violet ring logo. If it does not, the icons are not where the app looks for them.
3. Click the **install icon** at the right end of the address bar ("App available. Install GenOrbit"), or open **⋯ (Settings and more) → Apps → Install GenOrbit** (in some Edge versions: **⋯ → More tools → Apps → Install this site as an app**).
4. Click **Install**. Allow it to be pinned to the taskbar or Start menu if you like.

GenOrbit now opens in its own window. To remove it later: open `edge://apps`, choose **Details** on GenOrbit, then **Uninstall**. Do **not** tick the option to clear data: all your apps on the same GitHub address (MuroSense, Sigmoid, …) share it, and their saved settings would go too.

## 3. Open sessions by double-clicking

New sessions are saved as `.genorbit` files (**Session → Save session**), and homologue analyses as `.genorbit-hom` files.

The first time you double-click such a file:

1. If Windows asks which app should open the file, choose **GenOrbit** and pick **Always** (or right-click the file → **Open with → GenOrbit**).
2. Edge asks whether GenOrbit may open the file. Choose **Allow** (tick "Remember my decision" if offered).

Each file opens in a window of its own. **Save session** (Ctrl+S) writes back to the same file.

**Older sessions** end in `.genorbit.json.gz`. They still open with **Open file** or **Session → Open session**. To double-click them as well, rename them so that they end in `.genorbit` (for example `Ecoli.genorbit.json.gz` → `Ecoli.genorbit`): the content is the same.

## 4. Updating GenOrbit later

When you get a new `GenOrbit.html`:

1. In your GitHub repository, choose **Add file → Upload files**, drop the new `GenOrbit.html` (same name), and click **Commit changes**.
2. Wait a few minutes. The next time you start the app with internet, it uses the new version. (If you still see the old one, close the app and start it again.)

The other files only need uploading again if they change.

---

## If something does not work

- **The app shows a letter instead of the logo, or opens another of your apps:** uninstall it (`edge://apps` → Details → Uninstall, without clearing data), wait 10 minutes, check that `icon-192.png` opens at your GitHub address, press Ctrl + F5 and install again. GenOrbit's identity is `/genorbit`, separate from your other apps.
- **No install icon:** check that the address starts with `https://` and ends in `/GenOrbit/` or `/GenOrbit.html`, wait a few minutes after turning on Pages, and press Ctrl+F5 to reload.
- **"Install" is missing or greyed out on a work PC:** your IT department may have turned off installing web apps. GenOrbit still works in a normal Edge tab, and the downloaded `GenOrbit.html` works when opened from the disk.
- **Double-clicking opens another program:** right-click the file → **Open with → Choose another app → GenOrbit**, and tick **Always**.
- **Files stopped opening after you chose "Block":** open your GenOrbit address in a normal Edge tab, click the lock icon left of the address → **Permissions for this site**, and set the file-opening permission back to **Ask** or **Allow**.

GenOrbit uses public data services: NCBI, UniProt, EBI (BLAST, MAFFT, InterPro), AlphaFold DB, STRING and others. The full list of methods and references is in the app under **Help (?) → References**.
