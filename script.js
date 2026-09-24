const PORTFOLIO = {
  "apps": {
    label: "Apps",
    cover: "images/cover-software.jpg?v=a36afb08",
    works: [
      {
        src: "images/vaporly-repo.jpg?v=82d642c1",
        width: 1920,
        height: 1200,
        title: "Vaporly, Open-Source On-Device Dictation",
        tagline: "Vaporly turns held-key speech into clean text in whatever app you are typing in, with the audio processed on your own machine.",
        meta: "Desktop app",
        externalUrl: "https://github.com/pohsuchenwork/vaporly",
        links: [
          { label: "Code", url: "https://github.com/pohsuchenwork/vaporly" },
          { label: "Live", url: "https://pohsuchenwork.github.io/vaporly/" }
        ],
        description: "A free, private push-to-talk dictation app for macOS, Windows, and Linux, built in Rust and TypeScript on Tauri. You hold a key, speak, and clean, polished text appears in whatever app you are typing in. In this version the Whisper speech-to-text and the AI cleanup run on your own machine, with no account needed. Open source under the GNU AGPL-3.0. Click the thumbnail to open the GitHub repository."
      },
      {
        src: "images/climon.jpg?v=67655343",
        width: 1200,
        height: 750,
        title: "CLImon, A Terminal Pokémon Battler",
        tagline: "Pokémon battles in the terminal, with ANSI-art sprites and every move arbitrated server-side.",
        meta: "Terminal game",
        videoUrl: "https://youtu.be/bGOkspsePQc",
        links: [{ label: "Code", url: "https://github.com/pohsuchenwork/climon" }],
        description: "A full-stack Pokémon-style battler that runs entirely in the terminal: ANSI art rendering, a server-authoritative game engine, and 177 automated tests. Click the thumbnail to watch the demo on YouTube.",
        disclaimer: "Pokémon® is a trademark of Nintendo. This is a fan-made tribute and is not commissioned by, affiliated with, or endorsed by Nintendo, Creatures Inc., or Game Freak Inc."
      },
      {
        src: "images/magister.jpg?v=80f0f779",
        width: 1920,
        height: 1200,
        title: "Magister, An AI Code Professor",
        tagline: "Magister tackles the 2 a.m. coding wall, turning any pasted snippet into a clear, lecturer-style explanation.",
        meta: "Web app",
        videoUrl: "https://youtu.be/Ut4eHyWanzE",
        links: [{ label: "Live", url: "https://magisterapp.vercel.app" }],
        description: "A full-stack AI code explainer running a Llama model, streamed to the browser and rate-limited and cached with Redis for a fast, privacy-minded experience. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/coffee-catalogue.jpg?v=61064487",
        width: 1200,
        height: 750,
        title: "Coffee Catalogue, A Storefront & Admin CMS",
        tagline: "A storefront admin console with three layers of access control, built so non-technical staff are not one click from breaking the catalogue.",
        meta: "Web app",
        videoUrl: "https://youtu.be/0eKdQ_iLFW0",
        links: [{ label: "Site (backend offline)", url: "https://coffeecatalogue.vercel.app" }],
        description: "A full storefront with an admin CMS on Next.js 16 and Supabase / Postgres: row-level security, bcrypt auth, a strict Content-Security-Policy, and immutable audit logs. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/blackjack-ultra.jpg?v=d2283fb8",
        width: 1920,
        height: 1200,
        title: "Blackjack Ultra, Full-Stack Security",
        tagline: "Blackjack Ultra backs up its security claims by shipping a real blackjack app and running its own penetration test.",
        meta: "Web app",
        videoUrl: "https://youtu.be/khSJFFIhYrE",
        links: [{ label: "Live", url: "https://blackjack-ultra.vercel.app" }],
        description: "A blackjack game built as a full-stack security exercise: email authentication, server-authoritative rules, and a hands-on penetration-testing component. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/solary.jpg?v=101dee8c",
        width: 1920,
        height: 1200,
        title: "Solary, A 3D Solar System",
        tagline: "Solary makes orbital mechanics tangible with a real-time 3D solar system on Keplerian physics, not faked keyframes.",
        meta: "Web app",
        videoUrl: "https://youtu.be/gphqu5UarWo",
        links: [{ label: "Live", url: "https://solary-app.vercel.app" }],
        description: "A real-time 3D solar system built with Three.js and Keplerian orbital mechanics: all eight planets and their major moons, with a date picker spanning 1800 to 2200. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/youtube-control-extension.jpg?v=98a93e99",
        width: 1280,
        height: 800,
        title: "YouTube Control Extension, Vibe Coding",
        tagline: "The YouTube controls I wanted, and the programme that taught me to ship.",
        meta: "Chrome extension",
        externalUrl: "https://chromewebstore.google.com/detail/ultimate-youtube-control/bmmeeddegkhoilbbfelinccpmmapmkib",
        description: "A round of Chrome extensions built during a Hyphn Studios programme, which is where I learnt how the Chrome Web Store works. A few extension games came along with it, but this YouTube one was the one I was most proud of. Click the thumbnail to open the Chrome Web Store listing in a new tab.",
        disclaimer: "YouTube® is a trademark of Google LLC. Chrome™ and the Chrome Web Store™ are trademarks of Google LLC. This extension is not commissioned by, affiliated with, or endorsed by Google LLC. Hyphn Studios is named only as where the work was done, not as a backer or endorser."
      },
      {
        src: "images/six-feet-under-fps.jpg?v=210cb6e7",
        width: 1920,
        height: 1080,
        title: "Six Feet Under, FPS Prototype",
        tagline: "A first-person shooter built from scratch, by hand.",
        meta: "Game prototype",
        videoUrl: "https://youtu.be/Yf_KK7v-RJU",
        description: "A first-person shooter I put together from scratch, without any code assistance. Self-taught weapon handling, target practice, and basic level design with an AK-74 and an M1911 sidearm. Click the thumbnail to watch the gameplay video on YouTube.",
        disclaimer: "This prototype is not commissioned by, affiliated with, or endorsed by any current arms manufacturer. YouTube® is a trademark of Google LLC; this page is not affiliated with or endorsed by Google LLC."
      }
    ]
  },
  "websites": {
    label: "Websites",
    cover: "images/cover-product-design.jpg?v=47000f4d",
    works: [
      {
        src: "images/linktree.jpg?v=9d83722c",
        width: 1920,
        height: 1200,
        title: "Linktree, The One Link",
        tagline: "The single address that points at everything else: both portfolios, the code, and the writing and video work.",
        meta: "Links page",
        externalUrl: "https://linktr.ee/pohsuchenwork",
        description: "A hosted links page on Linktree rather than a built site: one address that points at both portfolios, GitHub, LinkedIn, YouTube, Instagram, TikTok, and X. Click the thumbnail to open it in a new tab."
      },
      {
        src: "images/hypnagogia.jpg?v=3d59fd7d",
        width: 1920,
        height: 1200,
        title: "Hypnagogia, An Editorial Essay",
        disclaimer: "The photograph is from Unsplash, used under the Unsplash Licence.",
        tagline: "A long-form piece on the state between waking and sleep, set as an editorial spread rather than a scrolling page.",
        meta: "Editorial site",
        externalUrl: "https://hypnagogia.vercel.app",
        description: "An essay site on the transitional state between wakefulness and sleep, built as a sequence of typographic spreads with paired columns and interiors. Click the thumbnail to open it in a new tab."
      },
      {
        src: "images/zorinospf.jpg?v=772013ad",
        width: 1920,
        height: 1200,
        title: "A Desktop, Not a Website",
        tagline: "A portfolio that boots instead of loading: a full desktop with a dock, a file manager, and a CV you open like a file.",
        meta: "Web desktop",
        externalUrl: "https://zorinospf.vercel.app",
        description: "A Zorin-style desktop running in the browser, with windows, a dock, and a filesystem, where the CV and README are files you open rather than pages you scroll. Click the thumbnail to open it in a new tab.",
        disclaimer: "Zorin OS and its desktop are the work of Zorin Technology Group Ltd. This is a pastiche and is not commissioned by, affiliated with, or endorsed by them."
      },
      {
        src: "images/dandelionz.jpg?v=9c152356",
        width: 1920,
        height: 1200,
        title: "dandelionz, A Tea Room on Alder Street",
        tagline: "A tea room site built around its own origin story, warm serif on brown with photographs set like prints on a table.",
        meta: "Storefront",
        externalUrl: "https://shopdandelionz.vercel.app",
        description: "A storefront for a small tea room, written and built as one piece so the copy and the layout arrive together. Click the thumbnail to open the live site in a new tab."
      },
      {
        src: "images/vaporly-site.jpg?v=976a9563",
        width: 1920,
        height: 1200,
        title: "Vaporly Site, A Product Landing Page",
        tagline: "A single-page pitch for Vaporly: hold a key, talk, and clean text appears wherever you are typing.",
        meta: "Landing page",
        externalUrl: "https://pohsuchenwork.github.io/vaporly/",
        links: [
          { label: "Live", url: "https://pohsuchenwork.github.io/vaporly/" },
          { label: "Code", url: "https://github.com/pohsuchenwork/vaporly" }
        ],
        description: "The landing page for Vaporly, my private on-device dictation app: hold a key, talk, and clean text appears wherever you are typing, with no account needed and the speech handled on your own machine. Free and open source under the AGPL-3.0. A single-page pitch with one-click downloads for every OS, a quick setup guide, and a feature and privacy walkthrough. Click the thumbnail to open the site."
      },
      {
        src: "images/sugoso-pro-signup.jpg?v=788443a8",
        width: 1920,
        height: 1200,
        title: "Sugoso Pro, A Zero-Dependency Landing Page",
        tagline: "A dependency-free waitlist page with a locked-down Supabase backend, where row-level security holds the signup list server-side.",
        meta: "Landing page",
        externalUrl: "https://sugoso-pro-signup.vercel.app",
        links: [{ label: "Live", url: "https://sugoso-pro-signup.vercel.app" }],
        description: "A zero-dependency waitlist landing page for Sugoso Pro, hand-written HTML, CSS, and JavaScript with a Supabase backend and row-level security for signups. Click the thumbnail to open the live site in a new tab."
      },
      {
        src: "images/full-stack-portfolio.jpg?v=cd7623a9",
        width: 1920,
        height: 1200,
        title: "Full-Stack Portfolio, Accessibility & UX",
        tagline: "Full-Stack Portfolio proves frontend craft by being the demo itself: per-pixel responsive, accessibility-tested, and strict-CSP.",
        meta: "Portfolio site",
        videoUrl: "https://youtu.be/37JwBMrYSAg",
        links: [{ label: "Live", url: "https://pohsufullstack.vercel.app" }],
        description: "My full-stack engineering portfolio, where these projects are written up in full. Around 14 KB gzipped with no framework, a resume-dense layout, and no automated accessibility violations reported by axe-core against WCAG 2.1 AA. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/savepoint-website.jpg?v=c6789fb2",
        width: 1440,
        height: 850,
        title: "Savepoint Signup Validation Website",
        tagline: "The signup page built while taking Savepoint through the Startmate Launch Club.",
        meta: "Signup page",
        externalUrl: "https://savepointalpha.vercel.app",
        description: "Signup landing page for Savepoint, my startup idea: a Git-style version control tool for people who would rather ship than learn another tool. Built and shipped while taking it through the Startmate Launch Club. Click the thumbnail to open the live site in a new tab.",
        disclaimer: "Startmate is named only as the programme the work was taken through, not as a backer, investor, or endorser."
      },
      {
        src: "images/respirabuilt-website.jpg?v=3dd60580",
        width: 1440,
        height: 850,
        title: "Respirabuilt Landing Page for RespiraSheds",
        tagline: "The landing page for Respirabuilt's RespiraSheds campaign.",
        meta: "Landing page",
        externalUrl: "https://clever-questions-330567.framer.app",
        description: "The landing page and website I built for the RespiraSheds campaign at Respirabuilt, a startup. Built in Framer. Click the thumbnail to open the live site in a new tab.",
        disclaimer: "Respirabuilt and RespiraSheds names, logos, and brand assets are the property of Respirabuilt and its owners."
      }
    ]
  },
  "posters": {
    label: "Posters",
    cover: "images/cover-marketing-visuals.jpg?v=34b45344",
    works: [
      {
        src: "images/pavilion-library.jpg?v=6188b95e",
        width: 1358,
        height: 1920,
        title: "Pavilion Library, Borrow The Odd One",
        tagline: "A civic library poster arguing for the book nobody else picked, built on one shelf of mismatched spines.",
        meta: "A2 poster",
        description: "A2 poster from a long series of variants, this one the aligned setting. The shelf is drawn rather than photographed so the spines could be tuned individually, and the single leaning volume carries the whole argument. Rendered at 300 dpi from the poster system that generated it."
      },
      {
        src: "images/your-new-usual.jpg?v=ed756026",
        width: 1358,
        height: 1920,
        title: "Your New Usual, Halflight",
        tagline: "A coffee poster where the type is cut through by the drink itself, so the product interrupts the message rather than sitting beside it.",
        meta: "A2 poster",
        description: "A2 poster, the one-cut setting from a long series of variants. Three lines of condensed caps with the glass punched through the middle line, ice and splash crossing the letterforms so the image and the words occupy the same space. Rendered at 300 dpi from the poster system that generated it."
      },
      {
        src: "images/cut-from-the-ground.jpg?v=e76a2c7a",
        width: 1358,
        height: 1920,
        title: "Cut From The Ground, Quarry Exhibition",
        tagline: "An exhibition poster for nine hundred years of quarrying, where the photograph carries the weight and the type stays out of its way.",
        meta: "A2 poster",
        description: "A2 exhibition poster, the spaced setting from a long series of variants. The plate sits high and the type is set beneath it rather than over it, so the stone is never competing with a headline. Rendered at 300 dpi from the poster system that generated it.",
        disclaimer: "Photograph by Moha Sheikh."
      },
      {
        src: "images/cafe-poster.jpg?v=db5ad2af",
        width: 1357,
        height: 1920,
        title: "Urban Roots Cafe Poster",
        tagline: "A mock poster for a fictional Urban Roots Cafe organic-coffee and tree-planting week.",
        meta: "Mock ad",
        description: "Mock advertisement poster for a fictional Urban Roots Cafe organic-coffee and tree-planting week. Personal exploration of warm, organic editorial layout with hand-drawn type and natural photography."
      },
      {
        src: "images/redbull-blue.jpg?v=eabeba89",
        width: 1357,
        height: 1920,
        title: "Red Bull Blue Edition, Mock Ad",
        tagline: "A speculative launch poster for a Red Bull flavour.",
        meta: "Mock ad",
        description: 'Speculative product launch poster for a Red Bull "Blue Edition" blueberry flavour. Personal exploration of beverage advertising with splash photography and ingredient styling.',
        disclaimer: "Red Bull® and the Red Bull logo are trademarks of Red Bull GmbH. This poster is not commissioned by, affiliated with, or endorsed by Red Bull GmbH."
      },
      {
        src: "images/starbucks-kiwi.jpg?v=c47610d6",
        width: 1920,
        height: 1920,
        title: "Starbucks Kiwi Frappuccino, Mock Ad",
        tagline: "A speculative launch poster for a Starbucks Kiwi Frappuccino.",
        meta: "Mock ad",
        description: "Speculative product launch poster for a Starbucks Kiwi Frappuccino. Personal exploration of beverage advertising with motion-frozen imagery and ingredient styling.",
        disclaimer: "Starbucks®, Frappuccino®, and the Starbucks logo are trademarks of Starbucks Corporation. This poster is not commissioned by, affiliated with, or endorsed by Starbucks Corporation."
      },
      {
        src: "images/porsche-gt3r.jpg?v=5af33a53",
        width: 1357,
        height: 1920,
        title: "Porsche 911 GT3 R, Mock Ad",
        tagline: "A speculative editorial poster for the Porsche 911 GT3 R.",
        meta: "Mock ad",
        description: "Speculative editorial poster for the Porsche 911 GT3 R. Personal exploration of automotive advertising with retro-modern typography and atmospheric photography.",
        disclaimer: 'Porsche®, the Porsche crest, "911", and "GT3 R" are trademarks of Dr. Ing. h.c. F. Porsche AG. This poster is not commissioned by, affiliated with, or endorsed by Porsche AG.'
      },
      {
        src: "images/ford-gt.jpg?v=245eb1c6",
        width: 1920,
        height: 1357,
        title: "Ford GT, Mock Ad",
        tagline: "A satirical mock ad for the Ford GT, aimed at the crash clips rather than the car.",
        meta: "Mock ad",
        description: "A satirical mock advertisement for the Ford GT. A tongue-in-cheek nod to the clips of new owners wrecking their GTs within minutes of taking delivery. Bold black-and-white typography and a wrecked-looking GT carry the joke.",
        disclaimer: "Ford® and Ford GT™ are trademarks of Ford Motor Company. This poster is not commissioned by, affiliated with, or endorsed by Ford Motor Company."
      },
      {
        src: "images/gojo-poster.jpg?v=b481f597",
        width: 1357,
        height: 1920,
        title: "Gojo Satoru, Concept Poster",
        tagline: "A concept fan-art poster of Gojo Satoru.",
        meta: "Concept poster",
        description: "Concept fan-art poster of Gojo Satoru from Jujutsu Kaisen. Personal exploration of anime poster aesthetics. Bold kanji backdrop, a stylised character render, and a tight blue-and-white palette.",
        disclaimer: "Gojo Satoru, Jujutsu Kaisen, and related characters © Gege Akutami/Shueisha, JUJUTSU KAISEN Project. This poster is not commissioned by, affiliated with, or endorsed by the rights holders."
      },
      {
        src: "images/m1-garand.jpg?v=404f0e1d",
        width: 1920,
        height: 1080,
        title: "M1 Garand, Editorial Poster",
        tagline: "An editorial poster about how shooter games have flattened real weapons into pixels.",
        meta: "Editorial poster",
        description: "Editorial poster of the M1 Garand, the iconic WWII-era service rifle. Personal commentary on how violent shooter games have normalised and digitised these real weapons. The dot-grid pixelation is meant to capture that flattening of real history into pixels on a screen.",
        disclaimer: "This poster is not commissioned by, affiliated with, or endorsed by Springfield Armory Inc. or any current manufacturer of historical-pattern rifles."
      },
      {
        src: "images/visionary-art-comp.jpg?v=a72ef0b8",
        width: 1358,
        height: 1920,
        title: "Visionary Art Competition Poster",
        tagline: "The promotional poster for an art competition I organised and livestreamed.",
        meta: "Event poster",
        description: "Promotional poster for the Visionary Art Competition, an event I organised and livestreamed under Lycoris. Distributed across the event's channels and digital displays."
      },
      {
        src: "images/lycoris-logo.png?v=67150cfc",
        width: 1920,
        height: 1920,
        title: "Lycoris Logo",
        tagline: "The brand mark for Lycoris.",
        meta: "Logo",
        description: "Brand logo for Lycoris. Designed for a distinctive, energetic identity."
      }
    ]
  },
  "archive": {
    label: "Archive",
    cover: "images/cover-hardware.jpg?v=59726af3",
    works: [
      {
        src: "images/sugoso.jpg?v=39492f5f",
        width: 1200,
        height: 750,
        title: "Sugoso, A macOS Menu-Bar Focus Timer",
        tagline: "Sugoso keeps a calm focus timer in your Mac's menu bar, with no backend and nothing leaving your device.",
        meta: "Menu-bar app",
        videoUrl: "https://youtu.be/8HtPdS9KkiM",
        links: [{ label: "Code", url: "https://github.com/pohsuchenwork/sugoso" }],
        description: "A native macOS menu-bar focus timer written in Swift. It uses precise date maths rather than tick counting for accuracy, in this version it collects no data, and the source is public. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/holotable.jpg?v=3078be64",
        width: 1920,
        height: 1200,
        title: "HoloTable, In-Browser Hand-Tracked AR",
        tagline: "HoloTable floats a 3D hologram above your bare palm from just a webcam, with hand-tracking kept on-device.",
        meta: "Browser AR",
        videoUrl: "https://youtu.be/nLx38qBH164",
        links: [{ label: "Live", url: "https://holotableapp.vercel.app" }],
        description: "An in-browser augmented-reality hologram you manipulate with your hands: MediaPipe hand-tracking, on-device WebAssembly inference, Three.js / WebGL rendering, and peer-to-peer WebRTC. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/rock-paper-vision.jpg?v=d9755749",
        width: 1920,
        height: 1200,
        title: "Rock Paper Vision, Multiplayer Hand-Tracking",
        tagline: "Rock Paper Vision replaces button clicks with real webcam hand throws, synced fairly across latency.",
        meta: "Multiplayer game",
        videoUrl: "https://youtu.be/vwFgWIkrGzg",
        links: [{ label: "Live", url: "https://multihand-rps.vercel.app" }],
        description: "A real-time multiplayer rock-paper-scissors duel played with your hands: MediaPipe hand-tracking, peer-to-peer WebRTC, and round timing kept in sync across network latency. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/scanr.jpg?v=6e07ba27",
        width: 1920,
        height: 1200,
        title: "Scanr, A Nutrition Scanner PWA",
        tagline: "Scanr turns dense food labels into an instant, on-device nutrition breakdown and health score from one barcode scan.",
        meta: "PWA",
        videoUrl: "https://youtu.be/LtJ_Pm56usI",
        links: [{ label: "Live", url: "https://scanrapp.vercel.app" }],
        description: "An installable PWA that detects barcodes on-device, looks nutrition up through the Open Food Facts API, stores history in IndexedDB, and animates a health-score gauge. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/quickdraw.jpg?v=62ec8515",
        width: 1200,
        height: 750,
        title: "Quickdraw, A Computer-Vision Duel",
        tagline: "Quickdraw makes your bare hand the controller, using webcam hand-tracking to fire the instant your fist opens.",
        meta: "Browser game",
        videoUrl: "https://youtu.be/y-MDfvMteZE",
        links: [{ label: "Live", url: "https://quickdrawcv.vercel.app" }],
        description: "A wild-west draw duel you play in the browser with your hand: a MediaPipe HandLandmarker feeds a custom gesture classifier, so there are no controllers. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/dealsforyou.jpg?v=c19fdb64",
        width: 1920,
        height: 1200,
        title: "DealsForYou, A PC-Parts Deal Aggregator",
        tagline: "DealsForYou pulls the best PC-parts deals scattered across Reddit into one fast, filterable page, no account needed.",
        disclaimer: "Reddit is a trademark of Reddit, Inc. Product names and prices shown in the screenshot belong to their makers and retailers. Not commissioned by, affiliated with, or endorsed by Reddit, Inc.",
        meta: "Aggregator",
        videoUrl: "https://youtu.be/oa9YfdYsny8",
        links: [{ label: "Live", url: "https://justdealsforyou.vercel.app" }],
        description: "A PC-parts deal aggregator that reads the public Reddit feeds hourly with bound query parameters and a multi-currency parser, keeping bookmarks in browser storage with no server-side tracking. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/mymagicpaper.jpg?v=cc1a8abb",
        width: 1920,
        height: 1200,
        title: "MyMagicPaper, An AI Vision App",
        tagline: "MyMagicPaper reads the strokes on your canvas with a vision AI and answers in kind.",
        meta: "Vision toy",
        videoUrl: "https://youtu.be/vZMv5Szd_JM",
        links: [{ label: "Live", url: "https://mymagicpaper.vercel.app" }],
        description: "A handwriting personality toy, for fun rather than science: it captures a canvas drawing and runs it through a GitHub Models vision model (GPT-4o-mini), guarded by salted-hash rate limiting on Upstash Redis. Click the thumbnail to watch the demo on YouTube."
      },
      {
        src: "images/savepoint-app.jpg?v=b18cc2aa",
        width: 1920,
        height: 1145,
        title: "Savepoint App, Building for Vibe Coders",
        tagline: "Savepoint snapshots the code an AI session produces, so a working state is never one prompt away from being lost.",
        meta: "App",
        externalUrl: "https://savepointalpha.vercel.app/app",
        description: "The Savepoint app, an AI vibe coding saving tool for snapshotting code generated through AI sessions. Click the thumbnail to open the app in a new tab."
      },
      {
        src: "images/google-ux-cert.jpg?v=d40e942b",
        width: 1600,
        height: 1236,
        title: "Google UX Design, Designing User Experiences",
        alt: "Google UX Design certificate",
        tagline: "Google's UX Design certificate, taken to find out what UX actually was.",
        meta: "Certificate",
        description: "I took Google's UX/UI course out of curiosity for what UX/UI actually was. I had always been interested in design, aesthetics, and beauty, and was told UX/UI was a step in that direction; it turned out to be a few dozen steps.",
        disclaimer: "Google® and the Google UX Design Certificate are trademarks of Google LLC. Coursera® is a trademark of Coursera Inc. This page is not commissioned by, affiliated with, or endorsed by Google LLC or Coursera Inc."
      },
      {
        src: "images/savepoint-pitch.jpg?v=cae1bdff",
        width: 1920,
        height: 1080,
        title: "Savepoint Pitch, Pitching to Investors",
        tagline: "The Savepoint investor pitch, reshaped around how I was told investors want to be pitched.",
        meta: "Pitch deck",
        externalUrl: "https://docs.google.com/presentation/d/e/2PACX-1vTJpOU2CflRR2CO7xJE8QrUClPbex7r0JEg0ootfSZHaAkXHhE05ZVQ8RboT4mjSX5T3xic_51Y_DGD/pub?start=false&loop=false&delayms=3000",
        description: "My pitch for Savepoint, shaped by the feedback I was given on how to pitch it. Click the thumbnail to open the full deck in a new tab."
      },
      {
        src: "images/savepoint-ux-flow.jpg?v=a5f1c3c9",
        width: 1920,
        height: 858,
        title: "Savepoint UX Flow, Company-Grade UX",
        tagline: "The whole Savepoint product surface mapped out before a line of code was written.",
        meta: "UX flow",
        description: "The UX wireframe and flow I designed for Savepoint's target ICP and users. The whole product surface, including local and cloud paths, snapshot, timeline, and advanced views, mapped out before any code was written."
      },
      {
        src: "images/plantmend-mockups.jpg?v=eb47fcd6",
        width: 1920,
        height: 829,
        title: "PlantMend Mockups, Creating Mockups",
        tagline: "One of three PlantMend mockups, made to the brief the UX course set.",
        meta: "Mockup",
        description: "After going through the UX/UI course I made wireframes, lo-fi prototypes, mockups, and hi-fi prototypes for the same app concept. Three mockups in total, the way the course asked. This is one of them."
      },
      {
        src: "images/plantmend-wireframes.jpg?v=6025423e",
        width: 1920,
        height: 857,
        title: "PlantMend Wireframes, Creating Wireframes",
        tagline: "One of three PlantMend wireframes, from an app concept built through the UX course.",
        meta: "Wireframe",
        description: "After going through the UX/UI course I made wireframes, lo-fi prototypes, mockups, and hi-fi prototypes for an app concept called PlantMend. Three wireframes in total, the way the course asked. This is one of them."
      },
      {
        src: "images/nand-to-tetris-cert.jpg?v=93d121fb",
        width: 1600,
        height: 1236,
        title: "Nand to Tetris II, About 90% Completed",
        alt: "Nand to Tetris course certificate (Part I)",
        tagline: "The software half of Nand to Tetris: assembler, virtual machine, compiler, and a small operating system; the certificate shown is Part I's.",
        meta: "Course record",
        description: "The follow-on to Nand to Tetris I, building the software stack on top of Part I's hardware: assembler, virtual machine, compiler, and a small operating system. I made it through about 90% of the projects without buying the paid certificate, so the certificate shown here is the one from Part I. Course offered by Hebrew University of Jerusalem on Coursera.",
        disclaimer: "Nand to Tetris is a project-centred course created by Shimon Schocken and Noam Nisan, offered by Hebrew University of Jerusalem on Coursera. Tetris® is a trademark of Tetris Holding. Coursera® is a trademark of Coursera Inc. This page is not commissioned by, affiliated with, or endorsed by the course authors, Hebrew University of Jerusalem, Coursera Inc., or The Tetris Company LLC."
      },
      {
        src: "images/minitetris-extension.jpg?v=2499c1d8",
        width: 1280,
        height: 800,
        title: "MiniTetris Extension, Vibe Coding",
        tagline: "A retro Tetris built into a browser popup, playable from any tab.",
        meta: "Chrome extension",
        externalUrl: "https://chromewebstore.google.com/detail/ultimate-retro-tetris-gam/emkjdimnaoldigbinknkkphmgpgdeddc",
        description: "One of the Chrome extension games I vibe coded alongside the YouTube Control Extension. A retro Tetris built into a popup, playable from any tab. Click the thumbnail to open the Chrome Web Store listing in a new tab.",
        disclaimer: "Tetris® is a trademark of Tetris Holding. Chrome™ and the Chrome Web Store™ are trademarks of Google LLC. This extension is not commissioned by, affiliated with, or endorsed by The Tetris Company LLC or Google LLC."
      },
      {
        src: "images/nand-to-tetris-cert.jpg?v=93d121fb",
        width: 1600,
        height: 1236,
        title: "Nand to Tetris I",
        alt: "Nand to Tetris course certificate (Part I)",
        tagline: "The hardware half of Nand to Tetris: from NAND gates up through Boolean logic, the ALU, registers, RAM, and the CPU.",
        meta: "Certificate",
        description: "Built a full computer from first principles, starting with NAND gates and working up through Boolean logic, the ALU, registers, RAM, the CPU, and machine language. Project-centred course offered by Hebrew University of Jerusalem on Coursera.",
        disclaimer: "Nand to Tetris is a project-centred course created by Shimon Schocken and Noam Nisan, offered by Hebrew University of Jerusalem on Coursera. Tetris® is a trademark of Tetris Holding. Coursera® is a trademark of Coursera Inc. This page is not commissioned by, affiliated with, or endorsed by the course authors, Hebrew University of Jerusalem, Coursera Inc., or The Tetris Company LLC."
      },
      {
        src: "images/google-pm-cert.jpg?v=9625e1f5",
        width: 1600,
        height: 1236,
        title: "Google Project Management, Running Projects",
        alt: "Google Project Management certificate",
        tagline: "Google's Project Management certificate, taken to understand how companies organise around projects.",
        meta: "Certificate",
        description: "I took Google's Project Management course to understand how companies make decisions and organise themselves around projects and team collaboration. The certificate is the result.",
        disclaimer: "Google® and the Google Project Management Certificate are trademarks of Google LLC. Coursera® is a trademark of Coursera Inc. This page is not commissioned by, affiliated with, or endorsed by Google LLC or Coursera Inc."
      },
      {
        src: "images/instaimg-app.jpg?v=3420fa3d",
        width: 1920,
        height: 1384,
        title: "InstaImg App, Building Personal Tools",
        tagline: "A local photo app for the tedious half of putting images on a website, with nothing sent anywhere.",
        meta: "Desktop app",
        description: "A local photo app I vibe coded to make the boring parts of putting images on a website painless. Drops in any number of photos, converts them to a target aspect ratio or pixel size, auto-generates alt text without any AI APIs, and exports the batch as a .zip."
      },
      {
        src: "images/f1-orthographic.jpg?v=efb607d0",
        width: 1920,
        height: 1359,
        title: "F1 in Schools, Orthographic Drawings",
        tagline: "The orthographic drawings for our F1 in Schools car, as the team's lead engineer.",
        meta: "Drawings",
        description: "F1 in Schools is a competition where teams design, build, and race miniature CNC-machined F1 cars at statewide and nationwide events. I was the lead engineer on our team and also handled the team portfolio and most of the graphic design. The whole build started from this sheet, six orthographic views of the body with full dimensioning, drawn to ISO standard at 1:2 scale.",
        disclaimer: "Formula 1® and F1® are trademarks of Formula One Licensing BV. This work documents my team's participation in F1 in Schools and is not commissioned by, affiliated with, or endorsed by its organisers or Formula One World Championship Limited."
      },
      {
        src: "images/f1-cad-modelling.jpg?v=8b8a9cc1",
        width: 1920,
        height: 1080,
        title: "F1 in Schools, CAD Modelling",
        tagline: "The Fusion 360 model the toolpaths, the simulation, and the finished part all came from.",
        meta: "CAD",
        description: "F1 race-car body modelled in Fusion 360. The digital base for everything that came after: the toolpaths, the simulation, and the finished part.",
        disclaimer: "Formula 1® and F1® are trademarks of Formula One Licensing BV. Fusion 360™ is a trademark of Autodesk Inc. This work documents my team's participation in F1 in Schools and is not commissioned by, affiliated with, or endorsed by its organisers, Formula One World Championship Limited, or Autodesk Inc."
      },
      {
        src: "images/f1-cfd-simulation.jpg?v=8411fe0c",
        width: 1920,
        height: 1034,
        title: "F1 in Schools, Digital Simulation Testing",
        tagline: "Computational fluid dynamics in a virtual wind tunnel, landing at a drag coefficient of about 0.25.",
        meta: "CFD",
        description: "Computational fluid dynamics simulation in a virtual wind tunnel. The body landed at an average drag coefficient of about 0.25, with velocity, surface pressure, and streamlines visualised across the surface.",
        disclaimer: "Formula 1® and F1® are trademarks of Formula One Licensing BV. This work documents my team's participation in F1 in Schools and is not commissioned by, affiliated with, or endorsed by its organisers or Formula One World Championship Limited."
      },
      {
        src: "images/f1-cam-toolpaths.jpg?v=d9e5f483",
        width: 1920,
        height: 893,
        title: "F1 in Schools, CAM Digital Cutting",
        tagline: "CAM toolpaths in Fusion 360, posted as G-code for a 3-axis CNC mill.",
        meta: "CAM",
        description: "CAM toolpath generation in Fusion 360. Adaptive clearing for the rough pass, parallel finishing for the surface pass, posted as G-code for a 3-axis CNC mill.",
        disclaimer: "Formula 1® and F1® are trademarks of Formula One Licensing BV. Fusion 360™ is a trademark of Autodesk Inc. This work documents my team's participation in F1 in Schools and is not commissioned by, affiliated with, or endorsed by its organisers, Formula One World Championship Limited, or Autodesk Inc."
      },
      {
        src: "images/f1-cnc-rough.jpg?v=9e38ae44",
        width: 1920,
        height: 1440,
        title: "F1 in Schools, Physical Manufacturing",
        tagline: "The car body machined out of a balsa block on a 3-axis CNC mill.",
        meta: "Machining",
        description: 'The body machined out of a balsa block on a 3-axis CNC mill. First roughing pass shown here, blank labelled "64.21".',
        disclaimer: "Formula 1® and F1® are trademarks of Formula One Licensing BV. This work documents my team's participation in F1 in Schools and is not commissioned by, affiliated with, or endorsed by its organisers or Formula One World Championship Limited."
      },
      {
        src: "images/f1-hand-finishing.jpg?v=758d0f79",
        width: 1920,
        height: 1440,
        title: "F1 in Schools, Hand Finishing",
        tagline: "Finishing and assembly of the machined car body.",
        meta: "Finishing",
        description: "Hand finishing and assembly. Sanding the machined body smooth, gluing on the cylindrical air-intake, and joining the parts together by hand.",
        disclaimer: "Formula 1® and F1® are trademarks of Formula One Licensing BV. This work documents my team's participation in F1 in Schools and is not commissioned by, affiliated with, or endorsed by its organisers or Formula One World Championship Limited."
      }
    ]
  }
};
const escapeHtml = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const safeUrl = (value) => /^https:\/\//i.test(String(value)) ? String(value) : "";
const CATEGORY_ORDER = ["apps", "websites", "posters", "archive"];
const SOCIAL_LINKS = [
  { name: "Ko-fi", url: "https://ko-fi.com/pohsuchenwork", path: "M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493 1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182 2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195-1.09-2-1.298-4.155-1.298-7.506 0-2.181.857-3.402 3.012-3.714 1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545 1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142 0 1.533.858 2.857 1.949 3.897.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896 1.117-1.039 1.974-2.364 1.974-3.897 0-1.662-1.247-3.142-3.039-3.142-1.065 0-1.792.545-2.338 1.298-.493-.753-1.246-1.298-2.312-1.298" },
  { name: "YouTube", url: "https://www.youtube.com/@pohsuchenwork", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/pohsuchenwork/", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { name: "X", url: "https://x.com/pohsuchenwork", path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
  { name: "Instagram", url: "https://www.instagram.com/pohsuchenwork/", path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.1303-.2954.7733-.4956 1.6463-.552 2.9237-.0564 1.2774-.0689 1.6864-.0626 4.9485.0062 3.2621.0206 3.6695.0825 4.9497.061 1.2766.264 2.1481.5635 2.9105.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1319 1.3787.7723.295 1.6453.4961 2.9229.552 1.2776.056 1.6867.0688 4.9479.0625 3.2611-.0062 3.6701-.0207 4.9501-.0814 1.28-.0607 2.1462-.2652 2.9084-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3782-2.1303.2957-.7724.4966-1.6457.552-2.9225.056-1.2807.0688-1.6892.0626-4.9508-.0063-3.2616-.0207-3.6695-.0814-4.9494-.0607-1.2799-.264-2.1487-.5635-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.065.3214 18.1923.1196 16.9149.0645 15.6375.0093 15.2284-.005 11.9663.0014 8.7042.0076 8.2961.0215 7.0301.0839m.1397 21.6932c-1.1703-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.0577-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.1693.2456-1.806.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9.423-.1645 1.0573-.3611 2.227-.4174 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.227.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9 1.3787.1645.4217.3617 1.0563.4172 2.2262.0602 1.2655.0739 1.6453.0796 4.848.0058 3.2026-.006 3.5834-.0607 4.848-.051 1.1704-.2452 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1644-1.0577.3617-2.2262.4174-1.2656.0596-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4068 2.7707 6.1657 6.1565 6.1591 3.4053-.0066 6.1655-2.7702 6.1592-6.1631-.0064-3.4072-2.7707-6.1655-6.1657-6.1591-3.395.0066-6.1652 2.771-6.1592 6.1631M8 12.0077a4 4 0 1 1 4.008 3.9923A3.9996 3.9996 0 0 1 8 12.0077" },
  { name: "TikTok", url: "https://www.tiktok.com/@pohsuchenwork", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
  { name: "GitHub", url: "https://github.com/pohsuchenwork", path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }
];
function buildSocialIcons() {
  const container = document.querySelector(".colophon__icons");
  if (!container) return;
  container.innerHTML = SOCIAL_LINKS.map((s) => `
    <a class="colophon__icon"
       href="${escapeHtml(safeUrl(s.url))}"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="${escapeHtml(s.name)}"
       data-cursor="link"
       data-magnetic="auto">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${escapeHtml(s.path)}"/>
      </svg>
    </a>
  `).join("");
}
const SUPABASE_URL = "https://ixspocbdfavubolqocma.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Ha90rh4R4XTMlaQnxRe_EA_HUCiSQ1r";
const FORM_LIMITS = { name: 120, email: 254, message: 5e3 };
const EMAIL_SHAPE = /^[^\s@]+@[^\s@.\/?#:]+(\.[^\s@.\/?#:]+)+$/;
const FORM_MIN_MS = 2e3;
const SHA256 = (() => {
  const K = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  const W = new Uint32Array(64);
  const H = new Uint32Array(8);
  let buf = new Uint8Array(128);
  const run = (bytes, len) => {
    const total = len + 9 + 63 >> 6 << 6;
    if (buf.length < total) buf = new Uint8Array(total);
    for (let i = 0; i < len; i++) buf[i] = bytes[i];
    buf.fill(0, len, total);
    buf[len] = 128;
    const bits = len * 8;
    buf[total - 4] = bits >>> 24;
    buf[total - 3] = bits >>> 16 & 255;
    buf[total - 2] = bits >>> 8 & 255;
    buf[total - 1] = bits & 255;
    let h0 = 1779033703, h1 = 3144134277, h2 = 1013904242, h3 = 2773480762;
    let h4 = 1359893119, h5 = 2600822924, h6 = 528734635, h7 = 1541459225;
    for (let off = 0; off < total; off += 64) {
      for (let i = 0; i < 16; i++) {
        const o = off + i * 4;
        W[i] = buf[o] << 24 | buf[o + 1] << 16 | buf[o + 2] << 8 | buf[o + 3];
      }
      for (let i = 16; i < 64; i++) {
        const w15 = W[i - 15], w2 = W[i - 2];
        const s0 = (w15 >>> 7 | w15 << 25) ^ (w15 >>> 18 | w15 << 14) ^ w15 >>> 3;
        const s1 = (w2 >>> 17 | w2 << 15) ^ (w2 >>> 19 | w2 << 13) ^ w2 >>> 10;
        W[i] = W[i - 16] + s0 + W[i - 7] + s1 >>> 0;
      }
      let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
      for (let i = 0; i < 64; i++) {
        const S1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        const t1 = h + S1 + (e & f ^ ~e & g) + K[i] + W[i] >>> 0;
        const S0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
        const t2 = S0 + (a & b ^ a & c ^ b & c) >>> 0;
        h = g;
        g = f;
        f = e;
        e = d + t1 >>> 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 >>> 0;
      }
      h0 = h0 + a >>> 0;
      h1 = h1 + b >>> 0;
      h2 = h2 + c >>> 0;
      h3 = h3 + d >>> 0;
      h4 = h4 + e >>> 0;
      h5 = h5 + f >>> 0;
      h6 = h6 + g >>> 0;
      h7 = h7 + h >>> 0;
    }
    H[0] = h0;
    H[1] = h1;
    H[2] = h2;
    H[3] = h3;
    H[4] = h4;
    H[5] = h5;
    H[6] = h6;
    H[7] = h7;
  };
  const digest = (bytes) => {
    run(bytes, bytes.length);
    const out = new Uint8Array(32);
    for (let i = 0; i < 8; i++) {
      out[i * 4] = H[i] >>> 24;
      out[i * 4 + 1] = H[i] >>> 16 & 255;
      out[i * 4 + 2] = H[i] >>> 8 & 255;
      out[i * 4 + 3] = H[i] & 255;
    }
    return out;
  };
  digest.firstWord = (bytes, len) => {
    run(bytes, len);
    return H[0] >>> 0;
  };
  return digest;
})();
const POW_CHUNK = 2e3;
const yieldToBrowser = () => new Promise((resolve) => {
  const channel = new MessageChannel();
  channel.port1.onmessage = () => resolve();
  channel.port2.postMessage(null);
});
const leadingZeroBits = (bytes) => {
  let n = 0;
  for (const b of bytes) {
    if (b === 0) {
      n += 8;
      continue;
    }
    n += Math.clz32(b) - 24;
    break;
  }
  return n;
};
async function fetchChallenge(kind) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15e3);
  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/submit?challenge=1&kind=${encodeURIComponent(kind)}`, {
      headers: { "apikey": SUPABASE_PUBLISHABLE_KEY },
      signal: controller.signal
    });
    if (!res.ok) {
      const err = new Error(`challenge HTTP ${res.status}`);
      err.status = res.status;
      err.phase = "challenge";
      try {
        const body = await res.json();
        if (body && typeof body.error === "string") err.code = body.error;
      } catch (_) {
      }
      throw err;
    }
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}
async function solvePow(challenge) {
  const prefix = new TextEncoder().encode(challenge.salt + ":");
  const msg = new Uint8Array(prefix.length + 12);
  msg.set(prefix);
  const difficulty = challenge.difficulty | 0;
  const started = performance.now();
  for (let nonce = 0; ; nonce++) {
    let digits = 1;
    for (let t = nonce; t >= 10; t = t / 10 | 0) digits++;
    for (let i = digits - 1, t = nonce; i >= 0; i--, t = t / 10 | 0) msg[prefix.length + i] = 48 + t % 10;
    const len = prefix.length + digits;
    const solved = difficulty <= 32 ? Math.clz32(SHA256.firstWord(msg, len)) >= difficulty : leadingZeroBits(SHA256(msg.subarray(0, len))) >= difficulty;
    if (solved) {
      return { salt: challenge.salt, expires: challenge.expires, sig: challenge.sig, nonce: String(nonce) };
    }
    if (nonce % POW_CHUNK === 0) {
      await yieldToBrowser();
      if (performance.now() - started > 6e4) throw new Error("proof of work timed out");
    }
  }
}
const POW_RETRY_MS = 6e4;
function readyPow(form, kind) {
  const stale = form.__pow && form.__pow.expiresAt && form.__pow.expiresAt - Date.now() < 2e4;
  if (!form.__pow || stale) {
    if (form.__powFailedAt && Date.now() - form.__powFailedAt < POW_RETRY_MS) {
      return Promise.reject(form.__powError || new Error("challenge refused"));
    }
    const entry = { promise: null, expiresAt: 0 };
    entry.promise = fetchChallenge(kind).then((challenge) => {
      const ttl = typeof challenge.ttl === "number" && challenge.ttl > 0 ? challenge.ttl : 5 * 60 * 1e3;
      if (form.__pow === entry) entry.expiresAt = Date.now() + ttl;
      return solvePow(challenge);
    });
    form.__pow = entry;
    entry.promise.then(
      () => {
        form.__powFailedAt = 0;
        form.__powError = null;
      },
      (err) => {
        if (form.__pow !== entry) return;
        form.__pow = null;
        if (err && err.status) {
          form.__powFailedAt = Date.now();
          form.__powError = err;
        }
      }
    );
  }
  return form.__pow.promise;
}
async function submitViaGateway(kind, fields, pow, trapValue) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15e3);
  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/submit`, {
      method: "POST",
      signal: controller.signal,
      headers: { "apikey": SUPABASE_PUBLISHABLE_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ kind, fields, pow, extra_line: trapValue || "" })
    });
    if (res.status === 201) return;
    let code = "";
    try {
      code = (await res.json()).error || "";
    } catch (_) {
    }
    const err = new Error(`HTTP ${res.status}${code ? " " + code : ""}`);
    err.status = res.status;
    err.code = code;
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
const RELOAD_AND_RETRY = "The form sent something the server could not read. Reload the page and try again.";
const MY_FAULT = "That did not send, and it was not anything you typed. Please try later, or email me directly.";
const TOO_MANY_REQUESTS = "This form has taken too many requests from your network recently. Please try later, or email me directly.";
const ANTI_SPAM = "The anti-spam check did not pass. Reload the page and try again, or email me directly.";
const FAILURE_MESSAGES = {
  "email": { text: "That email address does not look right. Check it for a typo.", field: "email" },
  "email-mx": { text: "The domain after the @ does not look like it can receive email. Check it for a typo.", field: "email" },
  "email-disposable": { text: "This form does not accept addresses from disposable mail services. Please use another address, or email me directly.", field: "email" },
  "name": { text: "That name has a character I cannot store. Please remove any unusual symbols, or email me directly.", field: "name" },
  "message": { text: "That message has characters I cannot accept, or it is longer than 5000 characters.", field: "message" },
  "fields": { text: "Something in what you typed was not accepted. Check the form and try again." },
  "too-large": { text: "That is too long to send. Please shorten it and try again." },
  "rate": { text: TOO_MANY_REQUESTS },
  "rate-challenge": { text: TOO_MANY_REQUESTS },
  "flood": { text: "The form has hit its limit. Please try again later, or email me directly." },
  "busy": { text: "The form is busy right now. Please try again later, or email me directly." },
  "pow": { text: ANTI_SPAM },
  "pow-sig": { text: ANTI_SPAM },
  "pow-work": { text: ANTI_SPAM },
  "pow-used": { text: ANTI_SPAM },
  "pow-expired": { text: "The anti-spam check expired while the form was open. Reload the page and try again." },
  "origin": { text: "This form only works from the site itself. Open the site directly and try again." },
  "json": { text: RELOAD_AND_RETRY },
  "kind": { text: RELOAD_AND_RETRY },
  "length": { text: RELOAD_AND_RETRY },
  "length-required": { text: RELOAD_AND_RETRY },
  "method": { text: RELOAD_AND_RETRY },
  "insert": { text: MY_FAULT },
  "internal": { text: MY_FAULT },
  "unavailable": { text: "The form is not responding right now. Please try again later, or email me directly." }
};
function failureMessage(err) {
  if (!err) return { text: MY_FAULT };
  if (err.name === "AbortError") return { text: "That took too long to send. Check your connection and try again, or email me directly." };
  const known = Object.prototype.hasOwnProperty.call(FAILURE_MESSAGES, err.code) ? FAILURE_MESSAGES[err.code] : null;
  if (known) return known;
  if (err.phase === "challenge" && err.status !== 429) return { text: MY_FAULT };
  if (err.status === 403) return { text: ANTI_SPAM };
  if (err.status === 429) return { text: TOO_MANY_REQUESTS };
  if (err.status === 413) return { text: "That is too long to send. Please shorten it and try again.", field: "message" };
  if (err.status >= 500) return { text: MY_FAULT };
  if (err.status >= 400) return { text: "Something in what you typed was not accepted. Check the form and try again." };
  return { text: "That did not send, and the connection may have dropped. Please try again, or email me directly." };
}
function wireSupabaseForm(form, { kind, collect, doneText }) {
  if (form.dataset.wired) return;
  form.dataset.wired = kind;
  const status = form.querySelector("[data-form-status]");
  const button = form.querySelector('button[type="submit"]');
  const trap = form.querySelector("[data-honeypot]");
  if (!status.id) status.id = `${kind}-status`;
  let firstFocusAt = 0;
  const setStatus = (text, tone) => {
    status.setAttribute("role", tone === "error" ? "alert" : "status");
    status.setAttribute("aria-live", tone === "error" ? "assertive" : "polite");
    status.textContent = joinLastWords(text);
    status.classList.toggle("is-error", tone === "error");
    status.classList.toggle("is-visible", Boolean(text));
  };
  const clearFieldErrors = () => {
    form.querySelectorAll("[aria-invalid]").forEach((el) => {
      el.removeAttribute("aria-invalid");
      if (el.dataset.describedBy0) el.setAttribute("aria-describedby", el.dataset.describedBy0);
      else el.removeAttribute("aria-describedby");
    });
  };
  const markFieldError = (name) => {
    const el = name && form.elements.namedItem(name);
    if (!el || typeof el.focus !== "function") return;
    if (el.dataset.describedBy0 === void 0) el.dataset.describedBy0 = el.getAttribute("aria-describedby") || "";
    el.setAttribute("aria-invalid", "true");
    el.setAttribute("aria-describedby", `${el.dataset.describedBy0} ${status.id}`.trim());
    el.focus();
  };
  form.addEventListener("focusin", () => {
    if (!firstFocusAt) firstFocusAt = performance.now();
    readyPow(form, kind).catch(() => {
    });
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.dataset.state === "sending") return;
    if (trap && trap.value) {
      setStatus("That did not go through: your browser filled in a hidden field. Reload the page and type your details without autofill, or email me directly at pohsuchenwork@gmail.com.", "error");
      return;
    }
    clearFieldErrors();
    const { row, problem, field } = collect(form);
    if (problem) {
      setStatus(problem, "error");
      markFieldError(field);
      status.scrollIntoView({ block: "nearest" });
      return;
    }
    form.dataset.state = "sending";
    button.disabled = true;
    setStatus("Checking…", "ok");
    const sinceFocus = firstFocusAt ? performance.now() - firstFocusAt : 0;
    if (sinceFocus < FORM_MIN_MS) await wait(FORM_MIN_MS - sinceFocus);
    try {
      let pow = await readyPow(form, kind);
      setStatus("Sending…", "ok");
      try {
        await submitViaGateway(kind, row, pow, trap && trap.value);
      } catch (err) {
        if (err.status === 403 && String(err.code).startsWith("pow")) {
          form.__pow = null;
          pow = await readyPow(form, kind);
          await submitViaGateway(kind, row, pow, trap && trap.value);
        } else {
          throw err;
        }
      }
      form.__pow = null;
      setStatus(doneText, "ok");
      form.reset();
    } catch (err) {
      const symptom = err.name === "AbortError" ? "timed out" : err.message || "unknown error";
      console.error(`[${kind}] gateway submit failed, the form shows a retry message. ${symptom}. Fields sent: ${Object.keys(row).join(", ")}`, err);
      form.__pow = null;
      const { text, field: field2 } = failureMessage(err);
      setStatus(text, "error");
      if (field2) markFieldError(field2);
      status.scrollIntoView({ block: "nearest" });
    } finally {
      form.dataset.state = "";
      button.disabled = false;
      if (document.activeElement === document.body) button.focus({ preventScroll: true });
    }
  });
}
function collectContact(form) {
  const field = (n) => form.elements.namedItem(n).value.trim();
  const name = field("name"), email = field("email"), message = field("message");
  if (!name) return { problem: "Add your name so I know who is writing.", field: "name" };
  if (name.length > FORM_LIMITS.name) return { problem: `Name is too long (${FORM_LIMITS.name} characters max).`, field: "name" };
  if (!EMAIL_SHAPE.test(email) || email.length > FORM_LIMITS.email) return { problem: "That email address does not look right.", field: "email" };
  if (!message) return { problem: "Write a message first.", field: "message" };
  if (message.length > FORM_LIMITS.message) return { problem: `Message is too long (${FORM_LIMITS.message} characters max).`, field: "message" };
  return { row: { name, email, message, page: location.pathname.slice(0, 200) } };
}
function collectSignup(form) {
  const field = (n) => form.elements.namedItem(n).value.trim();
  const name = field("name");
  const email = field("email").toLowerCase();
  if (!name) return { problem: "Add your name so I know who is signing up.", field: "name" };
  if (name.length > FORM_LIMITS.name) return { problem: `Name is too long (${FORM_LIMITS.name} characters max).`, field: "name" };
  if (!EMAIL_SHAPE.test(email) || email.length > FORM_LIMITS.email) return { problem: "That email address does not look right.", field: "email" };
  return { row: { name, email, source: location.pathname.slice(0, 200) } };
}
function buildContactForm() {
  const section = document.getElementById("contact");
  if (!section) return;
  if (!section.querySelector("form.contact__form")) {
    section.setAttribute("aria-labelledby", "contact-heading");
    section.innerHTML = `
    <div class="contact__inner">
      <p class="caption caption--light contact__caption" data-split data-magnetic="auto">Contact</p>
      <h2 id="contact-heading" class="contact__title" data-split data-magnetic="auto">Get in touch.</h2>
      <p class="contact__note" data-split data-magnetic="auto">Commissions, collaboration, or just a question. Write here, or email me directly.</p>
      <p class="caption caption--light contact__hint" id="contact-hint" data-magnetic="auto">All fields required. <a href="/about#privacy" data-magnetic="auto">Privacy</a>.</p>
      <p class="caption caption--light contact__nojs">The form needs JavaScript; the email address in the footer works without it.</p>
      <form class="contact__form" novalidate aria-labelledby="contact-heading">
        <div class="contact__field">
          <label class="contact__label" data-magnetic="auto" for="contact-name">Name</label>
          <input class="contact__input" id="contact-name" name="name" type="text" autocomplete="name" maxlength="120" required aria-describedby="contact-hint" data-cursor="link" data-magnetic="auto" />
        </div>
        <div class="contact__field">
          <label class="contact__label" data-magnetic="auto" for="contact-email">Email</label>
          <input class="contact__input" id="contact-email" name="email" type="email" autocomplete="email" maxlength="254" required aria-describedby="contact-hint" data-cursor="link" data-magnetic="auto" />
        </div>
        <div class="contact__field contact__field--wide">
          <label class="contact__label" data-magnetic="auto" for="contact-message">Message</label>
          <textarea class="contact__input contact__input--area" id="contact-message" name="message" rows="5" maxlength="5000" required aria-describedby="contact-hint" data-cursor="link" data-magnetic="auto"></textarea>
        </div>
        <div class="form__trap" aria-hidden="true">
          <label for="contact-extra-line">Extra line</label>
          <input id="contact-extra-line" name="extra_line" type="text" tabindex="-1" autocomplete="off" data-honeypot />
        </div>
        <div class="contact__actions">
          <button class="contact__submit" type="submit" data-magnetic="auto">Send message</button>
          <p class="form__status contact__status" role="status" aria-live="polite" data-form-status data-magnetic="auto"></p>
        </div>
      </form>
    </div>`;
  }
  wireSupabaseForm(section.querySelector("form"), {
    kind: "contact",
    collect: collectContact,
    doneText: "Sent. Thank you."
  });
}
function buildNewsletterForm() {
  const host = document.querySelector(".colophon__newsletter");
  if (!host) return;
  if (!host.querySelector("form.newsletter")) {
    host.innerHTML = `
    <form class="newsletter" novalidate aria-label="Join the list">
      <label class="visually-hidden" for="newsletter-name">Name</label>
      <label class="visually-hidden" for="newsletter-email">Email address</label>
      <p class="newsletter__label" id="newsletter-note" data-magnetic="auto">New work, the course, and occasional updates. <a href="/about#privacy" data-magnetic="auto">Privacy</a>.</p>
      <div class="newsletter__row">
        <input class="newsletter__input" id="newsletter-name" name="name" type="text" autocomplete="name" maxlength="120" placeholder="Your name" required aria-describedby="newsletter-note" data-cursor="link" data-magnetic="auto" />
        <input class="newsletter__input" id="newsletter-email" name="email" type="email" autocomplete="email" maxlength="254" placeholder="you@example.com" required aria-describedby="newsletter-note" data-cursor="link" data-magnetic="auto" />
        <button class="newsletter__submit" type="submit" data-magnetic="auto">Join</button>
      </div>
      <div class="form__trap" aria-hidden="true">
        <label for="newsletter-extra-line">Extra line</label>
        <input id="newsletter-extra-line" name="extra_line" type="text" tabindex="-1" autocomplete="off" data-honeypot />
      </div>
      <p class="form__status newsletter__status" role="status" aria-live="polite" data-form-status data-magnetic="auto"></p>
    </form>`;
  }
  wireSupabaseForm(host.querySelector("form"), {
    kind: "signup",
    collect: collectSignup,
    doneText: "You are on the list."
  });
}
function buildCourseForm() {
  const section = document.querySelector(".course__enrol");
  if (!section) return;
  if (!section.querySelector("form.course__form")) {
    section.innerHTML = `
      <p class="caption caption--light contact__nojs">The form needs JavaScript; the email address in the footer works without it.</p>
      <form class="contact__form course__form" novalidate aria-label="Enrol: join the list">
        <div class="contact__field">
          <label class="contact__label" data-magnetic="auto" for="course-name">Name</label>
          <input class="contact__input" id="course-name" name="name" type="text" autocomplete="name" maxlength="120" required aria-describedby="course-note" data-cursor="link" data-magnetic="auto" />
        </div>
        <div class="contact__field">
          <label class="contact__label" data-magnetic="auto" for="course-email">Email</label>
          <input class="contact__input" id="course-email" name="email" type="email" autocomplete="email" maxlength="254" required aria-describedby="course-note" data-cursor="link" data-magnetic="auto" />
        </div>
        <div class="form__trap" aria-hidden="true">
          <label for="course-extra-line">Extra line</label>
          <input id="course-extra-line" name="extra_line" type="text" tabindex="-1" autocomplete="off" data-honeypot />
        </div>
        <div class="contact__actions">
          <button class="contact__submit" type="submit" data-magnetic="auto">Enrol</button>
          <p class="form__status contact__status" id="course-status" role="status" aria-live="polite" data-form-status data-magnetic="auto"></p>
        </div>
      </form>
      <p class="course__note" id="course-note" data-magnetic="auto">The course, new work, and occasional updates. <a href="/about#privacy" data-magnetic="auto">Privacy</a>.</p>
    `;
  }
  wireSupabaseForm(section.querySelector("form"), {
    kind: "signup",
    collect: collectSignup,
    doneText: "You are on the list."
  });
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const prefersReducedMotion = false;
const lowMemory = false;
const slowNetwork = false;
const isLowEndDevice = false;
const skipHeavyEffects = prefersReducedMotion || isLowEndDevice;
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);
let restoreScrollY = 0;
try {
  const navEntry = performance.getEntriesByType("navigation")[0];
  const scrollKey = "pf-scroll:" + location.pathname;
  if (navEntry && navEntry.type === "back_forward") restoreScrollY = Number(sessionStorage.getItem(scrollKey) || 0);
  window.addEventListener("pagehide", () => {
    try {
      sessionStorage.setItem(scrollKey, String(window.scrollY));
    } catch (_) {
    }
  });
} catch (_) {
  restoreScrollY = 0;
}
function enforceMobileWidthLock() {
  const mode = window.innerWidth <= 899 ? "lock" : "free";
  if (enforceMobileWidthLock.mode === mode) return;
  enforceMobileWidthLock.mode = mode;
  const html = document.documentElement;
  const body = document.body;
  const main = document.querySelector("main");
  if (window.innerWidth <= 899) {
    html.style.setProperty("width", "100%", "important");
    html.style.setProperty("max-width", "100%", "important");
    html.style.setProperty("overflow-x", "clip", "important");
    html.style.setProperty("position", "relative", "important");
    body.style.setProperty("width", "100%", "important");
    body.style.setProperty("max-width", "100%", "important");
    body.style.setProperty("margin", "0", "important");
    body.style.setProperty("overflow-x", "clip", "important");
    body.style.setProperty("position", "relative", "important");
    if (main) {
      main.style.setProperty("width", "100%", "important");
      main.style.setProperty("max-width", "100%", "important");
      main.style.setProperty("overflow-x", "clip", "important");
      main.style.setProperty("position", "relative", "important");
    }
  } else {
    html.style.removeProperty("width");
    html.style.removeProperty("max-width");
    html.style.removeProperty("overflow-x");
    html.style.removeProperty("position");
    body.style.removeProperty("width");
    body.style.removeProperty("max-width");
    body.style.removeProperty("margin");
    body.style.removeProperty("overflow-x");
    body.style.removeProperty("position");
    if (main) {
      main.style.removeProperty("width");
      main.style.removeProperty("max-width");
      main.style.removeProperty("overflow-x");
      main.style.removeProperty("position");
    }
  }
}
enforceMobileWidthLock();
window.addEventListener("load", enforceMobileWidthLock);
window.addEventListener("resize", enforceMobileWidthLock);
window.addEventListener("orientationchange", enforceMobileWidthLock);
if (typeof ResizeObserver === "function") {
  const ro = new ResizeObserver(enforceMobileWidthLock);
  requestAnimationFrame(() => {
    if (document.body) ro.observe(document.body);
  });
}
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(enforceMobileWidthLock);
}
const isSnapshotMode = /[?&]screenshot=1\b/.test(window.location.search);
if (isSnapshotMode) {
  document.documentElement.classList.add("is-loaded", "is-snapshot");
}
const lockScroll = () => document.documentElement.classList.add("is-locked");
const unlockScroll = () => document.documentElement.classList.remove("is-locked");
if (!isSnapshotMode) lockScroll();
const SHAPE_DEFS = [
  { x: 10, y: 10, size: 300, kind: "circle", color: "red", parallax: 0.32 },
  { x: 75, y: 22, size: 280, kind: "square", color: "gray", parallax: 0.5 },
  { x: 38, y: 50, size: 320, kind: "circle", color: "rose", parallax: 0.4 },
  { x: 84, y: 70, size: 260, kind: "circle", color: "red", parallax: 0.36 },
  { x: 6, y: 92, size: 300, kind: "square", color: "gray", parallax: 0.45 },
  { x: 56, y: 112, size: 280, kind: "circle", color: "rose", parallax: 0.34 },
  { x: 80, y: 140, size: 320, kind: "square", color: "red", parallax: 0.55 },
  { x: 44, y: 148, size: 340, kind: "circle", color: "red", parallax: 0.43 },
  { x: 22, y: 168, size: 280, kind: "circle", color: "rose", parallax: 0.38 },
  { x: 66, y: 190, size: 260, kind: "circle", color: "gray", parallax: 0.42 },
  { x: 8, y: 218, size: 320, kind: "square", color: "red", parallax: 0.48 },
  { x: 46, y: 244, size: 300, kind: "circle", color: "rose", parallax: 0.41 },
  { x: 78, y: 268, size: 280, kind: "circle", color: "gray", parallax: 0.53 }
];
const parallaxLayers = [];
function createBackground() {
  const bg = document.createElement("div");
  bg.className = "bg";
  bg.setAttribute("aria-hidden", "true");
  const shapesEl = document.createElement("div");
  shapesEl.className = "bg__shapes";
  SHAPE_DEFS.forEach((s) => {
    const layer = document.createElement("div");
    layer.className = "bg__layer";
    layer.style.setProperty("--x", s.x + "%");
    layer.style.setProperty("--y", s.y + "vh");
    layer.style.setProperty("--size", s.size + "px");
    layer.dataset.parallax = s.parallax;
    const shape = document.createElement("div");
    shape.className = `bg__shape bg__shape--${s.kind} bg__shape--${s.color}`;
    shape.dataset.magnetic = "auto";
    layer.appendChild(shape);
    shapesEl.appendChild(layer);
    parallaxLayers.push({
      el: layer,
      factor: s.parallax,
      currentY: 0
    });
  });
  bg.appendChild(shapesEl);
  const glass = document.createElement("div");
  glass.className = "bg__glass";
  glass.setAttribute("aria-hidden", "true");
  bg.appendChild(glass);
  document.body.insertBefore(bg, document.body.firstChild);
}
let parallaxRAF = null;
let parallaxDirty = false;
function parallaxTick() {
  parallaxDirty = false;
  try {
    const scrollY = window.scrollY;
    let moving = false;
    for (const layer of parallaxLayers) {
      const target = -scrollY * layer.factor;
      const next = layer.currentY + (target - layer.currentY) * 0.15;
      if (Math.abs(target - next) > 0.05) moving = true;
      layer.currentY = next;
      layer.el.style.transform = `translateY(${next.toFixed(2)}px)`;
    }
    parallaxRAF = moving || parallaxDirty ? requestAnimationFrame(parallaxTick) : null;
  } catch (e) {
    parallaxRAF = null;
  }
}
function wakeParallax() {
  if (skipHeavyEffects) return;
  parallaxDirty = true;
  if (parallaxRAF == null) parallaxRAF = requestAnimationFrame(parallaxTick);
}
const NBSP = " ";
const SHORT_PAIR = 30;
const DISPLAY_PAIR = 12;
const joinLastWords = (s, limit = SHORT_PAIR) => s.replace(/(\S+)[ \t\r\n]+(\S+)([ \t\r\n]*)$/, (m, a, b, t) => a.length + b.length + 1 > limit ? m : a + NBSP + b + t);
function keepLastWords(el, limit = SHORT_PAIR) {
  const nodes = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) if (/[\p{L}\p{N}]/u.test(n.textContent)) nodes.push(n);
  if (!nodes.length) return;
  const last = nodes[nodes.length - 1];
  const words = last.textContent.match(/\S+/g);
  if (words.length >= 2) {
    last.textContent = joinLastWords(last.textContent, limit);
    return;
  }
  const prev = nodes[nodes.length - 2];
  if (!prev) return;
  const before = prev.textContent.match(/\S+/g);
  const a = before[before.length - 1], b = words[0];
  if (a.length + b.length + 1 > limit) return;
  if (!/[ \t\r\n]$/.test(prev.textContent) && !/^[ \t\r\n]/.test(last.textContent)) return;
  prev.textContent = prev.textContent.replace(/[ \t\r\n]+$/, "") + NBSP;
  last.textContent = last.textContent.replace(/^[ \t\r\n]+/, "");
}
function splitIntoWords(rootEl) {
  const items = [];
  function walk(node, italic) {
    if (node.nodeType === 3) {
      const parts = node.textContent.split(/([ \t\r\n\f]+)/);
      parts.forEach((p) => {
        if (!p.length) return;
        items.push({ text: p, italic, isSpace: /^[ \t\r\n\f]+$/.test(p) });
      });
    } else if (node.nodeType === 1) {
      const it = italic || node.tagName === "EM";
      [...node.childNodes].forEach((child) => walk(child, it));
    }
  }
  [...rootEl.childNodes].forEach((child) => walk(child, false));
  const merged = [];
  const punct = /^[,.;:!?’'’‘]+$/;
  items.forEach((item) => {
    const last = merged[merged.length - 1];
    if (!item.isSpace && last && !last.isSpace && punct.test(item.text)) {
      last.text += item.text;
    } else {
      merged.push(item);
    }
  });
  rootEl.innerHTML = "";
  const outers = [];
  let i = 0;
  merged.forEach((item) => {
    if (item.isSpace) {
      rootEl.appendChild(document.createTextNode(item.text));
      return;
    }
    const outer = document.createElement("span");
    outer.className = "word";
    const inner = document.createElement("span");
    inner.className = "word__inner";
    inner.style.setProperty("--i", i++);
    inner.textContent = item.text;
    if (item.italic) {
      const em = document.createElement("em");
      em.style.fontStyle = "inherit";
      em.appendChild(inner.cloneNode(true));
      outer.appendChild(em);
    } else {
      outer.appendChild(inner);
    }
    rootEl.appendChild(outer);
    outers.push(outer);
  });
  return outers;
}
const wordObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const inner = entry.target.querySelector(".word__inner");
      if (inner) inner.classList.add("is-revealed");
      wordObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
const workObserver = new IntersectionObserver((entries) => {
  let batchIndex = 0;
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.style.transitionDelay = batchIndex * 60 + "ms";
    entry.target.classList.add("is-revealed");
    workObserver.unobserve(entry.target);
    batchIndex++;
  });
}, { threshold: 0, rootMargin: "0px 0px 800px 0px" });
const prefersReducedData = matchMedia("(prefers-reduced-data: reduce)").matches;
const preloadObserver = prefersReducedData ? null : new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const img = entry.target.querySelector("img");
    if (img && img.loading === "lazy") {
      img.loading = "eager";
      if ("fetchPriority" in img) img.fetchPriority = "high";
    }
    obs.unobserve(entry.target);
  });
}, { threshold: 0, rootMargin: "400px 0px 600px 0px" });
const MAGNETIC = {
  decay: 360,
  lerp: 0.3,
  maxDrag: 125,
  curve: { K1: 0.08, K2: 0.02, MIN: 0.016, MAX: 0.05 },
  tiltDecay: 260,
  maxTilt: 12
};
function computeAutoStrength(rect) {
  const size = Math.max(1, Math.sqrt(rect.width * rect.height));
  const { K1, K2, MIN, MAX } = MAGNETIC.curve;
  return Math.max(MIN, Math.min(MAX, K1 - K2 * Math.log10(size)));
}
const magneticItems = [];
let mouseX = -9999;
let mouseY = -9999;
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorX = e.clientX;
  cursorY = e.clientY;
  wakeMagnetic();
});
document.addEventListener("mouseleave", () => {
  mouseX = -9999;
  mouseY = -9999;
  wakeMagnetic();
});
let pointerSeen = false;
let cursorReady = false;
let cursorBroken = false;
const firstPointerEvent = "PointerEvent" in window ? "pointermove" : "mousemove";
window.addEventListener(firstPointerEvent, function onFirstPointer(e) {
  if (e.pointerType) {
    if (e.pointerType !== "mouse") return;
  } else if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
  pointerSeen = true;
  if (!cursorBroken) document.documentElement.classList.add("cursor-on");
  window.removeEventListener(firstPointerEvent, onFirstPointer);
  wakeMagnetic();
});
const magneticVisibility = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  for (const en of entries) {
    const item = magneticItems.find((it) => it.el === en.target);
    if (item) item.visible = en.isIntersecting;
  }
}, { rootMargin: "120px 0px" }) : null;
function registerMagnetic(el) {
  if (prefersReducedMotion) return;
  if (el.dataset.magneticBound) return;
  el.dataset.magneticBound = "y";
  if (magneticVisibility) magneticVisibility.observe(el);
  magneticItems.push({
    el,
    visible: !magneticVisibility,
    isAuto: el.dataset.magnetic === "auto" || el.dataset.magnetic === "",
    fixed: parseFloat(el.dataset.magnetic) || null,
    currentX: 0,
    currentY: 0,
    currentRX: 0,
    currentRY: 0
  });
}
function pruneDeadMagnetic() {
  for (let i = magneticItems.length - 1; i >= 0; i--) {
    if (!document.contains(magneticItems[i].el)) {
      if (magneticVisibility) magneticVisibility.unobserve(magneticItems[i].el);
      magneticItems.splice(i, 1);
    }
  }
}
let magneticRAF = null;
let magneticDirty = false;
function wakeMagnetic() {
  if (skipHeavyEffects || !pointerSeen) return;
  magneticDirty = true;
  if (magneticRAF == null) magneticRAF = requestAnimationFrame(magneticTick);
}
function magneticTick() {
  magneticDirty = false;
  try {
    for (const item of magneticItems) {
      item._rect = item.visible ? item.el.getBoundingClientRect() : null;
    }
    let active = false;
    for (const item of magneticItems) {
      const rect = item._rect;
      item._rect = null;
      if (!rect) continue;
      const cx = rect.left + rect.width / 2 - item.currentX;
      const cy = rect.top + rect.height / 2 - item.currentY;
      const dx = mouseX - cx;
      const dy = mouseY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let targetX, targetY;
      if (dist < 0.5) {
        targetX = 0;
        targetY = 0;
      } else {
        const baseStrength = item.isAuto ? computeAutoStrength(rect) : item.fixed != null ? item.fixed : 0.04;
        const pullAmount = baseStrength * Math.exp(-dist / MAGNETIC.decay) * MAGNETIC.maxDrag;
        const dirX = dx / dist;
        const dirY = dy / dist;
        targetX = dirX * pullAmount;
        targetY = dirY * pullAmount;
      }
      let targetRX = 0, targetRY = 0;
      if (rect.width > 40 && rect.height > 20) {
        const tiltProx = Math.exp(-dist / MAGNETIC.tiltDecay);
        const halfW = Math.max(40, rect.width / 2);
        const halfH = Math.max(40, rect.height / 2);
        const nx = Math.max(-1, Math.min(1, dx / halfW));
        const ny = Math.max(-1, Math.min(1, dy / halfH));
        targetRY = nx * MAGNETIC.maxTilt * tiltProx;
        targetRX = -ny * MAGNETIC.maxTilt * tiltProx;
      }
      const converged = Math.abs(targetX - item.currentX) < 0.03 && Math.abs(targetY - item.currentY) < 0.03 && Math.abs(targetRX - item.currentRX) < 0.02 && Math.abs(targetRY - item.currentRY) < 0.02;
      if (!converged) active = true;
      item.currentX += (targetX - item.currentX) * MAGNETIC.lerp;
      item.currentY += (targetY - item.currentY) * MAGNETIC.lerp;
      item.currentRX += (targetRX - item.currentRX) * MAGNETIC.lerp;
      item.currentRY += (targetRY - item.currentRY) * MAGNETIC.lerp;
      const idle = Math.abs(item.currentX) < 0.05 && Math.abs(item.currentY) < 0.05 && Math.abs(item.currentRX) < 0.02 && Math.abs(item.currentRY) < 0.02;
      if (idle) {
        if (item.el.style.transform) item.el.style.transform = "";
        item.currentX = 0;
        item.currentY = 0;
        item.currentRX = 0;
        item.currentRY = 0;
      } else {
        const tx = item.currentX.toFixed(2);
        const ty = item.currentY.toFixed(2);
        const rx = item.currentRX.toFixed(3);
        const ry = item.currentRY.toFixed(3);
        item.el.style.transform = `perspective(1200px) translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
    }
    magneticRAF = active || magneticDirty ? requestAnimationFrame(magneticTick) : null;
  } catch (e) {
    magneticRAF = null;
  }
}
const $picker = document.querySelector(".picker");
const $worksGrid = document.querySelector(".works__grid");
const $worksTitle = document.querySelector(".works__title");
const $worksCount = document.querySelector(".works__count");
let currentCategory = "apps";
let isAnimating = false;
let pendingTabKey = null;
let pendingFromKeys = false;
function buildPicker() {
  CATEGORY_ORDER.forEach((key, i) => {
    const cat = PORTFOLIO[key];
    const button = document.createElement("button");
    button.className = "picker__item";
    button.dataset.category = key;
    button.dataset.cursor = "media";
    button.dataset.magnetic = "auto";
    button.style.setProperty("--i", i);
    button.setAttribute("role", "tab");
    button.id = `tab-${key}`;
    button.setAttribute("aria-controls", "works-panel");
    button.setAttribute("aria-selected", key === currentCategory ? "true" : "false");
    button.tabIndex = key === currentCategory ? 0 : -1;
    const isLocalCover = /^\/?images\//.test(cat.cover);
    const webpCover = isLocalCover ? cat.cover.replace(/\.(jpe?g|png)(\?[^"]*)?$/i, ".webp$2") : null;
    const cw = 480;
    const ch = 600;
    const coverImg = webpCover ? `<picture>
           <source srcset="${escapeHtml(webpCover)}" type="image/webp">
           <img src="${escapeHtml(cat.cover)}" alt=""
                loading="lazy" decoding="async"
                width="${cw}" height="${ch}" />
         </picture>` : `<img src="${escapeHtml(cat.cover)}" alt=""
              loading="lazy" decoding="async"
              ${cw ? `width="${cw}"` : ""} ${ch ? `height="${ch}"` : ""} />`;
    button.innerHTML = `
      <div class="picker__media">
        ${coverImg}
      </div>
      <div class="picker__foot">
        <span class="picker__name">${escapeHtml(cat.label)}</span>
        <span class="picker__count">${cat.works.length} works</span>
      </div>
    `;
    bindImageLoad(button.querySelector("img"));
    if (preloadObserver) preloadObserver.observe(button);
    button.addEventListener("click", () => {
      if (isAnimating) {
        pendingTabKey = key;
        pendingFromKeys = false;
        return;
      }
      selectCategory(key);
    });
    button.classList.add("is-in");
    $picker.appendChild(button);
  });
  $picker.addEventListener("keydown", (e) => {
    const tabs = [...$picker.querySelectorAll(".picker__item")];
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    let j = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") j = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") j = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") j = 0;
    else if (e.key === "End") j = tabs.length - 1;
    if (j < 0) return;
    e.preventDefault();
    tabs.forEach((t) => {
      t.tabIndex = t === tabs[j] ? 0 : -1;
    });
    tabs[j].focus();
    if (isAnimating) {
      pendingTabKey = tabs[j].dataset.category;
      pendingFromKeys = true;
      return;
    }
    selectCategory(tabs[j].dataset.category, { fromKeys: true });
  });
  updateActive();
}
function updateActive() {
  document.querySelectorAll(".picker__item").forEach((el) => {
    const isActive = el.dataset.category === currentCategory;
    el.classList.toggle("is-active", isActive);
    el.setAttribute("aria-selected", isActive ? "true" : "false");
    el.tabIndex = isActive ? 0 : -1;
  });
  const panel = document.getElementById("works-panel");
  if (panel) panel.setAttribute("aria-labelledby", `tab-${currentCategory}`);
}
function buildWorks(works) {
  $worksGrid.querySelectorAll(".work").forEach((old) => {
    workObserver.unobserve(old);
    if (preloadObserver) preloadObserver.unobserve(old);
  });
  $worksGrid.innerHTML = "";
  pruneDeadMagnetic();
  works.forEach((work, i) => {
    const num = String(i + 1).padStart(2, "0");
    const article = document.createElement("article");
    article.className = "work";
    article.dataset.cursor = "media";
    article.dataset.magnetic = "auto";
    const w = work.width || "";
    const h = work.height || "";
    if (work.description) article.dataset.workDescription = work.description;
    if (work.disclaimer) article.dataset.workDisclaimer = work.disclaimer;
    if (work.videoUrl) article.dataset.workVideoUrl = work.videoUrl;
    if (work.externalUrl) article.dataset.workExternalUrl = work.externalUrl;
    if (work.links) article.dataset.workLinks = JSON.stringify(work.links);
    article.dataset.workTitle = work.title;
    const metaText = work.meta;
    const isVideo = !!work.videoUrl;
    const isLink = !!work.externalUrl && !isVideo;
    const playSvg = `
      <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <circle cx="32" cy="32" r="30"/>
        <polygon points="26,18 26,46 48,32"/>
      </svg>
    `;
    const linkSvg = `
      <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <circle cx="32" cy="32" r="30"/>
        <path d="M24 24h16v16M24 40 40 24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>
    `;
    let mediaModifier = "";
    let overlayHtml = "";
    if (isVideo) {
      mediaModifier = " work__media--video";
      overlayHtml = `<div class="work__play" aria-hidden="true">${playSvg}</div>`;
    } else if (isLink) {
      mediaModifier = " work__media--link";
      overlayHtml = `<div class="work__play work__play--link" aria-hidden="true">${linkSvg}</div>`;
    }
    const isLocal = /^\/?images\//.test(work.src);
    const webpSrc = isLocal ? work.src.replace(/\.(jpe?g|png)(\?[^"]*)?$/i, ".webp$2") : null;
    const variant = (px) => work.src.replace(/\.(jpe?g|png)(\?[^"]*)?$/i, `-${px}.webp$2`);
    const webpSet = isLocal ? `${variant(600)} 600w, ${variant(900)} 900w, ${webpSrc} ${w || 1200}w` : null;
    const sizesAttr = 'sizes="(max-width: 760px) 92vw, (max-width: 1760px) 45vw, 808px"';
    const altText = escapeHtml(work.alt || work.title);
    const dimAttrs = `${w ? `width="${w}"` : ""} ${h ? `height="${h}"` : ""}`;
    const imgHtml = webpSrc ? `<picture>
           <source srcset="${escapeHtml(webpSet)}" ${sizesAttr} type="image/webp">
           <img src="${escapeHtml(work.src)}" alt="${altText}"
                loading="lazy" decoding="async" ${dimAttrs} />
         </picture>` : `<img src="${escapeHtml(work.src)}" alt="${altText}"
              loading="lazy" decoding="async" ${dimAttrs} />`;
    const taglineHtml = work.tagline ? `<div class="work__tagline">${escapeHtml(work.tagline)}</div>` : "";
    const mediaAria = `aria-label="Open ${altText} in detail view"`;
    article.innerHTML = `
      <div class="work__media${mediaModifier}" role="button" tabindex="0" ${mediaAria}>
        ${imgHtml}
        ${overlayHtml}
      </div>
      <div class="work__caption">
        <div class="work__num"><span aria-hidden="true">N&deg; </span>${num}</div>
        <div class="work__title">${escapeHtml(work.title)}</div>
        <div class="work__meta">${escapeHtml(metaText)}</div>
        ${taglineHtml}
      </div>
    `;
    bindImageLoad(article.querySelector("img"));
    workObserver.observe(article);
    if (preloadObserver) preloadObserver.observe(article);
    $worksGrid.appendChild(article);
    article.querySelectorAll(".work__title, .work__tagline").forEach((el) => keepLastWords(el));
    registerMagnetic(article);
  });
}
function bindImageLoad(imgEl) {
  const media = imgEl.closest(".work__media, .picker__media");
  if (media) media.setAttribute("aria-busy", "true");
  const markReady = () => {
    imgEl.classList.add("is-loaded");
    if (media) {
      media.classList.add("is-ready");
      media.removeAttribute("aria-busy");
    }
  };
  if (imgEl.complete && imgEl.naturalWidth > 0) {
    markReady();
  } else {
    imgEl.addEventListener("load", markReady);
    imgEl.addEventListener("error", () => {
      imgEl.style.visibility = "hidden";
      imgEl.dataset.failed = "y";
      if (media) {
        media.classList.add("is-ready");
        media.classList.add("is-failed");
        media.removeAttribute("aria-busy");
      }
    });
  }
}
function updateWorksHead(key) {
  const cat = PORTFOLIO[key];
  if ($worksGrid) $worksGrid.dataset.cat = key;
  $worksTitle.textContent = cat.label;
  $worksCount.textContent = cat.works.length;
  const status = document.querySelector(".works__status");
  if (status && document.documentElement.classList.contains("js-ready")) status.textContent = `${cat.label}, ${cat.works.length} works`;
}
async function selectCategory(key, { fromKeys = false } = {}) {
  if (key === currentCategory || isAnimating) return;
  isAnimating = true;
  $worksGrid.classList.add("is-fading");
  await wait(320);
  currentCategory = key;
  updateActive();
  updateWorksHead(key);
  buildWorks(PORTFOLIO[key].works);
  void $worksGrid.offsetHeight;
  await wait(40);
  $worksGrid.classList.remove("is-fading");
  isAnimating = false;
  const works = document.querySelector(".works");
  const rect = works.getBoundingClientRect();
  if (!fromKeys && rect.top > window.innerHeight * 0.4) {
    works.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (pendingTabKey) {
    const next = pendingTabKey;
    const nextFromKeys = pendingFromKeys;
    pendingTabKey = null;
    pendingFromKeys = false;
    if (next !== currentCategory) {
      const tab = document.getElementById(`tab-${next}`);
      if (tab) {
        tab.parentElement.querySelectorAll(".picker__item").forEach((t) => {
          t.tabIndex = t === tab ? 0 : -1;
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });
        if (document.activeElement && document.activeElement.classList.contains("picker__item")) tab.focus();
      }
      selectCategory(next, { fromKeys: nextFromKeys });
    }
  }
}
function initCursor() {
  if (prefersReducedMotion) return;
  const $dot = document.querySelector(".cursor__dot");
  const $ring = document.querySelector(".cursor__ring");
  if (!$dot || !$ring) return;
  let rx = window.innerWidth / 2;
  let ry = window.innerHeight / 2;
  let ringRAF = null;
  function ringTick() {
    rx += (cursorX - rx) * 0.18;
    ry += (cursorY - ry) * 0.18;
    $ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    if (Math.abs(cursorX - rx) > 0.1 || Math.abs(cursorY - ry) > 0.1) {
      ringRAF = requestAnimationFrame(ringTick);
    } else {
      ringRAF = null;
    }
  }
  function wakeRing() {
    if (ringRAF == null) ringRAF = requestAnimationFrame(ringTick);
  }
  window.addEventListener("mousemove", (e) => {
    $dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    wakeRing();
  });
  ringTick();
  cursorReady = true;
  const linkSel = 'a, button, [data-cursor="link"]';
  const mediaSel = '[data-cursor="media"]';
  document.addEventListener("mouseover", (e) => {
    const t = e.target instanceof Element ? e.target : null;
    const media = t ? t.closest(mediaSel) : null;
    const link = t && !media ? t.closest(linkSel) : null;
    document.documentElement.classList.toggle("cursor-hover-media", Boolean(media));
    document.documentElement.classList.toggle("cursor-hover-link", Boolean(link));
  });
}
function initLightbox() {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Work detail");
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.inert = true;
  lightbox.innerHTML = `
    <button class="lightbox__close" type="button" aria-label="Close" data-cursor="link">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
    <div class="lightbox__content" tabindex="-1">
      <div class="lightbox__media-wrap">
        <span class="lightbox__figure">
        <img class="lightbox__media" alt="" tabindex="0" />
        <div class="lightbox__play" aria-hidden="true">
          <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <circle cx="32" cy="32" r="30"/>
            <polygon points="26,18 26,46 48,32"/>
            <path d="M24 24h16v16M24 40 40 24"/>
          </svg>
        </div>
        </span>
      </div>
      <div class="lightbox__info">
        <p class="lightbox__desc"></p>
        <nav class="lightbox__links" aria-label="Project links"></nav>
        <p class="lightbox__disclaimer"></p>
      </div>
    </div>
  `;
  document.body.appendChild(lightbox);
  const $img = lightbox.querySelector(".lightbox__media");
  const $content = lightbox.querySelector(".lightbox__content");
  const $close = lightbox.querySelector(".lightbox__close");
  const $play = lightbox.querySelector(".lightbox__play");
  const $desc = lightbox.querySelector(".lightbox__desc");
  const $disclaimer = lightbox.querySelector(".lightbox__disclaimer");
  const $links = lightbox.querySelector(".lightbox__links");
  let savedScrollY = 0;
  let returnFocusEl = null;
  const $wrap = lightbox.querySelector(".lightbox__media-wrap");
  const pullInfoUp = () => {
    const pull = Math.max(0, ($wrap.offsetHeight - $img.offsetHeight) / 4 + 8);
    lightbox.style.setProperty("--lb-pull", `${pull}px`);
  };
  window.addEventListener("resize", () => {
    if (lightbox.classList.contains("is-open")) pullInfoUp();
  });
  const applyCap = () => {
    if ($img.naturalWidth && $img.naturalWidth < $img.naturalHeight) {
      $img.setAttribute("data-portrait", "");
    } else {
      $img.removeAttribute("data-portrait");
    }
  };
  const open = (src, alt, info, returnTo) => {
    savedScrollY = window.scrollY;
    returnFocusEl = returnTo || document.activeElement;
    info = info || {};
    $desc.textContent = info.description || "";
    keepLastWords($desc);
    if (info.disclaimer) {
      $disclaimer.textContent = info.disclaimer;
      keepLastWords($disclaimer);
      $disclaimer.style.display = "";
    } else {
      $disclaimer.textContent = "";
      $disclaimer.style.display = "none";
    }
    if (Array.isArray(info.links) && info.links.length) {
      $links.innerHTML = info.links.map(
        (l) => `<a class="lightbox__link" href="${escapeHtml(safeUrl(l.url))}" target="_blank" rel="noopener noreferrer" data-cursor="link">${escapeHtml(l.label)}</a>`
      ).join("");
      $links.style.display = "";
    } else {
      $links.innerHTML = "";
      $links.style.display = "none";
    }
    if (info.videoUrl) {
      lightbox.classList.add("is-video");
      $img.dataset.videoUrl = info.videoUrl;
    } else {
      lightbox.classList.remove("is-video");
      delete $img.dataset.videoUrl;
    }
    if (info.externalUrl) {
      lightbox.classList.add("is-link");
      $img.dataset.externalUrl = info.externalUrl;
    } else {
      lightbox.classList.remove("is-link");
      delete $img.dataset.externalUrl;
    }
    $play.tabIndex = -1;
    lightbox.setAttribute("aria-label", info.title ? String(info.title) : "Work detail");
    $img.setAttribute("role", info.videoUrl || info.externalUrl ? "link" : "button");
    $img.setAttribute("aria-label", info.videoUrl ? "Watch the video on YouTube (opens a new tab)" : info.externalUrl ? "Open the site (opens a new tab)" : "Close");
    $img.alt = alt || "";
    if ($img.src !== src) {
      $img.src = src;
    }
    const capAndPull = () => {
      applyCap();
      pullInfoUp();
    };
    if ($img.complete && $img.naturalWidth) capAndPull();
    else {
      if ($img.__loadCtl) $img.__loadCtl.abort();
      const ctl = new AbortController();
      $img.__loadCtl = ctl;
      $img.addEventListener("load", () => {
        ctl.abort();
        capAndPull();
      }, { signal: ctl.signal });
      $img.addEventListener("error", () => {
        $img.style.visibility = "hidden";
        const wrap = $img.closest(".lightbox__media-wrap");
        if (wrap) wrap.classList.add("is-failed");
        ctl.abort();
      }, { signal: ctl.signal });
    }
    $content.scrollTop = 0;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.inert = false;
    document.documentElement.classList.add("lightbox-open", "is-locked");
    for (const el of document.body.children) {
      if (el === lightbox || el.classList.contains("cursor") || el.classList.contains("loader") || el.classList.contains("bg")) continue;
      el.inert = true;
      el.dataset.lbInert = "1";
    }
    if (window.scrollY !== savedScrollY) window.scrollTo(0, savedScrollY);
    requestAnimationFrame(() => {
      const target = lightbox.querySelector(".lightbox__content");
      if (target) target.focus({ preventScroll: true });
    });
  };
  const close = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.inert = true;
    document.documentElement.classList.remove("lightbox-open", "is-locked");
    document.querySelectorAll("[data-lb-inert]").forEach((el) => {
      el.inert = false;
      delete el.dataset.lbInert;
    });
    if (window.scrollY !== savedScrollY) window.scrollTo(0, savedScrollY);
    const target = returnFocusEl && document.contains(returnFocusEl) ? returnFocusEl : document.getElementById("main");
    if (target && typeof target.focus === "function") {
      try {
        target.focus({ preventScroll: true });
      } catch (_) {
      }
    }
    returnFocusEl = null;
  };
  const isBare = (el) => el === $content || el === $wrap;
  let pressedBare = false;
  const notePress = (e) => {
    const box = $content.getBoundingClientRect();
    pressedBare = isBare(e.target) && e.clientX < box.left + $content.clientWidth;
  };
  $content.addEventListener("pointerdown", notePress);
  $content.addEventListener("click", (e) => {
    if (pressedBare && isBare(e.target)) close();
    pressedBare = false;
  });
  lightbox.addEventListener("wheel", (e) => {
    if (e.ctrlKey) return;
    e.preventDefault();
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? $content.clientHeight : 1;
    $content.scrollTop += e.deltaY * unit;
  }, { passive: false });
  $close.addEventListener("click", close);
  const openUrlOrClose = () => {
    const url = safeUrl($img.dataset.videoUrl || $img.dataset.externalUrl);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
    else close();
  };
  $img.addEventListener("click", openUrlOrClose);
  const keyActivate = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.currentTarget.click();
    }
  };
  $img.addEventListener("keydown", keyActivate);
  $play.addEventListener("click", () => {
    const url = safeUrl($img.dataset.videoUrl || $img.dataset.externalUrl);
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") {
      close();
      return;
    }
    if (e.key === "Tab") {
      const stops = [$close, $img, ...lightbox.querySelectorAll(".lightbox__link")].filter((el) => el && el.tabIndex >= 0 && el.getClientRects().length > 0);
      if (!stops.length) return;
      const first = stops[0], last = stops[stops.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  const fullSizeSource = (img) => {
    const picture = img.parentElement && img.parentElement.tagName === "PICTURE" ? img.parentElement : null;
    const source = picture && picture.querySelector("source[srcset]");
    const current = img.currentSrc || "";
    if (source && (!current || /\.webp(\?|$)/.test(current))) {
      const last = source.srcset.split(",").pop().trim().split(/\s+/)[0];
      if (last) return last;
    }
    return current || img.src;
  };
  const triggerLightbox = (media) => {
    if (isAnimating) return;
    const article = media.closest(".work");
    const img = media.querySelector("img");
    if (!img) return;
    const info = article ? {
      title: article.dataset.workTitle,
      description: article.dataset.workDescription,
      disclaimer: article.dataset.workDisclaimer,
      videoUrl: article.dataset.workVideoUrl,
      externalUrl: article.dataset.workExternalUrl,
      links: article.dataset.workLinks ? JSON.parse(article.dataset.workLinks) : null
    } : {};
    open(fullSizeSource(img), img.alt, info, media);
  };
  document.addEventListener("click", (e) => {
    const media = e.target.closest(".work__media");
    if (!media) return;
    e.preventDefault();
    triggerLightbox(media);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const media = e.target.closest && e.target.closest(".work__media");
    if (!media) return;
    e.preventDefault();
    triggerLightbox(media);
  });
}
const LOADER_START = performance.now();
function exitLoader() {
  let target = null;
  try {
    target = location.hash.length > 1 ? document.querySelector(location.hash) : null;
  } catch (_) {
    target = null;
  }
  if (restoreScrollY > 0) window.scrollTo(0, restoreScrollY);
  else if (target) target.scrollIntoView();
  else window.scrollTo(0, 0);
  document.documentElement.classList.add("is-loaded");
  unlockScroll();
  setTimeout(() => {
    const loader = document.querySelector(".loader");
    if (loader) loader.remove();
  }, 1200);
}
function scheduleLoaderExit() {
  if (prefersReducedMotion) {
    exitLoader();
    return;
  }
  const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.race([
    fontsReady,
    new Promise((r) => setTimeout(r, 1200))
  ]).then(() => {
    const elapsed = performance.now() - LOADER_START;
    const remaining = Math.max(0, 600 - elapsed);
    setTimeout(exitLoader, remaining);
  });
}
function ensureMarqueeFill() {
  try {
    const marquees = document.querySelectorAll(".marquee");
    marquees.forEach((marquee) => {
      const sets = marquee.querySelectorAll(".marquee__set");
      if (!sets.length) return;
      sets.forEach((set) => {
        const original = set.dataset.marqueeOriginal;
        if (original != null) set.innerHTML = original;
        else set.dataset.marqueeOriginal = set.innerHTML;
      });
      const containerW = marquee.offsetWidth;
      const targetW = containerW * 1.15;
      sets.forEach((set) => {
        const baseW = set.offsetWidth;
        if (baseW <= 0) return;
        let copies = Math.ceil(targetW / baseW);
        if (copies > 1) {
          copies = Math.min(12, copies + 1);
          set.innerHTML = set.dataset.marqueeOriginal.repeat(copies);
        }
      });
    });
  } catch (e) {
  }
}
function init() {
  if (document.readyState !== "loading") scheduleLoaderExit();
  else document.addEventListener("DOMContentLoaded", scheduleLoaderExit, { once: true });
  try {
    createBackground();
    if ($picker) {
      buildPicker();
    }
    if ($worksGrid && $worksTitle && $worksCount) {
      updateWorksHead(currentCategory);
      buildWorks(PORTFOLIO[currentCategory].works);
    }
    buildSocialIcons();
    buildContactForm();
    buildNewsletterForm();
    buildCourseForm();
    document.documentElement.classList.add("js-ready");
    document.documentElement.classList.remove("js-failed");
    document.querySelectorAll(".colophon__year").forEach((el) => {
      el.textContent = String(( new Date()).getFullYear());
    });
    document.querySelectorAll("p:not(.works__meta), .support__line").forEach((el) => keepLastWords(el));
    document.querySelectorAll("h1:not(.hero__title), h2, h3, .support__name").forEach((el) => keepLastWords(el, DISPLAY_PAIR));
    document.querySelectorAll("[data-split]").forEach((el) => {
      const outers = splitIntoWords(el);
      outers.forEach((w) => wordObserver.observe(w));
    });
    ensureMarqueeFill();
    const marqueeWrap = document.querySelector(".marquee-wrap");
    const marqueePause = document.querySelector("[data-marquee-pause]");
    if (marqueeWrap && marqueePause) {
      marqueePause.addEventListener("click", () => {
        const paused = marqueeWrap.classList.toggle("is-paused");
        marqueePause.textContent = paused ? "Start the moving strip" : "Pause the moving strip";
      });
      if ("IntersectionObserver" in window) {
        new IntersectionObserver((entries) => {
          entries.forEach((e) => marqueeWrap.classList.toggle("is-offscreen", !e.isIntersecting));
        }, { rootMargin: "100px" }).observe(marqueeWrap);
      }
    }
    let resizeRAF = 0;
    window.addEventListener("resize", () => {
      if (resizeRAF) cancelAnimationFrame(resizeRAF);
      resizeRAF = requestAnimationFrame(() => {
        ensureMarqueeFill();
        resizeRAF = 0;
      });
    });
    if (!skipHeavyEffects) {
      document.querySelectorAll("[data-magnetic]").forEach(registerMagnetic);
    }
    initCursor();
    initLightbox();
    if (!skipHeavyEffects) {
      wakeMagnetic();
      wakeParallax();
      window.addEventListener("scroll", () => {
        wakeParallax();
        wakeMagnetic();
      }, { passive: true });
    }
  } catch (err) {
    console.error("[init] setup failed; the curtain still lifts and the page degrades", err);
    if (!cursorReady) {
      cursorBroken = true;
      document.documentElement.classList.remove("cursor-on");
    }
  }
}
init();
