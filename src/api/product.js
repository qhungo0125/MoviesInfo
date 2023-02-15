import axiosClient from "./axiosClient";

const product = {
  get250Movies: () => {
    let url =
      process.env.REACT_APP_API_KEY === "false"
        ? "/250movies.json"
        : `/Top250Movies/${process.env.REACT_APP_API_KEY}`;
    return axiosClient.get(url);
  },
  getInTheater: () => {
    let url =
      process.env.REACT_APP_API_KEY === "false"
        ? "/Intheaters.json"
        : `/InTheaters/${process.env.REACT_APP_API_KEY}`;
    return axiosClient.get(url);
  },
  getMostPopular: () => {
    let url =
      process.env.REACT_APP_API_KEY === "false"
        ? "/MostPopular.json"
        : `/MostPopularMovies/${process.env.REACT_APP_API_KEY}`;
    return axiosClient.get(url);
  },
  getSearchFilm: (filmName) => {
    let url =
      process.env.REACT_APP_API_KEY === "false"
        ? "/search_batman.json"
        : `/SearchTitle/${process.env.REACT_APP_API_KEY}/${filmName}`;

    return axiosClient.get(url);
  },
  getSearchActors: (actorName) => {
    let url =
      process.env.REACT_APP_API_KEY === "false"
        ? "/SearchJeanReno.json"
        : `/SearchName/${process.env.REACT_APP_API_KEY}/${actorName}`;

    return axiosClient.get(url);
  },
  getFilmById: (id) => {
    let url =
      process.env.REACT_APP_API_KEY === "false"
        ? "/FilmFullType.json"
        : `/Title/${process.env.REACT_APP_API_KEY}/${id}`;

    return axiosClient.get(url);
  },
  getProfileById: (id) => {
    let url =
      process.env.REACT_APP_API_KEY === "false"
        ? "/search_Jamie Lee Curtis.json"
        : `/Name/${process.env.REACT_APP_API_KEY}/${id}`;
    console.log(`/Name/${process.env.REACT_APP_API_KEY}/${id}`);
    return axiosClient.get(url);
  },
};

export default product;
