import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';

function Header() {
	const login = useContext(LoginContext);

	return (
		<header>
			<h1>LOGO</h1>
			<div>{login.Login ? '홍길동님 반갑습니다' : '로그인 해 주세요'}</div>
		</header>
	);
}

export default Header;
