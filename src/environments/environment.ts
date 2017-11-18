// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCBsxCet1VM1LnEjEP_crpukQxvQuL8CV0",
    authDomain: "angular-flex.firebaseapp.com",
    databaseURL: "https://angular-flex.firebaseio.com",
    projectId: "angular-flex",
    storageBucket: "angular-flex.appspot.com",
    messagingSenderId: "480626293655"
  }
};
