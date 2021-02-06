# Bank Flow

All the instructions, architecture and decisions about the project can be found below.

## Language and Framework

Following the challenge recommendation, it was used JavaScript and its framework, React.

## Dependencies

- [TypeScript](https://www.typescriptlang.org/): it types the code at runtime.
- [Styled Components](https://styled-components.com/): it optimizes the styling experience for React components.
- [React Native Svg](https://github.com/react-native-svg/react-native-svg): it enables to use svg in React native
- [React Native Safe Area View Context](https://github.com/th3rdwave/react-native-safe-area-context): it create a safe area for notch phones
- [Apsl React Native Button](https://github.com/APSL/react-native-button): easier to use intead of react native button

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── .expo-shared
├── assets
├── node-modules
├── src
│  ├── __mocky__
│  │  ├── index.json
│  ├── icons
│  │  ├── closed-eye.tsx
│  │  ├── open-eye.tsx
│  ├── routes
│  │  ├── index.tsx
│  ├── screens
│  │  ├──  dashboard
│  │  │  ├──  __tests__
│  │  │  │  ├──  index.test.tsx
│  │  │  ├──  dashboard.hook.ts
│  │  │  ├──  index.tsx
│  │  │  ├──  styles.tsx
│  │  ├──  welcome
│  │  │  ├──  __tests__
│  │  │  │  ├──  index.test.tsx
│  │  │  ├──  welcome.hook.ts
│  │  │  ├──  index.tsx
│  │  │  ├──  styles.tsx
│  ├── typings
│  │  │  ├──  index.d.tsx
│  ├── utils
│  │  │  ├──  __tests__
│  │  │  │  ├──  index.test.ts
├── .gitignore
├── app.json
├── App.tsx
├── babel.config.js
├── package.json
├── tsconfig.json
├── README.md
└── yarn.lock
```

The simplified version of the project tree is described below:

- **__mocky__**: api mocks
- **icons**: app svgs: open and closed eye
- **routes**: app routes configuration
- **screens**: app screens: welcome and dashboard
- **utils**: help functions
- **typings**: global types


## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/caiogodoi/bankflow

Or you can download it by following the command:

`git clone https://github.com/caiogodoi/bankflow.git`

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
