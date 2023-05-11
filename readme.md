props drilling :
Props drilling is transferring the props down the chain 

Lifting the state up : 
In some cases we can't control the state of child elements,
in that case we can lift our states to parent level such that control happens as expected 

Context provider :
wrap components in context.provider to share the same value to all components inside 

context lets component pass information deep down to components 

Context consumer : 
to consume the values provided in class base components 

In functional components we can use "useContext(xxx)" 

xxx : is created context component   

Nested contexts : 
Nested context : closest provider value is considered for the component 

