My Vite & React Mid Project 
=====

This app is designed to highlight skills in front-end development.

# Libraries And Hooks Used 
1. axios - For getting and sending data to the server. For this project, [jsonplaceholder](https://jsonplaceholder.typicode.com/) is used as the server.
2. useState - For saving the state of components.
3. useEffect - For running code during changes in the component lifecycle.
4. useMemo - For reducing render load on the browser.

# Application Components Structure 
```
App.jsx
  |
  |-->AddNewUser.jsx
  |
  |-->User.jsx
  |      |
  |      |-->OtherData.jsx
  |
  |--> Tasks.jsx
  |      |-->TasksView.jsx
  |      |-->TaskAdd.jsx
  |
  |--> Posts.jsx
         |-->PostsView.jsx
         |-->PostAdd.jsx
```
