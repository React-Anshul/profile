// export const baseurl = "http://172.16.1.176:1929/"; //local

export const baseurl = "https://node-racing.mobiloitte.com/"; // staging

let user = `${baseurl}api/v1`;
let admin = `${user}/admin`;
let static1 = `${user}/static`;

const Apiconfigs = {
  // admin Login

  login: `${admin}/login`,
  forgotPassword: `${admin}/forgotPassword`,

  //static management
  staticContentList: `${static1}/staticContentList`,
  StaticContent: `${static1}/StaticContent`,
};

export default Apiconfigs;
