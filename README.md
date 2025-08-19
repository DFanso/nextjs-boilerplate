# 🚀 Next.js Boilerplate

A modern, production-ready Next.js boilerplate with TypeScript, Tailwind CSS, and essential developer tools.

## ✨ Features

- ⚡ **Next.js 15.4** with App Router and Turbopack for fast development
- 🔧 **TypeScript** for type safety
- 🎨 **Tailwind CSS v4** for utility-first styling
- 🌙 **Dark/Light Theme** support with `next-themes`
- 📦 **Shadcn/ui Components** - Beautiful, accessible UI components
- 🎯 **Radix UI** primitives for robust component foundation
- 🔍 **ESLint** for code quality
- 📱 **Responsive Design** out of the box
- 🎭 **Lucide React Icons** for beautiful icons
- 🎨 **Poppins Font** pre-configured
- ⚡ **PNPM** for fast package management

## 🛠️ Tech Stack

- **Framework:** Next.js 15.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Theme:** next-themes
- **Package Manager:** PNPM
- **Linting:** ESLint

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js 18+ 
- PNPM (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-boilerplate
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server with Turbopack |
| `pnpm run build` | Build the application for production |
| `pnpm run start` | Start the production server |
| `pnpm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
nextjs-boilerplate/
├── public/                 # Static assets
├── src/
│   ├── app/               # App Router pages and layouts
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/              # Utility functions
│       └── utils.ts      # Common utilities
├── components.json        # Shadcn/ui configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🎨 UI Components

This boilerplate comes with pre-configured Shadcn/ui components:

- **Button** - Customizable button component with variants
- **Theme Toggle** - Light/dark mode switcher
- **Theme Provider** - System theme detection and management

To add more components:
```bash
npx shadcn@latest add [component-name]
```

## 🌙 Theme Support

The boilerplate includes a complete theme system:

- **Light/Dark mode** toggle
- **System theme** detection
- **Persistent** theme preference
- **Smooth transitions** between themes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

Build the application:
```bash
pnpm run build
```

Then deploy the `.next` folder to your preferred hosting platform.

## 🔧 Customization

### Adding New Pages
Create new files in `src/app/` directory following the App Router convention.

### Styling
- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component styling
- Customize theme in `tailwind.config.ts`

### Components
- Add reusable components in `src/components/`
- Use Shadcn/ui for consistent design system
- Leverage Radix UI primitives for accessibility

## 📦 Dependencies

### Main Dependencies
- `next` - React framework
- `react` & `react-dom` - React library
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS
- `next-themes` - Theme management
- `@radix-ui/react-slot` - Component composition
- `lucide-react` - Icon library

### Development Dependencies
- `@types/*` - TypeScript type definitions
- `eslint` - Code linting
- `postcss` - CSS processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or run into issues, please:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Browse [Tailwind CSS docs](https://tailwindcss.com/docs)
- Visit [Shadcn/ui documentation](https://ui.shadcn.com)

---

**Happy coding!** 🎉