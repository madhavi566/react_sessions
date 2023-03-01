
1) How do you create nested routes react router dom configuration

we can create child routes using children

we can create nested routes using 

const appRouter = createBrowserRouter([
{
path : '/',
element : <AppLayout/>,
errorElement : <Error/>,
children : [
		{
		path : '/',
		element : <Body/>,
		children :[
		{
		path : '',		element : <children/>
		}
		]
		},
		{
		path : '/about',
		element : <Suspense fallback = {<h1>....loading</h1>}><About/></Suspense>,
		},
]
]
}
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter})	


2) 

Create browser router 
uses DOM history API to update the URL and manage the history stack. 

Create Hash router 

It will use the hash portion of url to manage application url 

Create memory router 

memory router manages its own hisory stack in memory.For running react in any non browser environment. 

Router porvider 

All router objects passed to the component to render your app.

3) order of life cycle methods in call based components

constructor 
render 
component did mount 

4 ) Why do we use Component did mount ?

Component did mount will be called once after first render 

Best place to make API call 	

5) Why do we use component will unmount ? Show with example.

When we are moving out of the component , component will unmount be called 


componentWillUnmount() {
	cleartimer(1000)
}

6) Why do we use super (props) in constructor ?

Props are used to pass data from parent components to child components.

parent components can updaten props but child components can read only them.

We require props inside child component. Super() calls constructor of parent class. 
Using super constructor with props argument basically allows accessing this.props in 
constructor function. 

7) Why can't we have call back function of useeffect async ? 

since use effect returns jsx,

but if we use useeffect async it returns promise 


Coding Assignment : 

* in folder


