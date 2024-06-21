const API = import.meta.env.VITE_API_URL_BASE + `/api/v1`;

let AUTH = "auth";
let STUDENT = "student";
let CAREER = "career";
let SUBJECT = "subject";
let SCHEDULE = "schedule";

/*         AUTH          */
export const URL_LOGIN = `${API}/${AUTH}/login`;

/*         STUDENT          */
export const URL_STUDENT_LIST = `${API}/${STUDENT}/listStudent`;
export const URL_STUDENT_CREATE = `${API}/${STUDENT}/createInfoStudent`;
export const URL_STUDENT_DELETE = `${API}/${STUDENT}/deleteStudent`;
export const URL_STUDENT_UPDATE = `${API}/${STUDENT}/updateStudent`;

/*         CAREER          */
export const URL_CAREER_CREATE = `${API}/${CAREER}/createCareer`;
export const URL_CAREER_LIST = `${API}/${CAREER}/listCareer`;

/*         SUBJECT          */
export const URL_SUBJECT_CREATE = `${API}/${SUBJECT}/createSubject`;
export const URL_SUBJECT_LIST = `${API}/${SUBJECT}/listSubject`;

/*         SCHEDULE          */
export const URL_SCHEDULE_CREATE = `${API}/${SCHEDULE}/createSchedule`;
export const URL_SCHEDULE_GET = `${API}/${SCHEDULE}/getSchedule`;