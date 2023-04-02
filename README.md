# docker공부한 파일
## docker 스터디 
- 새로고침 할때마다 숫자가 +1이 되는 사이트를 도커와 node를 통해 만들어보는 간단한 파일 
- 리액트 앱 실행하기
## 실행어 
- docker-compose up -d --build 
- docker run 이미지이름
## 멈춤 
- docker-compose down
## 도커를 활용한 리액트 앱
- docker build -t 이미지이름 ./ (빌드하기)
- docker-compose.yml 파일 작성하기
- react로 실행시 윈도우는 바로 적용안될 시 package.json 파일의 scripts의 부분의 start부분에 WATCHPACK_POLLING=true 부분 추가하면 해결
