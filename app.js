import React from "react";
import ReactDom from "react-dom/client";
import Body from "./Components/Body.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";


// no key << index  << unique key 

const AppLayout = () => (
<>
        {Header()}
        {Body()}
        <Footer/>
</>
)


const getRoot = ReactDom.createRoot(document.getElementById('root'));
getRoot.render(AppLayout())

