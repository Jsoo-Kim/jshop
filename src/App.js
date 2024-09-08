import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './components/context/AuthContext';

function App() {
  return (
    // AuthContextProvider 안에 있는 모든 자식 컴포넌트는 AuthContext에 저장된 사용자 정보와 로그인/로그아웃 기능에 접근 가능
    <AuthContextProvider> 
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
