<p align="center">

<!-- <a href="https://slackin-pbfjhfxnsa.now.sh"><img src="https://slackin-pbfjhfxnsa.now.sh/badge.svg"></a> -->

<!-- <a href="https://circleci.com/gh/codediodeio/angular-firestarter"><img src="https://circleci.com/gh/codediodeio/angular-firestarter.svg?style=svg"></a> -->

</p>

# Neocratium

Neocratium is an Angular PWA powered by Firebase.

- [Live Demo](https://neocratium-dev.firebaseapp.com/)
- [Learn more about the Neocratia movement](https://neocratia.org)

## Features

- 

## Usage

1.  Run

- `git clone https://github.com/........git neocratium`
- `cd neocratium`
- `npm install`

2.  Create a project at https://firebase.google.com/ and grab your web config:

![](https://angularfirebase.com/wp-content/uploads/2017/04/firebase-dev-prod-credentials.png)

3.  Add the config to your Angular environment

#### src/environments/environment.ts

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'APIKEY',
    authDomain: 'DEV-APP.firebaseapp.com',
    databaseURL: 'https://DEV-APP.firebaseio.com',
    projectId: 'DEV-APP',
    storageBucket: 'DEV-APP.appspot.com',
    messagingSenderId: '123456789'
  }
};
```

4.  Open `src/app/app.module.ts` and replace the `firebasePlaceholderConfig` with your environment, i.e `environment.firebase`

5.  And finally `ng serve`
