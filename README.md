# SYNC — Code, play, make.

굵은 `{SYNC}` 마스트헤드와 따뜻한 옐로·코랄 색상으로 구성한 GVCS 코딩 동아리 웹사이트입니다. 상단은 기울어진 Y와 코랄 N으로 개성을 주고, 그 아래는 밝은 소개와 픽셀 코딩 실험, 활동, 프로젝트, 문의로 이어집니다.

## 실행

```sh
npm ci
npm run dev
```

`npm run build`로 `dist/`에 배포용 파일을 생성합니다. React 19 / Vite 8 구성을 사용합니다.

## 구성과 동작

- `src/App.jsx`: 동아리 소개, 네 가지 픽셀 패턴을 순환하는 React 상태 기반 `NEW IDEA` 버튼, 활동·프로젝트·문의.
- `src/index.css`: 반응형 레이아웃, 굵은 마스트헤드와 실제 외부 서체.
- `public/fonts`: Archivo Black, Pretendard Regular / Medium / Bold, Space Mono Regular / Bold와 라이선스.
- `public/favicon.svg`: 옐로·잉크 색상의 픽셀 심볼.

메뉴는 페이지 안의 실제 섹션으로 이동합니다. 픽셀 실험은 브라우저에서 동작하며 별도 API가 필요 없습니다. 문의는 `inhak@gvcs-mg.org`로 연결됩니다.

## 사이트와 배포

사이트: https://sync.gvcs.kr

저장소: https://github.com/gcinhak/sync-web

정적 사이트 호스팅에서는 저장소 루트를 기준으로 `npm ci`와 `npm run build`를 실행하고, 생성된 `dist/` 폴더를 게시합니다. 별도 API나 환경 변수 없이 동작합니다. 폰트 파일과 라이선스도 빌드 결과에 포함됩니다.
