import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  // useEffect에서는 단순히 onUserStateChange 함수에 콜백 함수를 전달하여, 사용자 상태 변화가 있을 때 처리함
  // auth는 이미 onUserStateChange 함수 내부에서 관리되므로 직접적으로 useEffect에서 참조할 필요가 없음
  useEffect(() => {
    onUserStateChange((user) => {
      console.log("updatedUser: ", user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login: login, logout: logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
