import React from 'react';

const ListGroup = (props) => {
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;
    return (
        <ul className="list-group">
            {items.map(item => {
                console.log("item", item);
                return <li onClick={() => onItemSelect(item)} key={item[valueProperty]} className={selectedItem === item ? "list-group-item active" : "list-group-item"}>{item[textProperty]}</li>
            })}
        </ul >
    );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"

}

export default ListGroup;