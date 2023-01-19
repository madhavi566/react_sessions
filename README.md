# react_sessions



session 4:Assignment : 

Is jsx mandatory to react ? 


Jsx is a syntatic sugar to react , which makes developer work much easier 

it is also convenient to use react with out JSX 

JSX => React.createElement() => Object => HTML (DOM) 

Example with out JSX  : 

const heading1 = React.createElement('h1', "{id:'title1', class:'heading1'}" ,'This is heading1')
const heading2 = React.createElement('h2', "{id:'title2', class:'heading2'}" ,'This is heading2')

const div1 = React.createElement('div', "{id:'div', class:'container-fluid'}" ,[heading1])
 
Example with JSX  : 

## <div id = 'div' class="container-fluid">
## <h1 id = 'title1' class="heading1"> This is heading1</h1>
## <h2 id = 'title2' class="heading2"> This is heading2</h2>
## </div> 


IS ES6 mandatory for react ? 
No , not mandatory but With ES6 we write less do more 

ES6 is 6 th version of ECMA script programming language 
ECMA script is the standaraization of Javascript which was released in 2015 and renamed as es6

{TitleComponent}

TitleComponent is a Varaible with in the paranthesis we can write any js code (variable,function expression)


<TitleComponent/>
Self closing functional component
rendering functional component in react

<TitleComponent><TitleComponent/>
Functional component rendering in react

How Can I write comments in JSX
// 

{/* single line comment  */}

What is react.fragment and <></>

React.fragment is a component 

Fragments let you group a list of childrens without adding extra nodes to the DOM 


Virtual Dom :

It is a tree representation of DOM. Updating the virtual DOM is fast than DOM 

Mechanism is to update DOM manipulations by comapring two  rendered trees to determine 
exactly what has changed and update only the changed node 

In react we have reconcilaiation which uses diff algorith to check the diffenece in DOM nodes 
by using key as an attribute to find the diff between old and new changes 

In react 16 react fiber is the engine used by reconciliation 


What is react fiber 

Fiber allows reconciliation and rendering in two pahses 

reaconcilataion : 

is an alogorithm to understand the diff between 2 DOM trees 
list of all changes to be rendered in th UI  

Commit  :

React tells DOM to render the changes list 


Why we need keys in react ? 
In case of children elements 
We need keys in react to make the work easy to reconciler which helps to understand the difference what';s new and want's old 

When do we need keys in react ? 

While per formaing any operations on children like adding any li children element to ul parent element ,
react reconciler get to know the difference only with the hlep of react 
other wise it will render the complete li nodes present under ul parent, which decrease the performance 

Can we use index as keys in React  ?

no , if we use index , the index will be kept same if you add element using unshift , new item will be added at 0 index , 

but react will re-render the last element   since the length of the array/object would increase .


What  is props in react ? 

Passing are arguments passed 

parameters are received 
Arguments are passed  

a,b,c are parameters here 
function xyz(a,b,c) {
...
...
} 


xyz(m,n,p) =>  m,n,p are arguments 


we can pass by using destructuring , or in object manner and we can iterate them by using map method 
Config driven UI  : 

Application should be sacalable ,modular, 

An ui said to be COnfig driven since one set of component/module would not disturb in dynamic loading of them

