import { save_path } from '../model/actions';

export const jump = (history, dispatch, tab, path) => {
    dispatch(save_path({ tab, path }));
    let currentPath = {
        ...JSON.parse(localStorage.getItem('currentPath')),
        [tab]: path
    };
    localStorage.setItem('currentPath', JSON.stringify(currentPath));
    history.push(path);
}
