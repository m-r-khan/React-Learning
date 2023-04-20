import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id:"heading"}, "Hello Buddy");
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

const jsxHeading = (<h1 id="heading"> This is JSX</h1>); 
root.render(jsxHeading);

const Heady = () =>
(
    <h1 className="head">Second one</h1>
);
const heady1 = 
(
    <h1 className="head1">Third one</h1>
);

const number = 100;

const FunctionalComponent = () =>
(
    <div id="container">
        <Heady /> 
        {number} 
        <h2>{number}</h2>
        {heady1}
        <h1 className="heading">Functional Component</h1>
    </div>
    
);

root.render(<FunctionalComponent/> );