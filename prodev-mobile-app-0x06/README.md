# prodev-mobile-app-0x04
A mobile onboarding interface built with Expo, React Native, and TypeScript, with clean separation of logic, styles, and assets.

## Project Setup
1. Create Project
Dplicated prodev-mobile-app-0x05
cd prodev-mobile-app-0x06

2. Assets
Download and place the required image files in:
assets/images/

## Create the following files in the project root:
app/
├── index.tsx
├── join.tsx
├── Sign.tsx

# Constants
## constants/index.ts
const BACKGROUNDIMAGE = require('@/assets/images/hero-icon.png');
const HEROLOGO = require('@/assets/images/Logo.png');
const HEROLOGOGREEN = require('@/assets/images/logo-green.png');
const GOOGLELOGO = require('@/assets/images/google.png');
const FACEBOOKLOGO = require('@/assets/images/facebook.png');

export {
  BACKGROUNDIMAGE,
  HEROLOGO,
  HEROLOGOGREEN,
  GOOGLELOGO,
  FACEBOOKLOGO,
};

# Styles
Create the following files:
styles/
├── _mainstyle.ts
├── _joinstyle.ts
Extend joinstyle.ts similarly for styling the join screen.

# Notes
1. All image paths are valid and match filenames exactly.

2. @/ alias only if it's properly configured in your tsconfig.json.

3. Run npx expo start -c to clear cache and launch the app.

