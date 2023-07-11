//순서1 - 전역으로 관리할 저장객체 생성
//createContext를 이용해서 초기값을 null로 지정한 빈 객체를 생성
//해당 빈 객체는 추후 루트 컴포넌트인 App에서 Provider로 해당 값을 전역으로 자식요소에 전달
import { createContext } from 'react';
export const LoginContext = createContext(null);
