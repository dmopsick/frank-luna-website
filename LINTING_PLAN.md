# Plan: Lint Project According to Google's JavaScript Style Guide

## Overview
This document provides a step-by-step plan for an LLM to lint the entire project according to Google's JavaScript Style Guide (https://google.github.io/styleguide/jsguide.html).

## Project Context
- **Project Type**: React application (React 17)
- **Current ESLint Config**: Basic react-app configuration
- **File Structure**: 
  - Main source files in `/src/`
  - Components in `/src/components/`
  - JavaScript files: `.js` extension

## Phase 1: Setup and Configuration

### Step 1.1: Install Required Dependencies
Install ESLint and Google's ESLint configuration:
```bash
npm install --save-dev eslint eslint-config-google eslint-plugin-react eslint-plugin-react-hooks
```

### Step 1.2: Create ESLint Configuration File
Create `.eslintrc.js` in the project root with the following configuration:
```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'google',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Google style guide specific overrides for React
    'require-jsdoc': 'off', // React components don't need JSDoc
    'valid-jsdoc': 'off',
    'max-len': ['error', {code: 100, ignoreUrls: true, ignoreStrings: true}],
    'no-invalid-this': 'off', // React class components use 'this'
    'react/prop-types': 'warn', // Warn on missing prop-types
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
  },
};
```

### Step 1.3: Update package.json Scripts
Add linting scripts to `package.json`:
```json
"scripts": {
  "lint": "eslint . --ext .js,.jsx",
  "lint:fix": "eslint . --ext .js,.jsx --fix",
  "lint:report": "eslint . --ext .js,.jsx --format json --output-file eslint-report.json"
}
```

### Step 1.4: Create .eslintignore File
Create `.eslintignore` to exclude unnecessary files:
```
node_modules/
build/
dist/
public/
*.config.js
coverage/
```

## Phase 2: Code Analysis and Linting

### Step 2.1: Identify All JavaScript Files
Scan the project and create a comprehensive list of all `.js` and `.jsx` files that need linting:
- `/src/App.js`
- `/src/index.js`
- `/src/Router.js`
- `/src/reportWebVitals.js`
- `/src/setupTests.js`
- `/src/components/Footer.js`
- `/src/components/Header.js`
- `/src/components/Home.js`
- `/src/components/NoMatch.js`
- `/src/components/SideNav.js`
- Any other `.js` or `.jsx` files found

### Step 2.2: Run Initial Lint Check
Execute the linting command to identify all violations:
```bash
npm run lint
```

### Step 2.3: Categorize Violations
Group violations by type:
1. **Formatting Issues** (spacing, indentation, line length)
2. **Naming Conventions** (camelCase, constants, etc.)
3. **Code Structure** (imports, exports, declarations)
4. **React-Specific** (hooks, props, components)
5. **Best Practices** (prefer const, no var, etc.)

## Phase 3: Apply Google Style Guide Rules

### Step 3.1: Formatting Rules (Google Style Guide Section 4)
Apply these formatting fixes:
- **Indentation**: Use 2 spaces (not tabs)
- **Line Length**: Maximum 100 characters (80 for comments)
- **Quotes**: Use single quotes for strings, double quotes only when needed
- **Semicolons**: Always use semicolons
- **Trailing Commas**: Use trailing commas in multi-line object/array literals
- **Spacing**: 
  - No spaces inside object braces: `{foo: bar}` not `{ foo: bar }`
  - No spaces inside array brackets: `[1, 2, 3]` not `[ 1, 2, 3 ]`
  - Space after keywords: `if (condition)` not `if(condition)`
  - Space after function name: `function foo()` not `function foo ()`

### Step 3.2: Naming Conventions (Google Style Guide Section 5)
- **Variables**: camelCase (e.g., `myVariable`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MY_CONSTANT`)
- **Functions**: camelCase (e.g., `myFunction`)
- **Classes**: PascalCase (e.g., `MyClass`)
- **Components**: PascalCase (e.g., `MyComponent`)
- **Files**: camelCase for utilities, PascalCase for React components

### Step 3.3: Code Structure Rules
- **Imports**: Group and order imports:
  1. External dependencies (React, third-party libraries)
  2. Internal modules (components, utilities)
  3. Relative imports (same directory)
- **Exports**: Prefer named exports over default exports when possible
- **Variable Declarations**: 
  - Use `const` by default
  - Use `let` only when reassignment is needed
  - Never use `var`

### Step 3.4: React-Specific Rules
- **Component Structure**: 
  - Functional components preferred
  - Props destructuring in function parameters
  - Hooks at the top of component
- **JSX Formatting**:
  - Self-closing tags: `<Component />` not `<Component></Component>`
  - Props on separate lines if multiple
  - Closing brackets alignment

### Step 3.5: Best Practices
- **Arrow Functions**: Use arrow functions for callbacks
- **Template Literals**: Use template literals for string concatenation
- **Object Shorthand**: Use object property shorthand when possible
- **Array Methods**: Prefer `.map()`, `.filter()`, `.reduce()` over loops

## Phase 4: File-by-File Linting Process

### Step 4.1: Process Each File Systematically
For each JavaScript file identified in Step 2.1:

1. **Read the file** completely
2. **Run ESLint** on that specific file
3. **Identify violations** according to Google style guide
4. **Apply fixes** in this order:
   a. Auto-fixable formatting issues (run `eslint --fix`)
   b. Manual formatting fixes (spacing, indentation)
   c. Naming convention fixes
   d. Code structure improvements
   e. React-specific improvements
5. **Verify** the file still works correctly
6. **Document** any intentional rule violations with ESLint disable comments

### Step 4.2: Common Fixes to Apply

#### Import Organization
```javascript
// Before
import './App.css';
import Router from "./Router";
import { ThemeProvider } from '@mui/material/styles';

// After (grouped and sorted)
import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {createTheme} from '@mui/material/styles';
import Router from './Router';
import './App.css';
```

#### Spacing in Objects/Arrays
```javascript
// Before
const obj = { foo: bar };
const arr = [ 1, 2, 3 ];

// After
const obj = {foo: bar};
const arr = [1, 2, 3];
```

#### Quotes
```javascript
// Before
import "./Router";
const str = "Hello";

// After
import './Router';
const str = 'Hello';
```

#### Semicolons
```javascript
// Before
const x = 1
function foo() {}

// After
const x = 1;
function foo() {}
```

#### Variable Declarations
```javascript
// Before
var x = 1;
let y = 2;

// After
const x = 1;
const y = 2; // or let if reassignment needed
```

## Phase 5: Validation and Testing

### Step 5.1: Run Full Lint Check
After all fixes are applied:
```bash
npm run lint
```

### Step 5.2: Verify No Breaking Changes
- Run the application: `npm start`
- Verify all components render correctly
- Check browser console for errors
- Run tests: `npm test`

### Step 5.3: Generate Lint Report
Create a comprehensive report:
```bash
npm run lint:report
```

### Step 5.4: Document Remaining Issues
If any violations cannot be fixed (due to breaking changes or framework requirements):
- Document them in a `LINT_EXCEPTIONS.md` file
- Add ESLint disable comments with explanations
- Note why the exception is necessary

## Phase 6: Final Configuration

### Step 6.1: Create Pre-commit Hook (Optional)
Set up husky and lint-staged to prevent future violations:
```bash
npm install --save-dev husky lint-staged
```

Add to `package.json`:
```json
"lint-staged": {
  "*.{js,jsx}": [
    "eslint --fix",
    "git add"
  ]
}
```

### Step 6.2: Update Documentation
- Update README.md with linting instructions
- Document the linting setup
- Add contribution guidelines mentioning style guide compliance

## Key Google Style Guide Rules to Enforce

### Critical Rules:
1. **2-space indentation** (no tabs)
2. **Single quotes** for strings
3. **Semicolons required**
4. **100 character line limit** (80 for comments)
5. **camelCase** for variables and functions
6. **PascalCase** for classes and components
7. **UPPER_SNAKE_CASE** for constants
8. **No spaces in object/array literals**: `{foo: bar}`, `[1, 2, 3]`
9. **Trailing commas** in multi-line structures
10. **const/let** only (no var)
11. **Arrow functions** for callbacks
12. **Template literals** for string interpolation

### React-Specific Adaptations:
- Disable JSDoc requirements for React components
- Allow JSX syntax
- Enforce React hooks rules
- Validate prop-types (warn level)

## Execution Checklist

- [ ] Install ESLint and Google config
- [ ] Create `.eslintrc.js` configuration
- [ ] Update `package.json` scripts
- [ ] Create `.eslintignore` file
- [ ] List all JavaScript files to lint
- [ ] Run initial lint check
- [ ] Fix formatting issues (auto-fixable)
- [ ] Fix naming conventions
- [ ] Fix code structure issues
- [ ] Fix React-specific issues
- [ ] Verify application still works
- [ ] Run final lint check
- [ ] Generate lint report
- [ ] Document any exceptions
- [ ] Update project documentation

## Notes for LLM Execution

1. **Work systematically**: Process one file at a time, verify it works, then move to the next
2. **Preserve functionality**: Never break the application for style compliance
3. **Use auto-fix first**: Run `eslint --fix` before manual fixes
4. **Test frequently**: After each major change, verify the app still runs
5. **Document exceptions**: If a rule cannot be followed, document why
6. **Be thorough**: Check every file, don't skip any
7. **Verify imports**: Ensure all imports still work after reorganization
8. **Check React patterns**: Ensure React best practices are maintained

## Expected Outcomes

After completing this plan:
- All JavaScript files comply with Google's JavaScript Style Guide
- ESLint configuration is properly set up
- Linting can be run via `npm run lint`
- Code is consistently formatted
- Naming conventions are uniform
- React best practices are followed
- Application functionality is preserved
- Future violations can be caught early
