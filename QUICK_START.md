# ⚡ Quick Start Guide

## 🎯 For Template Users

### Option 1: Automated Setup (Easiest!)

```bash
# Clone the repository with your new project name
git clone https://github.com/DFanso/nextjs-boilerplate.git my-awesome-app
cd my-awesome-app

# Run the setup script - it will prompt you for details
node setup.js

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Install dependencies
pnpm install

# Start coding!
pnpm run dev
```

### Option 2: Using Degit (No Git History)

```bash
# Clone without git history
npx degit DFanso/nextjs-boilerplate my-awesome-app
cd my-awesome-app

# Run setup
node setup.js

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Install and start
pnpm install
pnpm run dev
```

### Option 3: GitHub Template (If enabled)

1. Click "Use this template" button on GitHub
2. Create your new repository
3. Clone your new repo
4. Run `pnpm install && pnpm run dev`

---

## 🛠️ For Template Maintainers

### Making This a GitHub Template

1. Go to repository **Settings**
2. Check ☑️ **"Template repository"**
3. Save

Now users can click **"Use this template"** to create new projects!

### Files Explanation

- `setup.js` - Automated setup script that:
  - Removes `.git` folder
  - Updates project name in `package.json`
  - Updates `README.md`
  - Deletes itself after running

- `TEMPLATE_USAGE.md` - Detailed usage instructions
- `QUICK_START.md` - This file! Quick reference

---

## 📦 What's Included

- ⚡ Next.js 15.4 with Turbopack
- 🔧 TypeScript
- 🎨 Tailwind CSS v4
- 🌙 Dark/Light theme toggle
- 📦 Shadcn/ui components
- 🎯 Radix UI primitives
- 🔍 ESLint configured
- 🎭 Lucide React icons
- ⚡ PNPM package manager

---

## 🚀 Common Commands

```bash
# Development
pnpm run dev          # Start dev server with Turbopack

# Production
pnpm run build        # Build for production
pnpm run start        # Start production server

# Code Quality
pnpm run lint         # Run ESLint

# Add Components
npx shadcn@latest add button    # Add shadcn/ui components
```

---

## 📁 Project Structure

```
my-project/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn/ui components
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/             # Utilities
│       └── utils.ts
├── public/              # Static files
└── package.json         # Dependencies
```

---

## 💡 Pro Tips

1. **Use degit** for faster cloning (no git history):
   ```bash
   npx degit DFanso/nextjs-boilerplate my-project
   ```

2. **Create a shell alias**:
   ```bash
   # Add to ~/.bashrc or ~/.zshrc
   alias next-new='npx degit DFanso/nextjs-boilerplate'
   
   # Usage
   next-new my-project
   ```

3. **Environment Variables**:
   ```bash
   # Create .env.local for secrets
   cp .env.example .env.local
   ```

4. **Deploy to Vercel**:
   ```bash
   # Install Vercel CLI
   pnpm i -g vercel
   
   # Deploy
   vercel
   ```

---

## 🆘 Troubleshooting

**Setup script doesn't work?**
```bash
# Make sure Node.js is installed
node --version

# Run directly
node setup.js
```

**Git initialization fails?**
```bash
# Manual git setup
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

**PNPM not installed?**
```bash
# Install PNPM
npm install -g pnpm

# Or use npm/yarn instead
npm install
npm run dev
```

---

## 🎉 You're All Set!

Open `http://localhost:3000` and start building! 🚀

**Need help?** Check out:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Docs](https://ui.shadcn.com)

