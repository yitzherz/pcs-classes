import $ from 'jquery';
import css from './index.css';


fetch(`fetch(`https://jsonplaceholder.typicode.com/users`)
.then(r => {
  if (!r.ok) {
    throw new Error(`${r.status} ${r.statusText}`);
  }
  return r.json();
})
.then(weatherData => {
  console.log(weatherData);
  
   
  });
})
.catch();