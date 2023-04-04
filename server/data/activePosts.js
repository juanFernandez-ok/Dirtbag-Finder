const activePosts = [
  {
    _id: "111",
    author: "will@hellowill.com",
    authorBanner:
      "https://images.unsplash.com/photo-1542685295-b280fd4d2c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    type: "indoor",
    text: "Hi I'm looking to climb on weekdays at Allez up gym. Usually after 6pm. Send me a request!",
    levelSport: "5.12c",
    levelTrad: "5.10",
    requests: [{ _id: "4", email: "seb@balk.com" }],
  },
  {
    _id: "222",
    author: "will@hellowill.com",
    authorBanner:
      "https://images.unsplash.com/photo-1542685295-b280fd4d2c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    type: "outdoor",
    text: "Hi I'm looking to climb on weekeds outdoors somewhere in the Laurentians. I have gear and car, send me a request!",
    levelSport: "5.12c",
    levelTrad: "5.10",
    requests: [],
  },
  {
    _id: "333",
    author: "caro@hellocaro.com",
    authorBanner: null,
    type: "outdoor",
    text: "Hi I'm looking to climb on weekends outside. I usually prefer to climb at Lac Long, but I am open to other locations too!",
    levelSport: "5.9",
    levelTrad: false,
    requests: [{ _id: "5", email: "dan@yourdan.com" }],
  },
  {
    _id: "444",
    author: "seb@balk.com",
    authorBanner:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    type: "outdoor",
    text: "Hi! I am looking for a reliable partner to climb outside this summer. I am open with locations. I have gear and car. Let's climb!",
    levelSport: "5.13b",
    levelTrad: "5.8",
    requests: [
      { _id: "1", email: "joe@hellojoe.com" },
      { _id: "2", email: "will@hellowill.com" },
      { _id: "3", email: "caro@hellocaro.com" },
    ],
  },
  {
    _id: "555",
    author: "dan@yourdan.com",
    authorBanner:
      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    type: "indoor",
    text: "Hi! I am looking for a reliable partner to climb at the gym every week. I usually climb at Zero Gravite gym but I am open to other gyms as well. I prefer mornings",
    levelSport: "5.10",
    levelTrad: "5.12c",
    requests: [{ _id: "1", email: "joe@hellojoe.com" }],
  },
  {
    _id: "666",
    author: "dan@yourdan.com",
    authorBanner:
      "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    type: "outdoor",
    text: "Hi! I am looking for a reliable partner to climb outside this summer. I am open with locations. I have gloves and a car. Hit me up and let's climb!",
    levelSport: "5.10",
    levelTrad: "5.12c",
    requests: [],
  },
];

module.exports = activePosts;
