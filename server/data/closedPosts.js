const closedPosts = [
  {
    _id: 777,
    author: "joe@hellojoe.com",
    authorBanner:
      "https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    type: "indoor",
    text: "Hi! I am looking for a reliable partner to climb at the gym this summer.Let's climb!",
    levelSport: "5.11a",
    levelTrad: false,
    requests: [{ _id: 3, email: "caro@hellocaro.com" }],
  },
  {
    _id: 888,
    author: "will@hellowill.com",
    authorBanner:
      "https://images.unsplash.com/photo-1542685295-b280fd4d2c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    type: "indoor",
    text: "Hi! I am looking for a reliable partner to climb at the gym this summer.Let's climb!",
    levelSport: "5.12c",
    levelTrad: "5.10",
    requests: [{ _id: 1, email: "joe@hellojoe.com" }],
  },
  {
    _id: 999,
    author: "caro@hellocaro.com",
    authorBanner: null,
    type: "outdoor",
    text: "Hi! I am looking for a reliable partner to climb outdoors this summer.Let's climb!",
    levelSport: "5.9",
    levelTrad: false,
    requests: [{ _id: 2, email: "will@hellowill.com" }],
  },
  {
    _id: 991,
    author: "seb@balk.com",
    authorBanner:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    type: "outdoor",
    text: "Hi! I am looking for a reliable partner to climb outdoors this summer.Let's climb!",
    levelSport: "5.13b",
    levelTrad: "5.8",
    requests: [{ _id: 5, email: "dan@yourdan.com" }],
  },
  {
    _id: 992,
    author: "dan@yourdan.com",
    authorBanner:
      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    type: "indoor",
    text: "Hi! I am looking for a reliable partner to climb at the gym this summer.Let's climb!",
    levelSport: "5.10",
    levelTrad: "5.12c",
    requests: [{ _id: 1, email: "joe@hellojoe.com" }],
  },
];

module.exports = closedPosts;
