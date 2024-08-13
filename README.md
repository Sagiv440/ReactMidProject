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
# Main scene:
  <img src="https://github.com/Sagiv440/ReactMidProject/blob/master/media/UserMenu_Explaned.PNG?raw=true"/><br/>
  
<h4>Search:</h4> 
  <img src="https://github.com/Sagiv440/ReactMidProject/blob/master/media/Search%20User.PNG?raw=true"/><br/>
  
<h4>Other Data:</h4> 
  <img src="https://github.com/Sagiv440/ReactMidProject/blob/master/media/ExtraData.PNG?raw=true"/><br/>
  
<h4>Todos and Posts:</h4> 
  <img src="https://github.com/Sagiv440/ReactMidProject/blob/master/media/ShowTodo_Posts.PNG?raw=true"/><br/>
