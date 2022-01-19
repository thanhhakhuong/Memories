const reducer = (posts = [], action) => {
  switch (action.type) {
    case "GET":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
