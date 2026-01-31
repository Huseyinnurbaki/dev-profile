# Personal Website

Modern, minimal personal website built with Astro and Tailwind CSS. Fully static and optimized for GitHub Pages.

## Features

- Static site generation with Astro
- Tailwind CSS for styling
- Light/dark mode (system preference default)
- Content collections for projects
- Responsive design
- SEO-friendly
- Fast (Lighthouse 90+)
- Optional Google Tag Manager integration
- GitHub Actions deployment

## Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/
│   │   ├── About.astro         # About section
│   │   ├── Experience.astro    # Experience timeline
│   │   ├── Footer.astro        # Footer with social links
│   │   ├── Header.astro        # Header with navigation
│   │   ├── Hero.astro          # Hero section
│   │   ├── ProjectCard.astro   # Project card component
│   │   ├── Projects.astro      # Projects grid
│   │   ├── Section.astro       # Reusable section wrapper
│   │   └── Writing.astro       # Writing section
│   ├── content/
│   │   ├── config.ts           # Content collections config
│   │   └── projects/           # Project data files (JSON)
│   ├── layouts/
│   │   └── Layout.astro        # Base layout
│   ├── pages/
│   │   └── index.astro         # Home page
│   └── config.ts               # Site configuration
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind configuration
└── package.json
```

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Huseyinnurbaki/dev-profile.git
   cd dev-profile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321/dev-profile/](http://localhost:4321/dev-profile/) in your browser

## Building for Production

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The built site will be in the `dist/` directory.

## Deployment

This site is configured to deploy automatically to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. Go to your repository settings on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Build and deployment**, select:
   - **Source**: GitHub Actions
4. Push to the `main` branch to trigger the deployment

The site will be available at: `https://huseyinnurbaki.github.io/dev-profile/`

### Custom Domain

To use a custom domain:

1. Create a file `public/CNAME` with your domain:
   ```
   hhaluk.me
   ```

2. Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://hhaluk.me',
     base: '/',
     // ... rest of config
   });
   ```

3. In your domain's DNS settings, add a CNAME record pointing to `huseyinnurbaki.github.io`

4. In GitHub repository settings, under **Pages** > **Custom domain**, enter your domain

## Content Management

### Personal Information

Edit `src/config.ts` to update your personal information, bio, experience, and social links.

### Projects

Projects are stored in `src/content/projects/` as JSON files. Each project has:

```json
{
  "title": "Project Title",
  "description": "Brief description",
  "tags": ["Tag1", "Tag2"],
  "link": "https://project-url.com",
  "github": "https://github.com/user/repo",
  "featured": true,
  "order": 1
}
```

To add a new project, create a new JSON file in `src/content/projects/`.

### Experience

Edit the `experience` array in `src/config.ts` to update your work history.

### Social Links

Update social links in the `social` object in `src/config.ts`.

## Analytics (Optional)

To enable Google Tag Manager:

1. Create a `.env` file in the root directory
2. Add your GTM ID:
   ```
   PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

Analytics are disabled by default if no GTM ID is provided.

## Customization

### Colors

Edit `tailwind.config.mjs` and the CSS variables in `src/layouts/Layout.astro` to change the color scheme.

### Typography

The site uses Inter for body text and JetBrains Mono for monospace text. Change fonts in `src/layouts/Layout.astro`.

### Base Path

If deploying to a different GitHub Pages project:

1. Update `base` in `astro.config.mjs`
2. Update all internal links to include the new base path

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [GitHub Pages](https://pages.github.com) - Hosting

## License

MIT
