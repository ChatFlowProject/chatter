
# Chatflow Frontend

![Chatflow Thumbnail](docs/chatflowthumbnail.png)

> Discord의 경험을 닮은, 실시간 협업 중심 채팅 플랫폼의 프론트엔드입니다.  
> 채널 기반 채팅, 알림, 파일 공유, 초대 기능 등을 지원하며  
> React + TypeScript 기반으로 **유지보수성과 퍼포먼스를 고려해 개발**되었습니다.

---

## 👥 팀원

| 이름   | 역할             | GitHub                                      |
|--------|------------------|---------------------------------------------|
| 최승은 | 프론트엔드 개발 | [@xeunnie](https://github.com/xeunnie)     |
| 강윤지 | 프론트엔드 개발 | [@dbswl](https://github.com/dbswl)         |

---

## 🛠 기술 스택

> 클라이언트 라우팅, WebSocket 실시간 메시징, 쿠키 기반 인증 등  
> **모던 웹 서비스 구현을 위한 기술 스택**으로 구성되어 있습니다.

### 📦 주요 프레임워크 및 라이브러리

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=61DAFB&labelColor=ffffff&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript&logoColor=3178C6&labelColor=ffffff&style=flat-square)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=764ABC&labelColor=ffffff&style=flat-square)
![React Query](https://img.shields.io/badge/React_Query-5.69.0-FF4154?logo=react-query&logoColor=FF4154&labelColor=ffffff&style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.6.2-0055FF?logo=framer&logoColor=0055FF&labelColor=ffffff&style=flat-square)
![Zod](https://img.shields.io/badge/Zod-3.24.2-5F5AF6?logoColor=5F5AF6&labelColor=ffffff&style=flat-square)

### 🛠 개발 도구

![Webpack](https://img.shields.io/badge/Webpack-5.97.1-8DD6F9?logo=webpack&logoColor=8DD6F9&labelColor=ffffff&style=flat-square)
![ESLint](https://img.shields.io/badge/ESLint-9.23.0-4B32C3?logo=eslint&logoColor=4B32C3&labelColor=ffffff&style=flat-square)
![Jest](https://img.shields.io/badge/Jest-29.7.0-C21325?logo=jest&logoColor=C21325&labelColor=ffffff&style=flat-square)
![Cypress](https://img.shields.io/badge/Cypress-14.2.1-17202C?logo=cypress&logoColor=ffffff&labelColor=ffffff&style=flat-square)
![Husky](https://img.shields.io/badge/Husky-9.1.7-1D374D?logo=git&logoColor=F05032&labelColor=ffffff&style=flat-square)

### 🎨 UI/스타일링

![PostCSS](https://img.shields.io/badge/PostCSS-8.5.3-DD3A0A?logo=postcss&logoColor=DD3A0A&labelColor=ffffff&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=06B6D4&labelColor=ffffff&style=flat-square)
![clsx](https://img.shields.io/badge/clsx-2.1.1-000000?labelColor=ffffff&style=flat-square)

### 🔌 상태 관리 및 데이터 통신

![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=764ABC&labelColor=ffffff&style=flat-square)
![Axios](https://img.shields.io/badge/Axios-1.7.9-5A29E4?logo=axios&logoColor=5A29E4&labelColor=ffffff&style=flat-square)
![WebSocket](https://img.shields.io/badge/WebSocket-4.4.0-FF9800?logo=websocket&logoColor=FF9800&labelColor=ffffff&style=flat-square)

---
## 📁 폴더 구조
```aiignore
chatflow/ 
├── src/ 
│ ├── app/ # 앱의 핵심 설정 파일들 
│ │ ├── App.tsx # 앱의 메인 컴포넌트 
│ │ ├── Router.tsx # 라우팅 설정 
│ │ ├── Provider.tsx # 앱의 프로바이더 설정 
│ │ └── store.ts # 리덕스 스토어 설정 
│ ├── view/ # UI 관련 파일들 
│ │ ├── components/ # 재사용 가능한 컴포넌트 
│ │ ├── layout/ # 레이아웃 컴포넌트 
│ │ ├── pages/ # 페이지 컴포넌트 
│ │ └── styles/ # 스타일 관련 파일 
│ ├── service/ # 비즈니스 로직 관련 
│ │ ├── feature/ # 기능별 서비스 로직 
│ │ │ ├── auth/ # 인증 관련 기능 
│ │ │ ├── chat/ # 채팅 관련 기능 
│ │ │ ├── noti/ # 알림 관련 기능 
│ │ │ ├── team/ # 팀 관련 기능 
│ │ │ ├── image/ # 이미지 처리 관련 기능 
│ │ │ ├── common/ # 공통 기능 
│ │ │ ├── friend/ # 친구 관련 기능 
│ │ │ ├── member/ # 멤버 관련 기능 
│ │ │ └── channel/ # 채널 관련 기능 
│ │ └── lib/ # 유틸리티 및 헬퍼 함수
│ └── main.tsx # 앱의 진입점 
├── public/ # 정적 파일 
├── docs/ # 문서 
└── node_modules/ # 패키지 의존성
```

1. `src/app/`: 애플리케이션의 핵심 설정과 초기화를 담당하는 파일들이 위치
2. `src/view/`: UI 관련된 모든 컴포넌트와 스타일이 위치
3. `src/service/`: 비즈니스 로직과 기능 구현이 위치
    - `auth/`: 로그인, 회원가입 등 인증 관련 기능
   - `chat/`: 채팅 기능 관련 로직
   - `noti/`: 알림 시스템 관련 기능
   - `team/`: 팀 관리 관련 기능
   - `image/`: 이미지 업로드, 처리 관련 기능
   - `common/`: 여러 기능에서 공통으로 사용되는 기능
   - `friend/`: 친구 관리 관련 기능
   - `member/`: 사용자/멤버 관리 관련 기능
   - `channel/`: 채널 관리 관련 기능
4. 루트 디렉토리에는 각종 설정 파일들 (.env, webpack.config.js, tsconfig.json 등) 위치
> 📌 관심사 분리(Separation of Concerns)를 기준으로 구성되어 있으며, 
> 서비스 확장성과 유지보수 편의성을 고려해 모듈화되었습니다.
