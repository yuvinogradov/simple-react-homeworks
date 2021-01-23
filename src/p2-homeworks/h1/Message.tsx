import React from "react";
import {messageDataType} from "./HW1";
import s from './Message.module.css';

// type PropsType = {
//     avatar: string
//     name: string
//     message: string
//     time: string
// }

function Message(props: messageDataType) {
    return (
        <div className={s.message}>
            <div className={s.messageAvatar}>
                <img className={s.messageAvatarImg} src={props.avatar}/>
            </div>
            <div className={s.messageBalloon}>
                <div className={s.messageBody}>
                    <div className={s.messageName}>{props.name}</div>
                    <div className={s.messageText}>{props.message}</div>
                </div>
                <div className={s.messageTime}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
