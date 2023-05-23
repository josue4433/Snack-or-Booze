### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
lets us handle client and server-side routing in React applications

- What is a single page application?
a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages

- What are some differences between client side and server side routing?
server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server,

- What are two ways of handling redirects with React Router? When would you use each?
use the useNavigate hook or Navigate component and set the replace property to true 

- What are two different ways to handle page-not-found user experiences using React Router? 
use a wildcard path with an asterisk('*') and add it to the very last path of our routes with <PageNotFound/> as the element.

- How do you grab URL parameters from within a component using React Router?
use React Router's useParams Hook.

- What is context in React? When would you use it?
allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it

- Describe some differences between class-based components and function
  components in React.
Functional components cannot use React lifecycle methods, such as componentDidMount. Class components can use React lifecycle methods

- What are some of the problems that hooks were designed to solve?
wrapper hell, huge components, and confusing classes.