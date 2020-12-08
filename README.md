### `npm start`

Runs the app in the development mode.\
Clinet 디버깅을 하기 위해 개발 서버를 뛰움
API 테스트 를 위해서는 main.py를 실행 이후 해야함
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Flask Server 에서 빌드는 배포 하기 위해 패키징 작업 \*.map File을 같이 배포 하면 Chorme에서 Client 코드는 볼 수 있음. 삭제 후 해야함.

```json
{
  ///package.json에 서버의 Root 주소를 적는 곳  fectch API 사용 시 Full path를 사용 하지 않기 위해
  "proxy": "http://localhost:5000"
}
```
