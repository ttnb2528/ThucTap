const API = import.meta.env.VITE_API_URL_BASE + `/api/v1`

let AUTH = 'auth'
let STUDENT = "student"

/*         AUTH          */
export const URL_LOGIN = `${API}/${AUTH}/login`;


/*         STUDENT          */
export const URL_STUDENT_LIST = `${API}/${STUDENT}/listStudent`;