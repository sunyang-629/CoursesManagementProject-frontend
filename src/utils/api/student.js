import queryString from 'query-string';
import { del, get, post } from './axios';

const API_STUDENT_URL = '/students';
const mockImage = 'https://cdn2.iconfinder.com/data/icons/hacker-solid/100/hacker_hacker_human_-512.png';

export const fetchStudents = (pageNum = 1, pageSize = 10, query) => {
    const stringified = queryString.stringify({
        pageSize,
        query,
        page: pageNum,
    });
    const url = `${API_STUDENT_URL}?${stringified}`;

    return get(url).then(res => ({
        students: res.data.data.map(student => ({ ...student, image: mockImage })),
        pagination: res.data.pagination,
    }));
};

export const addStudentToCourse = (studentId, courseId) => {
    const url = `${API_STUDENT_URL}/${studentId}/courses/${courseId}`;

    return post(url).then(res => res.data);
};

export const removeStudentToCourse = (studentId, courseId) => {
    const url = `${API_STUDENT_URL}/${studentId}/courses/${courseId}`;

    return del(url).then(res => res.data);
};