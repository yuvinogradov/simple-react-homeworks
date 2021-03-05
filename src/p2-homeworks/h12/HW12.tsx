import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'blue', 'pink'];
type StateType = {
    theme: string
}

function HW12() {
    const theme = useSelector((state: StateType) => state.theme)

    const dispatch = useDispatch()

    const onChangeCallback = (value: string) => {
        dispatch(changeThemeAC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s[theme + '-text']}>
                homework 12

            </div>
            <div>
                <SuperRadio
                    name={"radio2"}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
