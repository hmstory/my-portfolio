# 집에서 프로젝트 설정 가이드

## 1단계: 필수 프로그램 설치

### Node.js 설치
1. https://nodejs.org/ 접속
2. LTS 버전 다운로드 및 설치
3. 설치 확인:
   ```bash
   node --version
   npm --version
   ```

### Git 설치 (없는 경우)
1. https://git-scm.com/ 접속
2. 다운로드 및 설치
3. 설치 확인:
   ```bash
   git --version
   ```

### Cursor 설치
1. https://cursor.sh/ 접속
2. 다운로드 및 설치
3. 설치 완료 후 실행

## 2단계: 프로젝트 클론

### 터미널/명령 프롬프트 열기
- Windows: `Win + R` → `cmd` 또는 PowerShell
- 또는 Cursor 내장 터미널 사용

### 저장소 클론
```bash
# 원하는 폴더로 이동 (예: Desktop)
cd Desktop

# 프로젝트 클론
git clone https://github.com/hmstory/my-portfolio.git

# 프로젝트 폴더로 이동
cd my-portfolio
```

## 3단계: Cursor에서 프로젝트 열기

1. Cursor 실행
2. `File` → `Open Folder...`
3. `my-portfolio` 폴더 선택
4. 열기

## 4단계: 의존성 설치

### Cursor 터미널에서 실행
```bash
# npm 패키지 설치
npm install
```

설치가 완료되면 `node_modules` 폴더가 생성됩니다.

## 5단계: 개발 서버 실행

```bash
# 개발 서버 시작
npm run dev
```

브라우저에서 `http://localhost:5173` (또는 표시된 포트)로 접속하면 사이트를 확인할 수 있습니다.

## 6단계: 작업 시작

### 작업 전 항상 최신 상태 확인
```bash
git pull origin main
```

### 작업 후 푸시
```bash
# 변경사항 확인
git status

# 변경사항 추가
git add .

# 커밋
git commit -m "작업 내용 설명"

# 푸시
git push origin main
```

## 유용한 명령어

### 개발
- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드 미리보기
- `npm run lint` - 코드 린트 검사

### 배포
- `npm run deploy` - GitHub Pages에 배포

## 문제 해결

### `npm install` 오류 시
```bash
# 캐시 정리 후 재시도
npm cache clean --force
npm install
```

### Git 인증 오류 시
- GitHub Personal Access Token 필요할 수 있음
- 또는 SSH 키 설정

### 포트가 이미 사용 중일 때
- 다른 포트로 자동 변경되거나
- `Ctrl + C`로 서버 중지 후 재시작

## 프로젝트 구조

```
my-portfolio/
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── sections/        # 페이지 섹션 컴포넌트
│   ├── hooks/          # 커스텀 훅
│   ├── config/         # 설정 파일 (Firebase 등)
│   ├── types/          # TypeScript 타입 정의
│   └── App.tsx         # 메인 앱 컴포넌트
├── public/             # 정적 파일
├── dist/               # 빌드 결과물 (자동 생성)
└── package.json        # 프로젝트 설정
```

## 다음 단계

1. ✅ 코드 확인 및 수정
2. ✅ Firebase 데이터 관리 (Admin 모드)
3. ✅ 스타일 커스터마이징
4. ✅ 새 기능 추가

---

**참고**: 모든 코드는 이미 GitHub에 푸시되어 있으므로, 위 단계만 따라하면 바로 작업을 시작할 수 있습니다!
