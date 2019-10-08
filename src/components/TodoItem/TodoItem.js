//<= مجرد هعرض الداتا يعني مفيش (state)<=

import React from 'react';

const TodoItems = (props) => {
    const {items, deletItem} = props;

    let length = items.length;

    const ListItem = length ? (
        items.map( item => {
            return(
                <div key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                    <span onClick={() => deletItem(item.id)}>{" "}&times;</span>
                </div>
            )
        })
    ) : (
        <p>There is no Items</p>
    )
    return(
        <div>
            <div className="listItem">
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
            {ListItem}
        </div>
    )
}
export default TodoItems;