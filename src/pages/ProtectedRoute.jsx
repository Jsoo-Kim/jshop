import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../components/context/AuthContext'

export default function ProtectedRoute({children, requireAdmin}) {
    // 로그인한 사용자가 있는지 확인
    // 그 사용자가 어드민 권한이 있는지 확인
    // requireAdmin이 true인 경우에는 로그인도 되어 있어야 하고, 어드민 권한도 가지고 있어야 함
    // 조건에 맞지 않으면 / 상위 경로로 이동
    // 조건에 맞으면 전달된 children을 보여줌

    const {user} = useAuthContext();

    if (!user || (requireAdmin && !user.isAdmin)) {
        return <Navigate to="/" replace />; 
        // replace를 'true'로 설정: 이동할 때 현재 경로를 history에 저장 안 함! (잘못된 경로이므로)
    }
    
    return children;
}
