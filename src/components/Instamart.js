import { useState } from "react";

const CreateSection = ({title,description,isVisible,setIsVisible, isHidden}) => {
    console.log(setIsVisible, 'props')
    console.log(isVisible, 'props')

    return (
        <div className="border border-pink-200 p-2 m-2 rounded-[12px]">
            <h1 className="font-bold font-mono"> {title} - {isVisible} - {setIsVisible}</h1>
            {isVisible ?  
            <button onClick={()=> isHidden(false)}>Hide</button> 
            : <button onClick={()=> setIsVisible(true)}>Show</button> }
             { isVisible && <p> {description} </p>}
        </div>
    )
}  

const Instamart = () => {
    const [showDescription, setShowDescription] = useState('Section-1');
    return(
    <div className="border border-pink-500 p-2 m-2">
        <h1 className="font-bold p-2 m-2"> Instamart </h1>
        <h1 className="p-2 m-2"> lot more components here </h1>
        <CreateSection  title= {"Section-1"} 
        description= {"We have successfully written unit and integration tests using Karma, Jasmine and Angular’s own testing tools. These precise tests give confidence that a single application part – like a Component or Service - or a group of connected parts work as intended. Karma and Jasmine tests take a technical perspective. They focus on the front-end JavaScript code alone and run it in a controlled and isolated test environment. What is really important though is whether the whole application works for the user."} 
        isVisible = {showDescription === 'Section-1'}        
        setIsVisible = {()=> setShowDescription('Section-1')}
        isHidden = {()=> setShowDescription('')}        
        />
        <CreateSection  title= {"Section-2 "} 
        description= {"The most effective and reliable way to ensure a working application is manual testing: A dedicated software tester walks through the application feature by feature, case by case according to a test plan. Manual tests are slow, labor-intensive and cannot be repeated often. They are unspecific from a developer perspective: If the test fails, we cannot easily pin down which part of the application is responsible or which code change causes the regression."} 
        isVisible = {showDescription === 'Section-2'} 
        setIsVisible = {()=> setShowDescription('Section-2')}
        isHidden = {()=> setShowDescription('')}        
        />
        <CreateSection  title= {"Section-3 "} 
        description= {"When all parts of the application come together, a new type of bug appears. Often these bugs have to do with timing and order of events, like network latency and race conditions. The unit and integration tests we wrote worked with a fake back-end. We send fake HTTP requests and respond with fake data. We made an effort to keep the originals and fakes on par."} 
        isVisible = {showDescription === 'Section-3'}
        setIsVisible = {()=> setShowDescription('Section-3')}
        isHidden = {()=> setShowDescription('')}
        />

    </div>
    )
}


// const Instamart = () => {
//     const [sectionConfig, setSectionConfig] = useState({
//         showSec1 : false,
//         showSec2 : false,
//         showSec3 : false,
//         hideSec  : false
//     });
//     return(
//     <div className="border border-pink-500 p-2 m-2">
//         <h1 className="font-bold p-2 m-2"> Instamart </h1>
//         <h1 className="p-2 m-2"> lot more components here </h1>
//         <CreateSection  title= {"Section-1 "} 
//         description= {"We have successfully written unit and integration tests using Karma, Jasmine and Angular’s own testing tools. These precise tests give confidence that a single application part – like a Component or Service - or a group of connected parts work as intended. Karma and Jasmine tests take a technical perspective. They focus on the front-end JavaScript code alone and run it in a controlled and isolated test environment. What is really important though is whether the whole application works for the user."} 
//         isVisible = {sectionConfig.showSec1}        
//         setIsVisible = {()=> {
//              setSectionConfig({ showSec1 : true, showSec2 : false, showSec3 : false });
             
//              }
//         }        
//         />
//         <CreateSection  title= {"Section-2 "} 
//         description= {"The most effective and reliable way to ensure a working application is manual testing: A dedicated software tester walks through the application feature by feature, case by case according to a test plan. Manual tests are slow, labor-intensive and cannot be repeated often. They are unspecific from a developer perspective: If the test fails, we cannot easily pin down which part of the application is responsible or which code change causes the regression."} 
//         isVisible = {sectionConfig.showSec2}
//         setIsVisible = {()=> setSectionConfig({
//             showSec1 : false,
//             showSec2 : true,
//             showSec3 : false
//         })
            
//         }
//         />
//         <CreateSection  title= {"Section-3 "} 
//         description= {"When all parts of the application come together, a new type of bug appears. Often these bugs have to do with timing and order of events, like network latency and race conditions. The unit and integration tests we wrote worked with a fake back-end. We send fake HTTP requests and respond with fake data. We made an effort to keep the originals and fakes on par."} 
//         isVisible = {sectionConfig.showSec3}
//         setIsVisible = {()=> setSectionConfig({
//             showSec1 : false,
//             showSec2 : false,
//             showSec3 : true
//         })            
//         }

//         />

//     </div>
//     )
// }

export default Instamart;
