# SYNC — Design notes

## 적용한 구성

상단은 Editorial Play의 `{SYNC}` 마스트헤드입니다. Archivo Black의 굵은 글자, 기울어진 Y와 코랄색 N을 유지했습니다. 그 아래부터는 첫 번째 Open Play 시안의 밝은 노란 화면, 크림·코랄 코딩 창, 픽셀 실험, 활동, 프로젝트와 문의를 사용합니다.

픽셀 실험은 네 가지 패턴과 문구를 차례로 보여줍니다. React 화면은 컴포넌트의 상태로, 단일 HTML은 같은 패턴의 작은 로컬 스크립트로 동작합니다. 코드 그래픽은 동아리의 창작 성격을 표현하는 데모입니다.

## 실제 외부 폰트

- Archivo Black Regular: 굵은 영문 제목과 마스트헤드.
- Pretendard Regular / Medium / Bold: 한글 제목, 본문, 메뉴.
- Space Mono Regular / Bold: 중괄호, 코드, 작은 영문 표기.

모든 폰트는 로컬 파일로 직접 제공하며 합성 굵기와 합성 이탤릭을 사용하지 않습니다. 각 폰트의 SIL OFL 라이선스를 `public/fonts/`에 포함했습니다.

공식 출처:

- https://github.com/google/fonts/tree/main/ofl/archivoblack
- https://github.com/google/fonts/tree/main/ofl/spacemono
- https://github.com/orioncactus/pretendard

## 내용과 접근성

GVCS 동아리 SYNC, 2026.02 창립, MASL 웹 서비스(2026.04), 체육축제 웹 서비스(2026.05), 신암관 314호 지능형과학실, `inhak@gvcs-mg.org` 정보를 반영했습니다. 가공한 통계와 수상 실적은 없습니다.

마스트헤드의 읽기 이름은 SYNC로 제공하고, 장식용 중괄호와 픽셀·프로젝트 그래픽은 보조 기술의 중복 읽기에서 제외했습니다. 픽셀 결과 문구는 상태 영역으로 전달합니다. 버튼과 링크는 키보드로 사용할 수 있으며, 작은 화면에서 내용이 자연스럽게 줄바꿈됩니다.
