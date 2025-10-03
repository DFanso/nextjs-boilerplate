# 📋 Using This Template

This document explains how to use this Next.js boilerplate as a template for your new projects.

## 🎯 Method 1: Quick Setup Script (Recommended)

This is the easiest way to get started. The setup script will automatically:
- Remove the old git history
- Update project name in `package.json`
- Update README.md
- Clean up template files

### Steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/nextjs-boilerplate.git my-new-project
   cd my-new-project
   ```

2. **Run the setup script:**
   ```bash
   node setup.js
   ```
   
   The script will prompt you for:
   - Project name
   - Project description (optional)
   - Author name (optional)

3. **Initialize git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. **Install dependencies:**
   ```bash
   pnpm install
   ```

5. **Start developing:**
   ```bash
   pnpm run dev
   ```

That's it! Your new project is ready. 🎉

---

## 🔧 Method 2: GitHub Template Repository

If you host this on GitHub, you can use GitHub's built-in template feature:

1. **On GitHub:** Go to your repository settings
2. Check the "Template repository" checkbox
3. Save the settings

Now users can:
1. Click the "Use this template" button on GitHub
2. Create a new repository from the template
3. Clone their new repository
4. Run `pnpm install`
5. Run `pnpm run dev`

**Note:** This method automatically creates a new repository without the original git history.

---

## 🛠️ Method 3: Manual Setup

If you prefer to set up manually:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/nextjs-boilerplate.git my-new-project
   cd my-new-project
   ```

2. **Remove the .git folder:**
   ```bash
   # On Linux/Mac:
   rm -rf .git
   
   # On Windows (Git Bash):
   rm -rf .git
   
   # On Windows (PowerShell):
   Remove-Item -Recurse -Force .git
   
   # On Windows (CMD):
   rmdir /s /q .git
   ```

3. **Update package.json:**
   - Change the `name` field to your project name
   - Update `description` if needed
   - Add `author` field if desired

4. **Update README.md:**
   - Replace the title
   - Update the description
   - Modify the Getting Started section

5. **Initialize new git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

6. **Install dependencies:**
   ```bash
   pnpm install
   ```

7. **Clean up template files:**
   ```bash
   # Remove these files as they're template-specific
   rm setup.js
   rm TEMPLATE_USAGE.md
   ```

8. **Start developing:**
   ```bash
   pnpm run dev
   ```

---

## 📝 What Gets Configured

When using the setup script, the following items are automatically configured:

- ✅ Project name in `package.json`
- ✅ Project description in `package.json`
- ✅ Author name in `package.json`
- ✅ README.md title and content
- ✅ Git history (removed - ready for you to reinitialize)
- ✅ Setup script (auto-deleted after running)

---

## 🎨 Next Steps After Setup

1. **Configure your project:**
   - Set up environment variables (create `.env.local` if needed)
   - Configure database connections
   - Set up authentication
   - Add your own components

2. **Customize styling:**
   - Modify `src/app/globals.css`
   - Update Tailwind configuration
   - Customize theme colors

3. **Add features:**
   - Install additional dependencies
   - Add new pages in `src/app/`
   - Create components in `src/components/`
   - Add UI components: `npx shadcn@latest add [component-name]`

4. **Set up deployment:**
   - Connect to Vercel, Netlify, or your preferred platform
   - Configure environment variables
   - Set up CI/CD if needed

---

## 🆘 Troubleshooting

### Setup script doesn't run
- Make sure you have Node.js installed
- Try running: `node setup.js` instead of `npm run setup`

### Git initialization fails
- Manually run: `git init && git add . && git commit -m "Initial commit"`

### Permission denied (Linux/Mac)
- Run: `chmod +x setup.js`
- Then run: `./setup.js`

---

## 💡 Tips

- **Use degit** for even faster cloning without git history:
  ```bash
  npx degit YourUsername/nextjs-boilerplate my-new-project
  cd my-new-project
  node setup.js
  ```

- **Create an alias** for quick project setup:
  ```bash
  # Add to ~/.bashrc or ~/.zshrc
  alias next-new='npx degit YourUsername/nextjs-boilerplate'
  
  # Usage:
  next-new my-new-project
  cd my-new-project
  node setup.js
  ```

---

**Happy coding!** 🚀

