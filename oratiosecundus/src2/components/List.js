import React from "react";

function List(props) {
    const notPurchased = props.groceries.filter(grocery => !grocery.Purchased);
    return (
        <ul className="list-group">
            {notPurchased.map(item => (
                <li className="list-group-item" key ={item.id}>
                    {item.name}
                </li>
            ))}
            Using the map method, render one li element displaying the text property of each grocery
            object.
        </ul>
    );
}

export default List;
