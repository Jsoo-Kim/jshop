[![Netlify Status](https://api.netlify.com/api/v1/badges/3983bcb8-3541-4e72-90a0-b8a7a2348f07/deploy-status)](https://app.netlify.com/sites/enjoyjshop/deploys)

https://enjoyjshop.netlify.app 

# [JSop] 쇼핑몰 서비스 with React.js (클론코딩)
* 강의명: [드림코딩] 리액트 개념정리 · 클론코딩

이 프로젝트는 **React**, **Firebase**, **Cloudinary**를 사용하여 구축된 간단한 쇼핑몰 애플리케이션입니다. 아래는 주요 기능과 그 설명입니다.

## 주요 기능

### 1. 홈 페이지
- 판매 중인 제품 목록을 표시합니다.
- 사용자는 이 페이지에서 제품 상세 페이지로 이동할 수 있습니다.

![image](https://github.com/user-attachments/assets/e0fb156b-d4c6-4f86-826a-6466e9b54437)


---

### 2. 로그인 및 로그아웃 (구글 인증)
- 사용자는 **Firebase Authentication**을 사용하여 구글 계정으로 로그인할 수 있습니다.
- 로그인 후 사용자는 장바구니를 관리하고 제품을 등록할 수 있습니다.
- Firebase는 안전하게 로그인 및 로그아웃 프로세스를 처리합니다.

![image](https://github.com/user-attachments/assets/957ec0a2-7d4e-4aa9-b91e-d30c259a1650)


---

### 3. 제품 상세 페이지
- 각 제품에 대한 상세 정보를 볼 수 있는 페이지가 제공됩니다.
- 사용자는 이 페이지에서 제품을 장바구니에 추가할 수 있습니다.

![image](https://github.com/user-attachments/assets/a8f3e1d7-40e1-499b-828f-ece7c29f25c2)


---

### 4. 장바구니 관리
- 사용자는 장바구니에 제품을 추가하고, 선택한 모든 제품을 확인할 수 있습니다.
- 장바구니는 로그인한 사용자에 대해 **Firebase Realtime Database**를 사용하여 저장됩니다.

![image](https://github.com/user-attachments/assets/924fac61-3527-423f-aa4e-ee702039fbdc)


---

### 5. 제품 등록 (관리자 전용)
- 관리자 사용자는 간단한 폼을 통해 새 제품을 등록할 수 있습니다.
- 이미지 파일은 **Cloudinary**에 업로드되고, 제품 데이터는 **Firebase**에 저장됩니다.

![image](https://github.com/user-attachments/assets/0798ae65-7cb1-4029-8724-3c5816051dea)


---

## 사용 기술 스택

- **React**: 프론트엔드 UI 프레임워크
- **Firebase**: 구글 인증, 제품 데이터베이스, 장바구니 관리를 위해 사용
- **Cloudinary**: 제품 이미지 업로드 및 저장에 사용
- **Netlify**: Netlify에서 배포 및 호스팅


---

## 개선 사항

- 주문 및 결제 기능 추가
- Spring Boot 및 실제 데이터베이스, 인증 추가
- 이미지 저장소를 S3 로 변경
- EC2, 도커, Nginx, Github Actions를 이용한 CI CD 구축
- 도메인 구매
