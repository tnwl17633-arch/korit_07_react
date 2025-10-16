import HelloProps from "./types/types";

function HelloComponent({name, age} : HelloProps) {  // 이건 객체 구조분해를 봐야 합니다.
  return(
    <>
     Hello, {name}, yo are {age} years old!
    </>
  );
}

export default HelloComponent