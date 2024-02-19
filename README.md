<h1 align="center">Healthy Web App</h1>

## Description

A web app written in Next App Router

## What's inside?

This project uses many tools like:

- **NextJs App Router**.
- **ESLint** (a tool that helps developers find and fix issues in JavaScript code, ensuring it follows coding standards
  and best practices).
- **Prettier** (Automatically formats code to maintain consistent styling across a project).
- **Tailwind CSS** (A utility-first CSS framework that offers pre-built classes for rapid styling without writing custom
  CSS).
- **React Query** and **Axios** (communication with the API).
- **Shadcn-UI** (UI library based on Radix-UI)

## Prerequisites

1. Node.js >=16
2. Yarn

## Installation

First, install `node_modules`:

```bash
yarn install
```

## Development

Run the development server:

```bash
yarn dev
```

## Build

```bash
yarn build
```

## ESLint

```bash
yarn lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder structure

```shell
.
├── .github
├── .next                # Next build folder
├── .vscode              # VSCode configuration
├── public               # Public assets folder
├── src
│   ├── assets           # Fonts, images,...
│   ├── common
│   │   │── constants
│   │   │── hooks        # Custom hooks
│   │   │── http
│   │   │── interfaces
│   │   │── utils
│   ├── components
│   │   │── common
│   │   │── icons        # Icons components
│   │   │── ui           # UI components: Button, Dropdown, Checkbox...
│   ├── modules
│   └── types            # TypeScript type definitions.
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```
