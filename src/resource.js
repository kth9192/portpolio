export const projects = [
  {
    id: 0,
    name: "유튜브 클립 저장소",
    img: [
      process.env.PUBLIC_URL + "youtube-cutter2.png",
      process.env.PUBLIC_URL + "youtube-cutter2.png",
      process.env.PUBLIC_URL + "youtube-cutter3.png"
    ],
    description:
      "유튜브 영상의 특정 시간대를 저장하고 하나의 목록으로 분류해 관리할 수 있는 페이지. ",
    stack:
      "create react app, nodejs , graphQL , react router, react hook , grahql apollo, JWT",
    url: "http://youtube-cutter.herokuapp.com/"
  },
  {
    id: 1,
    name: "SquardMaker",
    img: [
      process.env.PUBLIC_URL + "squardmaker.png",
      process.env.PUBLIC_URL + "squardmaker2.png",
      process.env.PUBLIC_URL + "squardmaker3.png",
      process.env.PUBLIC_URL + "squardmaker4.png"
    ],
    description:
      "축구팀을 위한 명단 제작 사이트. 팀 명단을 만들고 포메이션과 등번호를 정할 수 있다. 본인의 팀 명단을 바둑돌처럼 활용해 전술 구상도 해볼수 있다.",
    stack: "vanila js, nodejs redis session , passport, axios ",
    url: "http://squardmaker.herokuapp.com/"
  }
];