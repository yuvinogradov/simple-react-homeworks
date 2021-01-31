import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loadingAC } from "./bll/loadingReducer";

const Loader = () => {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#e15b64"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};

function HW10() {
  // useSelector, useDispatch
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  //const loading = false;

  console.log("store:", store.getState());

  const setLoading = () => {
    // dispatch({
    //   type: "SET_LOADING",
    //   payload: true
    // });
    console.log("loadingAC(true) =", loadingAC(true));

    dispatch(loadingAC(true));
    setTimeout(() => dispatch(loadingAC(false)), 2000);

    console.log("loading...");
  };
  //console.log(loading.loading);

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
