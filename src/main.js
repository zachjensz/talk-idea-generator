const form = document.querySelector('form');
const output = document.querySelector('#output');

const webDevMeetupTalkIdeas = [
  // 1 - Straightforward / Standard
  [
    "Modern React Patterns for 2025",
    "TypeScript Deep Dive",
    "State Management: Redux, Zustand, or Signals?",
    "Building Performant SPAs",
    "Introduction to Web Components",
    "Using WebSockets for Real-Time Apps",
    "CI/CD for Frontend Developers",
    "Accessibility Best Practices",
    "CSS Grid vs Flexbox: When to Use What",
    "Progressive Web Apps in 2025",
    "GraphQL vs REST: Pros and Cons",
    "Server Components: The Next Frontier",
    "Building Micro-Frontends",
    "Edge Computing and the Frontend",
    "Securing Your Web Applications",
    "WebAssembly and Its Use Cases",
    "The Future of HTML and CSS",
    "API Design for Frontend Engineers",
    "Automating Frontend Testing",
    "Next.js vs Remix vs Astro: What to Choose?"
  ],

  // 2 - Slightly opinionated
  [
    "React: Still Worth It?",
    "Why CSS-in-JS Refuses to Die",
    "Micro-Frontends: Worth the Overhead?",
    "Server Components: Magic or Mayhem?",
    "TypeScript is Awesome (Except When It Isn't)",
    "State Management Hell and How to Escape",
    "WebSockets: Are You Ready for That Pain?",
    "Accessibility: More Than Just ARIA Labels",
    "Why Progressive Enhancement Still Matters",
    "GraphQL: Friend or Foe?",
    "Serverless: Hype or Reality?",
    "Monorepos: Manageable or Monstrous?",
    "The Illusion of the 'Full Stack Developer'",
    "Edge Functions: Do You Really Need Them?",
    "WebAssembly: Waiting for Its Moment... Still",
    "CSS Houdini: Where Did Everyone Go?",
    "Single Page Apps: A Decade Later",
    "Next.js: Framework or Cult?",
    "Testing: Why You Probably Aren't Doing Enough",
    "Framework Fatigue: What Comes Next?"
  ],

  // 3 - More cynical
  [
    "React Server Components: Prepare to Rewrite Everything Again",
    "TypeScript: Safety or Stockholm Syndrome?",
    "State Management Libraries: Choose Your Nightmare",
    "The Web is Fast (As Long As You Don't Use It)",
    "SEO in SPAs: The Eternal Struggle",
    "The Death of REST (or So They Keep Saying)",
    "Web3 in Web Dev: Let's Pretend That Didn't Happen",
    "Frameworks Eating Frameworks: A Survival Guide",
    "The Endless Scroll: UX Innovation or Torture?",
    "Responsive Design: Why It’s Still a Pain",
    "Micro-Frontends: Because Monoliths Weren't Complicated Enough",
    "CSS in 2025: Still Fighting Over Specificity",
    "JAMStack: Remember That?",
    "The Build Tool Wars: Why Simplicity Lost",
    "Monorepos: One Repo to Rule Them All (and Confuse Everyone)",
    "SSR, CSR, ISR, SSG: Please Make It Stop",
    "Edge Functions: Solving Problems You Didn't Have",
    "Accessibility: Your Afterthought for Today",
    "Another Year, Another State Management Library",
    "Versioning APIs: The 'Fun' Never Ends"
  ],

  // 4 - Sarcastic and jaded
  [
    "React 20: Now with 50% More Boilerplate",
    "State Management: The Art of Suffering",
    "TypeScript: When Any is a Lifestyle",
    "CSS Battles: Inline, External, or Give Up?",
    "Single Page Apps: The Slowest Sites on the Fastest Internet",
    "Framework X vs Framework Y: Change for Change's Sake",
    "The Real MVP: Copy-Paste from Stack Overflow",
    "Webpack, Vite, Turbopack: Choose Your Fighter",
    "Feature Flags: Deploy Bugs Strategically",
    "API Versioning: Because Breaking Changes Build Character",
    "Build Tools: From Zero to Overengineered in 60 Seconds",
    "Infinite Scroll: Infinite Rage",
    "The Joy of Explaining 'CSR vs SSR' for the 100th Time",
    "Lighthouse Scores: Gaming Google’s Algorithm for Fun",
    "DevTools: The Only Friends You Have Left",
    "Promises, Callbacks, Async/Await: Pick Your Confusion",
    "CSS Variables: Because Preprocessors Were Too Simple",
    "Dark Mode: The Greatest Frontend Debate",
    "The Return of Server Rendering: What Year Is It Again?",
    "Storybook: Make Your UI Pretty Before It's Broken"
  ],

  // 5 - Sharper and nastier
  [
    "React Hooks: Clever Abstraction or Just Another Way to Suffer?",
    "State Management: Because 'setState' Was Too Straightforward",
    "Why Web Performance Doesn’t Matter (Until a VP Asks Why the Site Is Slow)",
    "API Contracts: Legally Binding Lies",
    "Frontend Testing: As Useful As Checking if Water is Wet",
    "Infinite Scroll: UX’s Gift to Users Who Love Getting Lost",
    "CSS Frameworks: Buy One, Hate Five",
    "Web Dev Security: Add Another Library, That'll Fix It",
    "Modern Frontend: Complicated Enough to Feel Important",
    "The Todo App: Where Frameworks Go to Prove Nothing",
    "JavaScript Fatigue: Now With Even More Options You Won’t Understand",
    "REST vs GraphQL: Let’s Invent Problems, Then Solve Them",
    "Webpack: Not Just a Tool, a Cry for Help",
    "Component Libraries: Because Designers Should Suffer Too",
    "Monorepos: One Place for All Your Merge Conflicts",
    "GitHub Copilot: AI-Generated Code and Bugs, Together at Last",
    "CSS Variables: Solving Problems You Didn’t Know You Had… Until Now",
    "Dark Mode: Because The Only Real Innovation Is Changing Background Colors",
    "Framework Updates: Introducing Bugs You Didn’t Know Existed Yet",
    "React vs Signals vs New Hotness: Endless Cycle of Developer Despair"
  ],

  // 6 - Bitter realism
  [
    "React Suspense: Still Experimental, Still Breaking Stuff",
    "GraphQL: Because REST Was Too Predictable",
    "State Management: You'll Never Do It Right (Stop Trying)",
    "SSR: Where Performance and Developer Happiness Both Go to Die",
    "Edge Functions: Make Latency Someone Else’s Problem",
    "Web Vitals: Arbitrary Numbers to Make You Feel Bad",
    "Component Libraries: Copy-Paste Your Way to Inconsistency",
    "Feature Flags: Deploy Broken Code, Hide Behind Toggles",
    "TypeScript Errors: The Illusion of Safety Meets Reality",
    "Storybook: Pretty Components, Useless Without Context",
    "CSS Cascade Layers: Solving Nobody's Problems from 2005",
    "Client-Side Routing: SEO’s Arch Nemesis",
    "SVG Animations: 50% Art, 50% Browser Bugs",
    "WebAssembly: The Future… Still Waiting... Still Waiting...",
    "CSS Houdini: Shiny, Complicated, Completely Unused",
    "Micro-Frontends: Now Your Chaos Can Be Modular Too",
    "Progressive Web Apps: The Dream That Marketing Forgot",
    "NPM Audits: Daily Reminders of How Insecure Everything Is",
    "Runtime Errors: The Most Honest Part of Your App",
    "CI/CD: The Automated Journey from Dev to Disaster"
  ],

  // 7 - Brutally savage
  [
    "The Myth of the Full-Stack Developer: Jack of All Trades, Master of None (and Burnt Out)",
    "Web Performance: Lie to Yourself and Lighthouse",
    "React Server Components: Meet Your New Unmaintainable Nightmare",
    "TypeScript: Now with 100% More False Confidence",
    "Micro-Frontends: Because Scaling Chaos is a Feature Now",
    "State Management: Solving Yesterday’s Problems, Creating Tomorrow’s",
    "Testing: Because Nothing Says 'Done' Like 200 Passing Lies",
    "GraphQL: Overcomplicate Everything, Get Yelled at Later",
    "Edge Computing: Your Bugs, But Faster",
    "SSR: Retro Solutions for Modern Disasters",
    "Webpack: The Old God That Demands Sacrifice",
    "Framework Churn: Welcome to the Frontend Hamster Wheel",
    "Monorepos: Where Simple Git Workflows Go to Die",
    "Accessibility: Your Ticket to Legal Trouble (If Ignored)",
    "SSR, SSG, ISR, CSR: Pick One, Regret It Later",
    "Deploying to Production: Now With Extra Panic",
    "Dark Mode: Because Nothing Matters More Than Color Schemes",
    "NPM: Trust Us, These 3000 Dependencies Are Totally Safe",
    "Frontend Developers: Moving Boxes Around Since Forever",
    "CI/CD: Speedrunning Bugs into Production"
  ],

  // 8 - Existential, industry-wide despair
  [
    "The Future of Software Development: Quit and Move to the Woods",
    "How to Burn Down Your Office (Metaphorically... Maybe)",
    "Resignation Driven Development: Why Bother When You Can Leave",
    "Agile Ceremonies: 45 Minutes to Say 'Do Your Job'",
    "Standups: Just Public Shaming in Disguise",
    "Managers: The Real Cause of All Merge Conflicts",
    "OKRs: Proving You Did Something Without Doing Anything",
    "How to Pretend to Care About Roadmaps",
    "Your Career Ladder is Actually a Hamster Wheel",
    "Meetings: Where Good Ideas Go to Die",
    "Stakeholders: AKA Professional Scope Creepers",
    "Burnout: Not If, But When",
    "Your Dream Job Will Become a Nightmare — Guaranteed",
    "How To Quit Gracefully While Fantasizing About Setting Slack on Fire",
    "The Only Real Bug is Middle Management",
    "Shipping on Fridays: The Final Cry for Help",
    "‘Move Fast and Break Things’ — Still Breaking, Still Firing",
    "Promotion Paths: Who Can Play Politics Better",
    "DevOps: The Magical Department That Fixes Management’s Mistakes",
    "Remote Work: Now You're Micromanaged From Afar"
  ],

  // 9 - Cosmic absurdity
  [
    "Quantum Voodoo and Your Web App: Uncertainty as a Feature",
    "How to Write a Web App That Will Survive the Heat Death of the Universe",
    "Caching Strategies for When the Sun Goes Supernova",
    "Schrödinger’s Feature Flag: It's Both Live and Broken",
    "Multiverse Driven Development: Every Commit Creates a Worse Timeline",
    "Building Applications for Users Who No Longer Exist",
    "Relativity and Performance Budgets: It’s Slow Only If You Measure It",
    "Async/Await and the Nature of Time Itself",
    "Your CEO’s Roadmap Exists in a Parallel Universe",
    "Quantum Entanglement in Distributed Systems: When Bugs Happen Everywhere At Once",
    "Heat Death Compatible Design Systems",
    "How to Explain State Management to Future Alien Archaeologists",
    "The Observable Universe and Observable Streams: Both Expanding, Both Confusing",
    "Latency Over Intergalactic Distances: A Practical Guide",
    "Dark Matter and Missing Documentation: Both Theoretical, Both Critical",
    "Your Framework’s Lifecycle: Born to Die, Just Like Stars",
    "The Event Loop vs The Fate of All Living Things",
    "How to Write Code That Will Outlive Your Entire Lineage",
    "Blockchain, But For Encoding Regrets Across Time",
    "The Real MVP: Entropy"
  ],

  // 10 - Transcendent calm
  [
    "Letting Go: Accepting That Your Web App Will Always Have Bugs",
    "Embracing Impermanence in Software Versions",
    "Release Cycles Are Illusions, Only Change is Real",
    "Deleting Code as a Path to Inner Peace",
    "The Joy of Ignoring Jira",
    "Becoming One with the 500 Error",
    "Surrendering to the Infinite Scroll",
    "Your App Is Already Broken — Accept This Truth",
    "The Art of Not Debugging Immediately",
    "Zen and the Maintenance of Legacy Code",
    "Mindfulness Through Merge Conflicts",
    "Containerization as a Metaphor for Human Existence",
    "Achieving Nirvana by Muting Slack",
    "The Dao of Deprecation",
    "CI/CD: Flowing With, Not Against, the River of Deployments",
    "Meditations on Feature Requests You Will Never Build",
    "Users Come, Users Go: Observing Without Attachment",
    "Nothing Is Cached Forever, And That’s Okay",
    "Finding Stillness in Empty States",
    "The Universe Will End Before Your Refactor is Finished — Accept and Be Free"
  ],
];

const chooseAtRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

let index = 0;
const chooseEscalating = (listOfLists) => {
  const idea = chooseAtRandom(listOfLists[index])
  index = (index + 1) % listOfLists.length;
  return idea;
}

form.onsubmit = (e) => {
  e.preventDefault();
  output.innerText = chooseEscalating(webDevMeetupTalkIdeas);
};
