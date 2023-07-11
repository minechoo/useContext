import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';

function Login() {
	//순서3 - 전역 정보값을 가져와서 로그인, 로그아웃 버튼 클릭시 해당 전역 정보값을 자유롭게 변경
	//useContext를 이용해서 LoginContext값을 자유롭게 사용 가능
	const login = useContext(LoginContext);
	console.log(login);
	return (
		<article>
			<button onClick={() => login.setLogin(true)}>login</button>
			<button onClick={() => login.setLogin(false)}>logout</button>
		</article>
	);
}

export default Login;
