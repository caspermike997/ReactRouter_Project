import React, { useState } from 'react';
import MovieList from './Components/Movielist'
import Filter from './Components/Filter'
import './App.css'
import {Routes, Route }  from 'react-router-dom'
import  Video from './Components/Video'



const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'In Time',
      description: 'Wrongly accused of murder, a young man fights to survive in a future where aging stops at 25 — and only those who can afford extra time live longer.',
      posterURL: 'https://occ-0-7334-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABane8XKEkh4QaijTlDExLiVU6XdM1iCTFFt-DK5zp7xhkdVqMjrxmtImo4JDIUYT9mf4u97h-id69NED46VarPSdk31bVH9FUVQ.jpg?r=43c',
      rating: 4.5,
      trailer: ''
    },

    {
      title: 'Jumanji: The Next Level',
      description: `When Spencer goes missing, Martha, Bethany and Fridge realize they must go back into Jumanji to find him — but something goes wrong.`,
      posterURL: 'https://occ-0-7334-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTNaZO_ZbHtOjnK93o2OVw7QfdI4UdtRJsqSQhcGdV1kGAnxVaSMOTe_Ej1noH33cr9he1ErEbE5-HYYCS_7qQOvEGpuYt3vcAo.jpg?r=88e',
      rating: 4.8,
    },

    {
      title: 'The Monkey King',
      description: "A stick-wielding monkey teams with a young girl on an epic quest for immortality, battling demons, dragons, gods — and his own ego — along the way.",
      posterURL: 'https://occ-0-7334-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABahUH4-pDE5QJiEaVoGhXtI823SDmlkt2zRO64UKN_DNAcneLmbCRks8rI_xsuO5yySCaVdor45_VuSchLKrNWz3gT8HaM-4Vlmi267kQm3oIOWc2UtPGTkPg3jvG_NjyLxl.jpg?r=5d9',
      rating: 4.9,

    },

    {
      title: 'Morbius',
      description: 'A biochemist with a rare blood disease in search of a cure injects himself with a dangerous serum that gives him super strength and a thirst for blood.',
      posterURL: 'https://occ-0-7334-32.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdVozig2u8iR0NKqtv2lR888eLN6X8Exwx0wUT1zMMYAuRqc5x3oBq63k5SfbNvwnDRKBUhx-e21qjVNRlCu7lmAZpKIr15QARY.jpg?r=d58',
      rating: 4.5,
    },

    {
      title: 'Wanted',
      description: "After discovering his murdered father belonged to a secret guild of assassins, average guy Wesley hones his innate killer instincts and turns avenger.",
      posterURL:'https://occ-0-7334-32.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbnLVLbmZvfzbr5XjE9z4lniQA5Od9JF9AR6YTDfjRQI_gujq7yTPw89Z8SpHLTpOas-fo-_DMW5EmN_GXzdrXKD8IUpknf9Yuo.jpg?r=0de',
      rating: 4.5,
    },
    
  ]);

  const [filteredMovies, setFilteredMovies] = useState([...movies]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  const filterMovies = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating.toString().includes(rating)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1 className='head'>Movie List</h1>
      <Filter onFilter={filterMovies} />
      <Routes>
        <Route path ='/' element={<MovieList movies={filteredMovies}/>}/>
         <Route path='/Tpage' element={<Video  />} />
        
      </Routes>
      {/* <button onClick={() => addMovie({ title: 'New Movie', description: 'New Description', posterURL: 'newPoster.jpg', rating: 3.0 })}>Add Movie</button> */}
    </div>
  );
};

export default App;









// Checkpoint Objective
// In this checkpoint, we are going to use the movie app we have created in the previous checkpoint and afterward, we will use the router library to route our views.

// Instructions
// We will add a description and the trailer link (embed video link) to the object movie.
// Every time I click on a movie card, it will take me to the movie description and trailer page.
// In the description page, I can navigate back to the home page.