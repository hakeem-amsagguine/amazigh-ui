# Amazigh UI

A modern, scalable UI component library built with TypeScript, React, and Tailwind CSS in a monorepo architecture.

## Features

- 🚀 TurboRepo monorepo architecture for optimal development experience
- 🎨 Multi-theme support with light/dark modes
- 🧩 Component-based architecture with reusable UI elements
- 📦 Built with TypeScript for type safety
- 🌈 Powered by Tailwind CSS for styling
- ⚡ Vite for fast development and builds
- 📚 Playground for component testing and demos

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/amazigh-ui.git
cd amazigh-ui

# Install dependencies
npm install
```

### Development

```bash
# Start the playground in development mode
npm run dev

# Build all packages
npm run build

# Run linting
npm run lint
```

## Project Structure

```
amazigh-ui/
├── apps/                  # Example applications using your components
│   ├── docs/              # Documentation site
│   └── playground/        # Component playground for testing
├── packages/
│   ├── core/              # Core design tokens and utilities
│   ├── components/        # UI components (Button, Card, etc.)
│   ├── themes/            # Theme definitions and utilities
│   └── utils/             # Shared utility functions
├── tools/                 # Build scripts and tools
├── package.json           # Root package.json
└── turbo.json             # Turborepo configuration
```

## Components

amazigh UI includes various components such as:

- Button - Versatile button component with multiple variants
- Card - Flexible card component for displaying content
- Tooltip - Component for displaying additional information on hover

## Theming

amazigh UI supports both light and dark themes out of the box. Theme values are defined using CSS variables, making it easy to customize them according to your needs.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
