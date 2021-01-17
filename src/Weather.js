import React from "react";
import Loader from "react-loader-spinner";

export default function Weather () {


    return ( <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={7000} //3 secs

     />);
}
