    const parent = React.createElement("div",{id:"parent"},React.createElement("div",
                                {id:"child"},[React.createElement("h1",{},"H1 tag"),
                                React.createElement("h2",{},"H2 tag")]));
    
    
    const heading = React.createElement("h1", {id:"heading"}, "Hello Guys");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);


