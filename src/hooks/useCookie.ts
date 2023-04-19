import Cookies from "universal-cookie";

type ICookie = "users" | "token" | "usersSelfCare" | "USER_INFO";

export function useCookie<T>(nameCookie: ICookie) {
  const cookies = new Cookies();

  const dataCookie: T = cookies.get(nameCookie);

  const removeCookie = () => {
    return cookies.remove(nameCookie);
  };
  const removeCookieSelfCare = () => {
    return cookies.remove(nameCookie);
  };

  return { dataCookie, removeCookie, removeCookieSelfCare };
}
