# Frontend

![chatflowthumbnail](https://github.com/user-attachments/assets/57a9709e-cfd5-499d-b0e5-941abcd2540f)


## 📝 프로젝트 개요
chatflow 프로젝트의 프론트엔드 리포지토리입니다.

## 🛠 기술 스택

### 주요 프레임워크 및 라이브러리
- **React** (v18.3.1)
- **TypeScript** (v5.6.2)
- **React Redux** (v9.2.0)
- **React Query** (@tanstack/react-query v5.69.0)
- **Framer Motion** (v12.6.2)
- **Zod** (v3.24.2)

### 개발 도구
- **Webpack** (v5.97.1)
- **ESLint** (v9.23.0)
- **Jest** (v29.7.0)
- **Cypress** (v14.2.1)
- **Husky** (v9.1.7)

### UI/스타일링
- **PostCSS** (v8.5.3)
- **Tailwind CSS**
- **CLSX** (v2.1.1)

### 상태 관리 및 데이터 통신
- **Redux**
- **Axios** (v1.7.9)
- **WebSocket** (reconnecting-websocket v4.4.0)

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
│ │ └── lib/ # 유틸리티 및 헬퍼 함수 
│ └── main.tsx # 앱의 진입점 
├── public/ # 정적 파일 
├── docs/ # 문서 
└── node_modules/ # 패키지 의존성
```

1. `src/app/`: 애플리케이션의 핵심 설정과 초기화를 담당하는 파일들이 위치
2. `src/view/`: UI 관련된 모든 컴포넌트와 스타일이 위치
3. `src/service/`: 비즈니스 로직과 기능 구현이 위치
4. 루트 디렉토리에는 각종 설정 파일들 (.env, webpack.config.js, tsconfig.json 등) 위치

이 구조는 관심사 분리(Separation of Concerns)를 잘 반영하고 있으며, 코드의 구성을 명확하게 보여주고 있습니다.
