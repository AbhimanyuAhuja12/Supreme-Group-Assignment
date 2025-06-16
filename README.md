# Supreme Group Website Frontend

This repository contains the frontend implementation of the Supreme Group website, developed as part of a technical assessment. The project focuses on building a performant and maintainable frontend based on a provided design.

Live: https://supreme-group-assignment.vercel.app/

## 📝 Project Overview

This implementation follows modern frontend development practices to create a responsive, accessible, and performant website for Supreme Group. The project closely adheres to the provided Figma design specifications with attention to pixel-perfect implementation across devices.

## 🛠️ Technology Stack

### Framework: NextJs
Next.js was chosen for this implementation due to its robust features that enhance both developer experience and production performance:

React's Component-Based Architecture: Promotes high reusability and modularity.

Server-Side Rendering (SSR) / Static Site Generation (SSG) Capabilities: Enables optimized initial page loads and improved SEO.

Built-in Image Optimization (next/image): Handles responsive image loading and modern formats automatically.

Automatic Code Splitting: Ensures only necessary JavaScript is loaded per page.

Optimized Production Builds: Provides efficient asset handling and minification out-of-the-box.

### Language: TypeScript
TypeScript was used to ensure type safety, better developer experience, and reduced runtime errors.

### Styling: Tailwind CSS
Tailwind CSS was selected for its:
- Utility-first approach that accelerates development
- Built-in responsive design system
- Lower CSS bundle size through purging unused styles
- Consistency in design implementation

### State Management
React's Context API was used for state management as it provides:
- Sufficient capabilities for the website's complexity level
- No additional dependencies required
- Simpler implementation than Redux for this scale of application

## 🚀 Project Setup

### Prerequisites
- Node.js (v16.x or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/AbhimanyuAhuja12/Supreme-Group-Assignment.git
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

## 📁 Project Structure

The project follows a modular component architecture:

```
.
├── public/                  # Static assets served directly by Next.js
│   └── assets/              # Images, videos, fonts, and other static files
│       ├── images/
│       └── videos/
├── src/                     # All application source code
│   ├── app/                 # Next.js 13+ App Router directory
│   │   ├── (route-groups)/  # Optional: For organizing routes without affecting URL paths
│   │   ├── pages.tsx           main file
│   ├── components/          # Reusable, application-specific components (e.g., Hero sections, navigation elements)
│   │   └── SpecificComponentFolder/
│   ├── ui/                  # Highly reusable, presentational UI elements (e.g., Buttons, Inputs, Modals)
│   │   └── UIAttribute/
│   ├── hooks/               # Custom React hooks for reusable logic (e.g., authentication, data fetching)
│   ├── constants/           # Global constants (e.g., API endpoints, navigation links, configuration values)
│   ├── styles/              # Global CSS styles and Tailwind CSS directives
│   ├── types/               # TypeScript type definitions for interfaces and custom types
│   └── utils/               # Utility functions (e.g., data formatters, helper functions)
├── .env                     # Environment variables for different configurations
├── .eslintrc.json           # ESLint configuration for code linting
├── next.config.mjs          # Next.js specific configuration file
├── package.json             # Project dependencies and npm scripts
├── postcss.config.ts        # PostCSS configuration, used by Tailwind CSS
├── tailwind.config.ts       # Tailwind CSS configuration file
├── tsconfig.json            # TypeScript compiler configuration
└── README.md                # This project's README file
```

This architecture supports:
- Component reusability across the application
- Clear separation of concerns
- Easy maintenance and scalability
- Isolated testing of components

## 📱 Responsive Design Strategy

The implementation follows a mobile-first approach using Tailwind's responsive breakpoints:
- `sm`: 640px and above (small devices)
- `lg`: 1024px and above (large devices)
- `xl`: 1280px and above (extra-large devices)

Key responsive strategies implemented:
- Fluid typography that scales appropriately across devices
- Flexible grid layouts using CSS Grid and Flexbox
- Strategic component stacking on smaller screens
- Conditional rendering for different device sizes when necessary
- Touch-friendly interaction areas on mobile devices

## ⚡ Performance Optimization

Several performance optimization techniques have been implemented:

1. **Code Organization**: Components are structured for optimal reusability and maintainability
2. **Image Optimization**: 
   - Optimized image sizes and formats
   - Proper image loading strategies
3. **CSS Optimization**:
   - Tailwind's PurgeCSS to eliminate unused styles
   - Strategic use of utility classes
4. **JavaScript Optimization**:
   - Clean component architecture
   - Efficient state management with Context API

## ♿ Accessibility Considerations

The implementation prioritizes accessibility through:

1. **Semantic HTML**: Using appropriate HTML5 elements for content structure
2. **ARIA Attributes**: Adding ARIA roles, states, and properties where necessary
3. **Keyboard Navigation**: Ensuring all interactive elements are keyboard accessible
4. **Focus Management**: Visible focus indicators and logical tab order
5. **Color Contrast**: Meeting WCAG AA standards for text visibility

## 🤔 Development Decisions

During implementation, the following decisions were made:

1. **Common Components**: Created reusable Button, Image, and Input components to maintain consistency
2. **Layout Structure**: Separated layout components (Header, Footer) from page content
3. **Custom Hooks**: Implemented custom hooks like useHeader to encapsulate layout-specific logic
4. **Tailwind Styling**: Used Tailwind utility classes directly without additional CSS frameworks
5. **No Animation Libraries**: Implemented necessary animations using CSS transitions and Tailwind

## 🧩 Challenges and Solutions

### Challenge 1: Responsive Layout Implementation
**Solution**: Utilized Tailwind's responsive utility classes to create layouts that adapt seamlessly across device sizes.

### Challenge 2: Component Reusability
**Solution**: Designed common components with appropriate props to make them highly reusable throughout the application.

### Challenge 3: Performance Optimization
**Solution**: Structured the application to minimize re-renders and optimize asset loading.

### Challenge 4 : Complex Visuals 
(Videos & Scrolling Animations): Ensuring smooth video playback and fluid scroll-triggered animations without compromising performance. We optimized video formats, used Intersection Observer API for efficient animation triggers, and relied on CSS transforms for hardware-accelerated effects.

## 🔮 Potential Improvements

Given more time, the following improvements could be implemented:

1. **Enhanced Testing**: Adding comprehensive unit and integration tests
3. **Advanced Animations**: Enhancing user experience with more sophisticated animations
4. **Performance Monitoring**: Implementing analytics for real-user performance metrics


