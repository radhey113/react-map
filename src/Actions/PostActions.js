import { FETCH_POST, NEW_POST } from './Types';

export const fetchData = () => dispatch => {
    console.log('Fetch called: ');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(body=> dispatch({
            type: FETCH_POST,
            body: body
        }))
    
}