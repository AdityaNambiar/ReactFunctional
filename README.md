A ReactJS web application that is built to be production ready (currently learning & working to make changes) 
and has a node server to communicate with the help of relative URL. 

Speciality of this react application is that it demonstrates use of React Hooks in functional components. 
Gotta say they are pretty handy.

# Steps performed manually (for CI till CD on Docker) to get some help writing API:  
After successfully completing your project (i.e. when its ready to be deployed), 
1. Write your Jenkinsfile. 
2. Write the Dockerfile 
- Instructions to be written for this Dockerfile:
    a. Use node-alpine image (use a specific version image).
    b. Take the 'build/' from the project's working directory.
    c. Take the 'package.json' from project's working directory. (*make sure only required dependencies are present in its list* )
    d. Take the hosting code which uses Express in Node, from the 'webserver' folder.
    e. Perform 'npm i' for setting up 'node_modules'
    f. Expose the appropriate port.
    g. Specify 'node index.js' to start the web server in docker containers. 
- For this project particularly, I am going to host my node API server on a container as well. So write a Dockerfile for that. 
3. How are you manually setting up a Jenkins Pipeline job?:
a. Under "Pipeline" section, choose Definition to be "Pipeline script from SCM".
b. SCM field's value should be 'Git'.
c. Give Repository URL as the local filesystem project directory (path to working directory on filesystem)

  
## Reference URLs:
  
["Back-End Integration" section](https://create-react-app.dev/docs/proxying-api-requests-in-development)
  
[How to get "create-react-app" to work with your API](https://www.newline.co/fullstack-react/articles/using-create-react-app-with-a-server/)
- Understand how to utilize Webpack bundler to create 'reverse proxy' for avoiding "CORS" issues on stringent secure browsers like Chrome and also help you to avoid port mapping issues and dependency occuring due to hard-coding ports.
  
[What Is A Reverse Proxy? | Proxy Servers Explained](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/)
  
[GitHub Repository: mars/heroku-cra-node](https://github.com/mars/heroku-cra-node)
- A sample GitHub repository that can serve as an example for understanding how these actually work. This linked repository is also the reason why I wanted to use ReactHooks and functional components. 
  
### For reading more about absolute and relative URL and its significance in production environment:  
[Why you should (almost) never use an absolute path to your APIs again](https://www.freecodecamp.org/news/never-use-an-absolute-path-for-your-apis-again-9ee9199563be/)
