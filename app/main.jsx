var React = require('react');
var ReactDOM = require('react-dom');

console.log("Hello from jsx");

var GroceryItemList = require('./components/GroceryItemList.jsx');


var initial = [{
    name: "Ice Cream"
},{
    name:"Waffles"
},{
    name:"Candy",
    purchased:true
},{
    name:"Snarks"
}];






ReactDOM.render(<GroceryItemList items={initial}/>, app);

