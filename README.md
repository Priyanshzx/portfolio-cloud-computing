# Priyansh Yadav | AWS Cloud & DevOps Portfolio

A clean, production-ready, recruiter-focused personal portfolio website engineered specifically for **Priyansh Yadav**, a final-year BCA student targeting AWS Cloud and DevOps engineering roles (Internships, Trainee positions, Cloud Support, and Junior Cloud Engineer openings).

---

## 🚀 Key Highlights & Truthfulness Policy

- **No Overstated Claims**: Honest presentation as a final-year BCA student building practical AWS projects. No fabricated work history, exaggerated uptime percentages, or fake metrics.
- **Explicit Project Statuses**: Every project card and case study is clearly marked with its real status (**`In Progress`** or **`Planned Architecture`**).
- **Illustrative Diagrams**: Cloud architecture graphics are transparently labeled as **`Illustrative AWS architecture`** until live infrastructure is verified.
- **Client-Side Validation Only**: The contact form provides client-side validation and explicitly informs users that it is not connected to a backend, preventing false delivery assumptions.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand marks
- **Language**: JavaScript (ESM)
- **Design System**: AWS Dark Navy theme (`#080D1A`), slate secondary text, and AWS orange accent (`#FF9900`)

---

## 📁 Folder Structure

```text
portfolio-job/
├── public/
│   ├── favicon.svg             # AWS cloud-themed SVG favicon
│   └── resume.pdf              # (Place your verified resume here)
├── src/
│   ├── components/
│   │   ├── ArchitectureDiagram.jsx # Illustrative SVG cloud diagrams
│   │   ├── CaseStudyModal.jsx      # Accessible modal dialog with Esc/Focus handling
│   │   ├── CertificationCard.jsx   # Card for learning paths & badges
│   │   ├── Certifications.jsx      # Credentials section with disclaimer
│   │   ├── Contact.jsx             # Contact details + validated demo form
│   │   ├── Footer.jsx              # Footer with copyright and back-to-top
│   │   ├── Hero.jsx                # Headline, subtext, badges, CTAs, SVG diagram
│   │   ├── Icons.jsx               # Pixel-perfect SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx              # Sticky header, mobile drawer, resume safety logic
│   │   ├── ProjectCard.jsx         # Card with status, tags, and action buttons
│   │   ├── Projects.jsx            # Projects grid and modal state coordinator
│   │   ├── SectionHeading.jsx      # Reusable section heading with orange eyebrow
│   │   ├── SkillGroup.jsx          # Reusable skill category card
│   │   └── Skills.jsx              # 4 skill domains with active learning note
│   ├── data/
│   │   └── portfolioData.js        # Centralized data store for all portfolio content
│   ├── App.css                     # Minimal auxiliary CSS
│   ├── App.jsx                     # Root application layout with skip-to-content link
│   ├── index.css                   # Tailwind imports, focus rings, reduced-motion rules
│   └── main.jsx                    # React 19 entry point
├── index.html                      # SEO metadata, title, and viewport setup
├── package.json                    # Project dependencies & scripts
├── vite.config.js                  # Vite configuration with Tailwind CSS plugin
├── PORTFOLIO_CONTENT.md            # Detailed customization guide
└── README.md                       # Documentation & setup instructions
```

---

## 💻 Commands

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
Compile and bundle the production assets into the `dist/` directory:
```bash
npm run build
```

### 4. Production Preview
Locally preview the production build output:
```bash
npm run preview
```

### 5. Linting
Verify zero syntax, import, or accessibility linting errors:
```bash
npm run lint
```

---

## 📝 How to Update Portfolio Content & Resume

### Updating Info, Links, and Projects
All portfolio text, links, and project entries reside in:
👉 [`src/data/portfolioData.js`](file:///c:/Users/xdpha/OneDrive/Documents/portfolio%20job/src/data/portfolioData.js)

Consult [`PORTFOLIO_CONTENT.md`](file:///c:/Users/xdpha/OneDrive/Documents/portfolio%20job/PORTFOLIO_CONTENT.md) for full instructions on modifying:
- Name and bio
- Real social links (GitHub, LinkedIn, Email)
- Project repository URLs and live demos
- Verification requirements before updating status from `In Progress` to `Completed`

### Adding Your Resume PDF
1. Place your real resume PDF in the `public/` folder as `resume.pdf`.
2. In `src/data/portfolioData.js`, change `hasResumeFile: false` to `hasResumeFile: true`.
3. The "Resume" button in the navbar will automatically link directly to `/resume.pdf`.

---

## ☁️ Deployment Options

### Option 1: AWS S3 + CloudFront (Recommended for AWS Cloud Engineers)
1. Run `npm run build` to create the `dist/` folder.
2. Create an Amazon S3 bucket configured for static website hosting (or origin access control).
3. Upload all files from `dist/` to the S3 bucket:
   ```bash
   aws s3 sync dist/ s3://your-portfolio-bucket-name --delete
   ```
4. Create an Amazon CloudFront distribution pointing to the S3 bucket for global edge caching and free HTTPS with AWS Certificate Manager (ACM).
5. Configure Route 53 to point your custom domain (e.g. `priyanshyadav.com`) to the CloudFront distribution.

### Option 2: Vercel or Netlify
- Push the repository to GitHub: `https://github.com/priyanshzx/portfolio`.
- Connect the GitHub repository to Vercel or Netlify.
- Framework preset: `Vite`. Build command: `npm run build`. Output directory: `dist`.

---

## ♿ Accessibility & UX Features

- **Keyboard Navigation**: Skip-to-content link, tab-order optimization, visible 2px `#FF9900` focus rings on all interactive elements.
- **Accessible Dialogs**: Project case study modals feature `role="dialog"`, `aria-modal="true"`, focus lock on open, close on `Escape`, and body-scroll locking.
- **Mobile Menu**: Responsive hamburger drawer with explicit `aria-expanded` and close controls.
- **Prefers-Reduced-Motion**: Media query in `index.css` disables smooth scrolling and animations when reduced motion is preferred by the user.
- **Color Contrast**: Compliant with WCAG guidelines using crisp white/slate text against deep navy backgrounds (`#080D1A`).

---

## 📄 License & Attribution

Designed and built for **Priyansh Yadav**. Released under the MIT License.
