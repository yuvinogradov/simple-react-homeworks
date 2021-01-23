import React from "react";
import {AffairType} from "./HW2";
import s from './Affair.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix
    //const [_id, name, priority] = props.affair;  // Не работает
    console.log(props);
    return (
        <div className={s.affair}>
            {/*{`${_id}. ${name} [${priority}]`}*/}
            <div className={s.id}>{`${props.affair._id}`}</div>
            <div className={s.name}>{`${props.affair.name}`}</div>
            <div className={s.priority}>{`${props.affair.priority}`}</div>
            {/*{`${props.affair._id}. ${props.affair.name} [${props.affair.priority}]`}*/}


            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
