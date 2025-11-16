# Sharyu Popat Patil - Developer Portfolio

A production-ready developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes** for dark mode support.

## 🎨 Features

- ✨ **Modern UI** - Clean, responsive design with smooth animations
- 🌙 **Dark Mode** - Theme toggle powered by next-themes
- 📱 **Fully Responsive** - Mobile-first design approach
- 🚀 **Performance Optimized** - Next.js App Router with server components
- ✍️ **TypeScript** - Full type safety across the codebase
- 📧 **Contact Form** - API endpoint for form submissions
- 📄 **Resume Viewer** - PDF embed with download functionality
- 📊 **LeetCode Stats** - Display coding achievements
- 🎯 **Project Showcase** - Dynamic project pages with details

## 📁 Project Structure

```
sharyu-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── projects/
│   │   ├── page.tsx              # Projects listing page
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic project detail page
│   ├── resume/
│   │   └── page.tsx              # Resume page with PDF embed
│   ├── leetcode/
│   │   └── page.tsx              # LeetCode stats page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── layout.tsx                # Root layout with ThemeProvider
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles with Tailwind
├── components/
│   ├── Navbar.tsx                # Navigation component
│   ├── Footer.tsx                # Footer component
│   ├── ThemeToggle.tsx           # Dark/Light mode toggle
│   ├── Hero.tsx                  # Hero section
│   ├── Skills.tsx                # Skills section
│   ├── ProjectCard.tsx           # Project card component
│   └── ContactForm.tsx           # Contact form component
├── lib/
│   └── projects.ts               # Project data and utilities
├── public/
│   ├── Patil_Sharyu_lResume.pdf # Resume file
│   └── favicon.ico               # Favicon
├── package.json                  # Dependencies and scripts
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── postcss.config.mjs            # PostCSS configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Runtime**: Node.js 18+

## 📦 Installation

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sharyu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Pages

### Home (`/`)
- Hero section with CTA buttons
- About section
- Technical skills showcase
- Featured projects preview
- Achievements section

### Projects (`/projects`)
- Complete project listing
- Filter and search capabilities
- Project cards with tech stack

### Project Detail (`/projects/[slug]`)
- Detailed project information
- Tech stack breakdown
- Key features list
- Links to GitHub repository

### Resume (`/resume`)
- Embedded PDF viewer
- Download button
- Quick contact CTA

### LeetCode (`/leetcode`)
- Static coding statistics
- Problem category breakdown
- Achievements showcase
- Link to LeetCode profile

### Contact (`/contact`)
- Contact information display
- Contact form with validation
- Social media links
- Real-time form submission

## 🚀 Scripts

```bash
# Development
npm run dev           # Start dev server on http://localhost:3000

# Production
npm run build         # Build for production
npm start             # Start production server

# Linting
npm run lint          # Run ESLint
```

## 📧 Contact Form API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "message": "Your message here"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message received successfully! I'll get back to you soon."
}
```

## 🔐 Production Setup

### Email Integration (Optional)
The contact form API supports integration with email services. Currently, it logs to console. To enable email notifications, integrate with:

- **Resend** - Recommended for Next.js
- **SendGrid** - Popular choice
- **Nodemailer** - Self-hosted option
- **AWS SES** - For AWS deployments

Edit `/app/api/contact/route.ts` to add your email service integration.

## 🌐 Environment Variables

Create a `.env.local` file if using email services:

```env
# Example for Resend
RESEND_API_KEY=your_api_key_here

# Example for SendGrid
SENDGRID_API_KEY=your_api_key_here
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add portfolio"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Configure environment variables** (if using email service)
   - Go to Settings → Environment Variables
   - Add your API keys

### Deploy to Other Platforms

**Netlify**:
```bash
npm run build
# Deploy the .next folder
```

**Docker**:
```bash
docker build -t sharyu-portfolio .
docker run -p 3000:3000 sharyu-portfolio
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Update Personal Information
Edit `/lib/projects.ts` for project data and component files for personal info.

### Modify Animations
Framer Motion animations can be adjusted in individual components.

## ✅ Performance

- ⚡ Next.js 16 App Router for optimal performance
- 🎯 Image optimization with Next.js Image component
- 📦 Code splitting and lazy loading
- 🔄 Incremental Static Regeneration (ISR)
- 🚀 Optimized bundle size

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Sharyu Popat Patil**
- 📧 Email: sharyu2701@gmail.com
- 📱 Phone: +91-7447377577
- 📍 Location: Pimpri, Maharashtra, India
- 🔗 LinkedIn: [linkedin.com/in/sharyupatil01](https://www.linkedin.com/in/sharyupatil01/)
- 💻 GitHub: [github.com/Sharyupatil01](https://github.com/Sharyupatil01)
- 🎯 LeetCode: [leetcode.com/u/sharyu01](https://leetcode.com/u/sharyu01/)

## 🤝 Contributing

Feel free to fork, submit issues, and create pull requests for any improvements.

## 📞 Support

For issues or questions, please open an issue on GitHub or contact via email.

---

**Built with ❤️ using Next.js, React, and modern web technologies.**

