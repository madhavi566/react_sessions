
session 6: 

What is micorservice 

Microservice is an architectural style ,that structures an application 
as a collection of services which are 

* Indepdendetly deployable 
* Lossey coupled
* Oragnized around business capabiltites
* Owned by small team 
* Highly maintainable and testable 

What is a monlith 

monolith is a single unified unit 

less cross cutting concerns 
Seam less debugging and testing 
prompt and single deployment 
disadvantages : 
code complexity 
interdepednent components
Limted scalabiltiy 
New technology barriers 


Difference between monolith vs micorservice

Monolith  : 
------------
Adv : 

less cross cutting concerns 
Seam less debugging and testing 
prompt and single deployment 
development 
performance 

disadvantages : 
slower development speed 
Scalabilty
realiabiltiy 
Lack of flexibility
interdepednent components
Limted scalabiltiy 
New technology barriers 

 
Microservice : 
-----------
adv:
agilty :working with small teams 
Felxible sacling 
continous deployment 
maintainable and testable 
tedchnology flexibility
high relaiability
happier teams 


disadv: 
debugging chanllenges
development sprwl 
infrastructure costs 
lcak of standaridzation
lack of clear ownership
debugging challenges

Why do we need a use Effect ? 

is a function which takes two parameters one is call back function adn other is depdency array 
If there is no depdencey array it will call only once 
First component render and then use effect will be called 


What is Optional chaining : 

Optional chaining operator accesses an object's property or calls a function. If accessed object /function called is
undefined/null it does not throw an error but returns undefined 

What is a Shimmer UI ?

A shimmer UI resembles the pages actual  UI , for better user experience. 
It mimcs the actual page layout by showing its elements in a shape similar to actual content


What is difference between js expression and js statement ? 

JS expressions are something which produces value 

Expression fills the slot and make the statement 

2+3+5 =>  is an expression 

const sum = 2+3+5 => is an statement

What is conditional rendering ? 

rendering based on the condition which is explained 

EX:  incase of restaurants length 0 we need to show shimmer 


What is CORS 

origin A   origin B 

For complex request browser first calls pre flight request from origin A to origin B to check 
Whether origin A is allowed to make a call at origin B  

If preflight is succeeded normal call xhr call can be made from origin A to origin B .

Browsers follow this web standaraization for security and safe 

In preflight request browser sends an HTTP request using the oprtions method to 
other source of origin 

Acces control request method 
Access control request headers

response 
Access control allow origin 
Access control allow methods 
Access control allow headers 


What is async and await 

async and await for asynchronous promise based behaviour 
Asyn functions are expressions 

await expressions make promise returning functions will wait untill it is resolved or rejected 


What is const json = await data.json()  ? 

as it is used in async fn, await makes till the response is resolved untill completion 

.json() method takes json as input and converts to javascript object


