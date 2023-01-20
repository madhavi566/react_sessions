Assignment

// export default one thing only

// exporting a variable by name means use named import to use it 

// header.js 

// export 
// ------------------------------------------
// local variable : const xyz  = 'example'

// xyz is local state variable ,example is a default value : 

// const [xyz] = useState("example");


// useState will return variable name and function to update the variable 

// react has one way binding 

// local variable ,react uses state variable to update the local variable 




// What is difference between named export and Default export and * as export ? 

// Named export : 
// if your function/variable has export on itself  

// xyz.js
// ----------
// export example = 'Example to use named export'

// app.js 
// ------
// import {example} from './xyz.js'


// Default export 
// ---------
// xyz.js 

// const example = 'Example to use default export'

// export default example;

// app.js
// -------
// import example from ',/xyz.js'


// * as export 
// ---------------

// xyz.js 

// export const head1 = 'this is head 1'

// export const head2 = 'this is head 2'

// app.js
// -------

// import * as test from './xyz.js'

// {test.head1}
// {test.head2}

// recommended way is export default 


// What is the importance of config.js file ? 

// Config.js file allows to write the configurations  

// Interaction with the application is made easier 

// configure the parameters and initial settings 


// What are React Hooks ? 

// React Hooks are normal functions which can be used upon the application requirement.

// Each hook has its purpose to use.  


// What is use State and when ? 

// Use State is a life cycle hook used to create a local state variable 
// It takes two parameters const [state,setState] = useSate() 
// This state is used to sync the UI with the data 
// Whenever my state varaible changes , component rendering happens fastily by diff algorithm (reconciler/react fiber) 

