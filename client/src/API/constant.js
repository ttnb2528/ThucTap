const API = import.meta.env.VITE_API_URL_BASE + `/api/v1`;

let AUTH = "auth";
let STUDENT = "student";
let CAREER = "career";
let SUBJECT = "subject";
let SCHEDULE = "schedule";
let CLASS = "class";

/*         AUTH          */
export const URL_LOGIN = `${API}/${AUTH}/login`;

/*         STUDENT          */
export const URL_STUDENT_LIST = `${API}/${STUDENT}/listStudent`;
export const URL_STUDENT_LIST_CONDITION = `${API}/${STUDENT}/listStudentWithCondition`;
export const URL_STUDENT_CREATE = `${API}/${STUDENT}/createInfoStudent`;
export const URL_STUDENT_DELETE = `${API}/${STUDENT}/deleteStudent`;
export const URL_STUDENT_UPDATE = `${API}/${STUDENT}/updateStudent`;

/*         CAREER          */
export const URL_CAREER_CREATE = `${API}/${CAREER}/createCareer`;
export const URL_CAREER_LIST = `${API}/${CAREER}/listCareer`;
export const URL_CAREER_DELETE = `${API}/${CAREER}/deleteCareer`;
export const URL_CAREER_EDIT = `${API}/${CAREER}/editCareer`;
export const URL_CAREER_LIST_CONDITION = `${API}/${CAREER}/listCareerWithCondition`;

/*         SUBJECT          */
export const URL_SUBJECT_CREATE = `${API}/${SUBJECT}/createSubject`;
export const URL_SUBJECT_LIST = `${API}/${SUBJECT}/listSubject`;
export const URL_SUBJECT_DELETE = `${API}/${SUBJECT}/deleteSubject`;
export const URL_SUBJECT_UPDATE = `${API}/${SUBJECT}/updateSubject`;
export const URL_SUBJECT_LIST_CONDITION = `${API}/${SUBJECT}/listSubjectWithCondition`;

/*         SCHEDULE          */
export const URL_SCHEDULE_CREATE = `${API}/${SCHEDULE}/createSchedule`;
export const URL_SCHEDULE_GET = `${API}/${SCHEDULE}/getSchedule`;

/*         CLASS          */
export const URL_CLASS_CREATE = `${API}/${CLASS}/createClass`;
export const URL_CLASS_LIST = `${API}/${CLASS}/listClasses`;
export const URL_CLASS_DELETE = `${API}/${CLASS}/deleteClass`;
export const URL_CLASS_UPDATE = `${API}/${CLASS}/updateClass`;
export const URL_CLASS_LIST_CONDITION = `${API}/${CLASS}/listClassWithCondition`;
export const URL_CLASS_LIST_CAREER = `${API}/${CLASS}/listClassWithCareer`;