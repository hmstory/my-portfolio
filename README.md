# Hyeongmo Kim - Portfolio Website

포트폴리오 웹사이트입니다. React + TypeScript + Vite + Tailwind CSS로 구축되었습니다.

## 🚀 빠른 시작

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/hmstory/my-portfolio.git

# 프로젝트 폴더로 이동
cd my-portfolio

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── sections/       # 페이지 섹션 컴포넌트
│   ├── AdminFAB.tsx    # 관리자 플로팅 버튼
│   ├── AdminModal.tsx  # 관리자 로그인 모달
│   ├── ItemForm.tsx    # 폼 컴포넌트
│   └── Navigation.tsx  # 네비게이션 바
├── config/             # 설정 파일
│   └── firebase.ts     # Firebase 설정
├── hooks/              # 커스텀 훅
│   ├── useAuth.ts      # 인증 훅
│   ├── useFirestore.ts # Firestore 훅
│   └── useScroll.ts    # 스크롤 훅
├── types/              # TypeScript 타입 정의
│   └── index.ts
└── App.tsx             # 메인 앱 컴포넌트
```

## 🛠️ 사용 기술

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **Firebase** - 백엔드 (Firestore, Authentication)
- **Lucide React** - 아이콘

## 📝 주요 기능

- ✅ 반응형 디자인
- ✅ 다크 모드 지원
- ✅ Firebase 연동 (프로젝트, 경력, 교육, 스킬 관리)
- ✅ 관리자 모드 (CRUD 기능)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 타입 안전성 보장

## 🚢 배포

### GitHub Pages 배포

```bash
npm run deploy
```

배포된 사이트: https://hmstory.github.io/my-portfolio/

## 🔧 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드 미리보기
- `npm run lint` - 코드 린트 검사
- `npm run deploy` - GitHub Pages 배포

## 📚 상세 설정 가이드

집에서 처음 설정하는 경우 `SETUP_GUIDE.md` 파일을 참고하세요.

## 🔐 환경 변수 (선택사항)

`.env` 파일을 생성하여 Firebase 설정을 관리할 수 있습니다:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

현재는 fallback 값으로 작동하므로 필수는 아닙니다.

## 📄 라이선스

개인 프로젝트

---

**개발자**: Hyeongmo Kim  
**이메일**: hmstory0111@gmail.com
