const users = [
  {
    _id: "1",
    email: "joe@hellojoe.com",
    firstName: "joe",
    lastName: "perez",
    profile: {
      indoor: true,
      outdoor: false,
      levelSport: "5.11a",
      levelTrad: false,
      bio: "I climb mostly in the gym Allez Up, weekedays after 6pm. Send me a request and let's climb! ",
      bannerUrl:
        "https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    activePosts: [],
    oldPartners: [{ _id: "3", email: "caro@hellocaro.com" }],
    pendingRequests: [
      { _id: "4", email: "seb@balk.com" },
      { _id: "5", email: "dan@yourdan.com" },
    ],
  },
  {
    _id: "2",
    email: "will@hellowill.com",
    firstName: "will",
    lastName: "french",
    profile: {
      indoor: true,
      outdoor: true,
      levelSport: "5.12c",
      levelTrad: "5.10",
      bio: "I climb outside and at the gym Allez Up, weekedays in the morning. Send me a request and let's climb! ",
      bannerUrl:
        "https://images.unsplash.com/photo-1542685295-b280fd4d2c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    activePosts: ["111", "222"],
    oldPartners: [{ _id: "1", email: "joe@hellojoe.com" }],
    pendingRequests: [{ _id: "4", email: "seb@balk.com" }],
  },
  {
    _id: "3",
    email: "caro@hellocaro.com",
    firstName: "caro",
    lastName: "smith",
    profile: {
      indoor: false,
      outdoor: true,
      levelSport: "5.9",
      levelTrad: false,
      bio: "I like to climb outside around the Laurentians, usually weekends works best for me. But sometimes I get out during the week as well! ",
      bannerUrl: null,
    },
    activePosts: ["333"],
    oldPartners: [{ _id: "2", email: "will@hellowill.com" }],
    pendingRequests: [{ _id: "4", email: "seb@balk.com" }],
  },
  {
    _id: "4",
    email: "seb@balk.com",
    firstName: "seb",
    lastName: "balk",
    profile: {
      indoor: true,
      outdoor: true,
      levelSport: "5.13b",
      levelTrad: "5.8",
      bio: "I like to climb hard. Outside or inside at the gym, usually on weekends I boulder at Val-David and during the week I climb at Zero Gravite gym. ",
      bannerUrl:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    activePosts: ["444"],
    oldPartners: [{ _id: "5", email: "dan@yourdan.com" }],
    pendingRequests: [],
  },
  {
    _id: "5",
    email: "dan@yourdan.com",
    firstName: "dan",
    lastName: "yourdan",
    profile: {
      indoor: true,
      outdoor: true,
      levelSport: "5.10",
      levelTrad: "5.12c",
      bio: "I mainly climb hard trad routes with gloves on. I specialize in crack climbing but can also enjoy a good sport route. Hit me up and let's climb!",
      bannerUrl:
        "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    activePosts: ["555", "666"],
    oldPartners: [{ _id: "1", email: "joe@hellojoe.com" }],
    pendingRequests: [{ _id: "3", email: "caro@hellocaro.com" }],
  },
];

module.exports = users;
