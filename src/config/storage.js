const {REACT_APP_KEY_STORAGE:keyStorage} = process.env
export const isAuthenticated = ()=> true;
export const saveAuth = (data)=>{localStorage.setItem(keyStorage,JSON.stringify(data))};
export const getAuth = () =>JSON.parse(localStorage.getItem(keyStorage));
export const clearAuth = ()=>localStorage.removeItem(keyStorage);