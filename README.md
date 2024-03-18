# Auth implementation for Qencode

- [Test deployment](https://test-qencode.netlify.app/) from master branch

## Requirements

- Node ^18.19.1, 20.x
- npm ^10.2.4

## Set up and build

1. Run `npm i`

2. Create .env file and fill it according to .env.example

3. Run either one of the commands:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make code changes.\
You will also see any lint errors in the console.

### or `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Folder Structure

This section outlines the folder structure used within the `src` directory of this project.

### `src/` - Root Directory

The root directory of the application, containing all the source files.

### `src/pages/`

Contains files for rendering pages. Pages are composed using `components`, `UI-kit`, `providers`, `hooks`, etc. Each file typically represents a route in the application.

### `src/components/`

A storage for reusable components that are specific to this application but are not part of the basic UI kit. For example, a custom modal or container that is used across different features would go here.

### `src/ui/`

The UI kit for the project containing basic reusable UI components, such as buttons, inputs, and typography. These components are the building blocks used by `pages` and `components`.

### `src/hooks/`

Custom React hooks that encapsulate shared logic and stateful functionality. This may include hooks for data fetching, form handling, or any complex component logic.

### `src/config/`

Configuration files for the application. This may include settings for various environments (development, production), API endpoints, or any other global settings.

### `src/types/`

TypeScript type definitions and interfaces used across the application. This includes custom types for the application's data structures, props for components, and any other type-related declarations.

### `src/providers/`

Context providers for React's Context API. This includes any global state management logic, such as authentication status, theme settings, or language preferences.

### `src/utils/`

Utility functions that are used across the application. These could be helper functions for formatting dates, numbers, or strings, show alerts, or any other utility that does not fit into hooks or components.

---

## Best Practices

- Keep each file focused on a single responsibility.
- Prefer functional components and hooks over class components.
- Name files and components consistently and clearly.
- Write tests for components, hooks, and utils.
- Document complex logic with comments.

## Additional Notes

- Components in `src/ui/` should be agnostic of the business logic and context, while components in `src/components/` can be more specialized.
- The `src/config/` folder should not contain sensitive credentials or secrets, which should instead be set through environment variables or secure secret management systems.
- Regularly review the `src/utils/` folder to prevent and refactor any utilities that have become unnecessary or could be combined to reduce code duplication.
- Always consider accessibility, performance, and code readability when adding or modifying code within these directories.
