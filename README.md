# React Movie list App

## Install packages

```bash
npm install # while using npm
yarn # while using yarn
```

`Check env file, it should have correct backend url with slash at the end`


## Run local dev
```bash
npm run start # while using npm
yarn start # while using yarn
```

## App cade base
- added *_gaurds* folder and it includes auth gaurd for use authentication
- added *_layout* folder and it includes layout
- added *component* folder and it includes app component
- *pages* folder inclides main pages and its components
- Added *redux* folder to handle `store` with `react-redux`
- *routes* added all page's routes

## App Flow
- Login screen on the starting
- use user details what is saved in DB
- After success login listing will be shown as dashboard page
- you can add moview via using add button
- a modal popup will be there to add new movie
- A search bos is in the top of box to search movies via name
