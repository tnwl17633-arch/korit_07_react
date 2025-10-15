import AuthContext from "./AuthContext"
import React from "react";


function Hello() {
  const authContext = React.useContext(AuthContext);

  return(
    <>
      안녕하세요, {authContext}
    </>
  );

}
export default Hello

