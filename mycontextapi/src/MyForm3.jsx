import { useState } from "react";

function MyForm3() {

  const [ user, setUser ] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // form에서 쓸거라 handleSubmit부터 작성하겠습니다.
  const handleSubmit = (event) => {
    alert(`Hello, ${user.firstName} ${user.lastName}`);
    event.preventDefault();
  }

  // 근데 form 태그 썼고 내부에 input창으로 입력받을거니까 onChange를 작성하게 될겁니다.
  // 근데 여러 개의 input 태그 내에 onChange={event => setUser(event.target.value)}를 field 개수대로 쓸 필요는 없을 것 같으니까
  const handleChange = (event) => {
    setUser({...user,[event.target.name]: event.target.value});
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>First Name : </label>
      <input type="text" name="firstName" onChange={handleChange} value={user.firstName}/>
      <br />
      <label>Last Name : </label>
      <input type="text" name="lastName" onChange={handleChange} value={user.lastName}/>
      <br />
      <label>Email : </label>
      <input type="text" name="email" onChange={handleChange} value={user.email}/>
      <br />
    <input type="submit" value='제출😊'/>
    </form>
  );
}

export default MyForm3