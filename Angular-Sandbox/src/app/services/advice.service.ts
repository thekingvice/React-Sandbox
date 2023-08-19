import axios from 'axios';

export default function fetchAdvice() {
  axios({
    method: 'get',
    url: 'https://api.adviceslip.com/advice',
  })
    .then((response) => {
      // Handle successful response
      console.log(response.data.slip.advice);
    })
    .catch((error) => {
      // Handle error
      console.error('Error fetching data:', error);
    });
}
