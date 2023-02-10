import Cookies from 'js-cookie';

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const setCookie = (key: string, value: string, params = {}) => {
  Cookies.set(key, value, {
    sameSite: 'lax',
    domain: location.hostname,
    ...params,
  });
};

export const deleteCookie = (key: string) => {
  Cookies.remove(key, { sameSite: 'lax', domain: location.hostname });
};

export const unsetAuthCookies = () => {
  deleteCookie('token');
};
