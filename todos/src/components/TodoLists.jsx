import React from 'react';
import '../css/list.scss';
const TodoLists = () =>{
    return(
        <>
            <div className="list">
                <div className="list-item">
                    <div className="dele">X</div>
                    <div className="items">Learn react js</div>
                </div>
                <div className="list-item">
                    <div className="dele">X</div>
                    <div className="items">Learn react js</div>
                </div>
                <div className="list-item">
                    <div className="dele">X</div>
                    <div className="items">Learn react js</div>
                </div>
            </div>
        </>
    )
}

export default TodoLists;