export const searchdata = (data, username) => {
  console.log(data);
  const filteredItems = data.filter((item) => item.username == username);
  return filteredItems;
};
