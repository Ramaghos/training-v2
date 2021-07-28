# -----------------------------userName and Password-------------------------------#
"UserName":"Rama",
"Password":"rama123!",
other username and Password are inside Login.json file.
# first-vue-project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# <slot> in dashboard and then can write <dashboard> tag inside signin and call the {{input.username}} inside # signin-stored the username password in json file and called it via axios to validate the input

# signin navigating to header-via router

# in header used ul li to put div nav bars-addtask , alltask ,logout and putting the username entered via router param

# https://www.youtube.com/watch?v=7TVcxOD4uh0 ------auto logout

# https://webdevchallenges.com/vue-js-login-component-with-spinner

# Authentication-

# -need to store a boolean value

# -whr to store-will use vuex store

# created a store and stored a variable isloggedin inside state()-bydefault value will be false as we are not logged in primarily

# we have two components responsible for login and logout--logging is in --login component and logout is in dashboard component

# both login and dashboard are child on App

# App is the main component which renders in browser

# whr i hv created the store---- in store.js

# then imported the store.js in main.js..y in main.js--because App is present in main.js in store.js---

# in store i have state----variable --isloggedin(default false)

# mutation----we are writing function to commit the change..How--by passing the payload

# getters----we are fetching the updated data from state

# in login component---

# once the username is authenticated and we are logged in then we can commit the change and set the value to true

# in Dashboard----

# once i click on logout i will change the value to false

# we need to add Guard in route.js---

# we are using the lifecycle(beforeEach)

# in the beforeeach condition i need to chk the value of islogged variable which is stored in state ..and which is updated and is ready to use in getters.

# for getters we need computed
