import "dotenv/config";

/**
 * @todo Implement auth
 * @todo Return a session Id
 * @param {FormDataEntryValue} password
 * @returns {Boolean} Whether or not the user is logged in
 */
const login = (password) => {
  if (password === process.env.SESSION_ID) {
    return true;
  }

  return false;
};

/**
 * @todo Implement session management
 * @param {*} cookies
 * @returns {Boolean} Whether or not the user is logged in
 */
const isLoggedIn = (cookies) => {
  // document.cookie = "name=oeschger; SameSite=None; Secure";
  const cookiesByKey = cookies?.split("; ").reduce((cookieMap, cookie) => {
    const [key, value] = cookie.split("=");
    cookieMap[key] = value;
    return cookieMap;
  }, {});

  return cookiesByKey && cookiesByKey["sessionid"] === process.env.SESSION_ID;
};

export { login, isLoggedIn };
