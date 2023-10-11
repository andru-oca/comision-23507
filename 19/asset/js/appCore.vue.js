import users from "./usersDB.json" assert { type: "json" };

export const appCore = {
  data: function () {
    return {
      count: 0,
      msg: "bienvenido",
      saludo: "Sr/sra",
      display: true,
      styleVeronica: "veronica",
      users: users,
      welcomeMsg: "",
      longUsers: 10,
      userItems: users,
    };
  },
};
