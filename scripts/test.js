var userObj1 = {
  name: "Test",
  email: "test@gmail.com",
  password: "test12345",
  age: "20",
  phoneNumber: "123456789",
  isLogIn: false,
};

var userObj2 = {
  name: "Test2",
  email: "test2@gmail.com",
  password: "test54321",
  age: "20",
  phoneNumber: "987654321",
  isLogIn: true,
};

var userObj3 = {
    name: "Test3",
    email: "test2@gmail.com",
    password: "test354321",
    age: "20",
    phoneNumber: "987645321",
    isLogIn: false,
  };

localStorage.setItem("Test", JSON.stringify(userObj1));
localStorage.setItem("Test2", JSON.stringify(userObj2));
localStorage.setItem("Test3", JSON.stringify(userObj3));
