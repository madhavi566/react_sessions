<!-- 
session 7 : 
-----------
What are the various ways to add images to your app ? 

Structure  : Add it in assets/img 

Code : 

one way (Add an image from your computer)
----------
import Logo from "relative path there"

in jsx : 

<img src ={Logo} alt="logo"/>

second wat
---------

<img src ="https://reactjs.org/logo-og.png">


inserting a background image with styles 

import UrLogo from "relative path there"

<div style={{backgroundImage :UrLogo}}> 
this is overlay text
</div>


What would happen if we console.log(useState());

logs undefined ,function incase of no initial value provided
logs intila value,function incase of initial value provided


How will use Effect behave if we dont add a depednecy array ? 

After render , useEffect will be called continuously   


What is SPA ? 
rewriting the page rather than loading new pages from server 
Ex :facebook,gmail,twitter,

advantages
----------
quick loading time 
seam less experience 
ease in buidling apps 
less bandwidth 

disadvantages
----------
Dont perform well with SEO 
Uses a lot of browser resources
Security issues 

DIfference between client side routing vs server side routing 

client side routing : data will sits in youar appliction and no need of server requests 
server side routing : data need to get from  server and show in the application  -->
