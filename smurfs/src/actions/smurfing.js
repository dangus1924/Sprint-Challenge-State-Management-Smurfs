import axios from 'axios';

export const GET_SMURF_DATA_REQUEST = 'GET_SMURF_DATA_REQUEST';
export const GET_SMURF_DATA_SUCCESS = 'GET_SMURF_DATA_SUCCESS';
export const GET_SMURF_DATA_FAILURE = 'GET_SMURF_DATA_FAILURE';

export const POST_SMURF_DATA_REQUEST = 'POST_SMURF_DATA_REQUEST';
export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS';
export const POST_SMURF_DATA_FAILURE = 'POST_SMURF_DATA_FAILURE';

export const getData = () => {
  console.log('gettingData');
    return dispatch => {
      dispatch({ type: GET_SMURF_DATA_REQUEST });
      axios
        .get('http://localhost:3333/smurfs')

        .then(request => {
          console.log('getting request result: ', request);
          dispatch({ type: GET_SMURF_DATA_SUCCESS, payload: request.data });
        })

        .catch(error => {
          dispatch({ type: GET_SMURF_DATA_FAILURE, payload: '' });
        });
    };
  };
  
  
export const postData = (values) => {
  console.log('postingData');
  console.log('values received: ', values);

  axios
  .post('http://localhost:3333/smurfs', values)
  
  .then(request => {
    console.log('SUCCESS! posting request result: ', request);
    
  })

  .catch(error => {
    console.log('OOOOOOPS! got the error: ', error);
  
  });
}