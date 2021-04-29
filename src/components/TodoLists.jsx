import React, { useState } from 'react';
import '../css/list.scss';
const TodoLists = () =>{

    const [value, setValue] = useState("");
    const [items, setItems] = useState(["Learn React", "Expertise Angular" ,"Practice SCSS"]);

    const getVal = (e) => {
        setValue(e.target.value);
    }

    const addTodo = () => {
        setItems((oldItems) => {
            return [...oldItems, value];
        })
        setValue("");
    }

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arr, indx) => {
                return indx !== id;
            });
        });    
    };
    return(
        <>
            <div className="list">
                <input type="text" placeholder="Enter New ToDos" value= {value} onChange={getVal} />
                <button className="add-todos" onClick={addTodo}>+</button>
                {
                    items.map((elm, index) => {
                        return(
                            <>
                            <div className="list-item">
                                <div className="dele" onClick={() => {
                                    deleteItems(index)
                                }} 
                                id={index}>&#x1F5D1;</div>
                                <div className="items" key={index}>{elm}</div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TodoLists;