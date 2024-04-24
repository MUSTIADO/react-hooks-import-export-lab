export const username = "Liza";
export const city = "New York";
export const image = "https://i.imgur.com/mV8PQxj.gif";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
