import axios from "axios";

export const getGeneralInfo = (id) => axios.get(`https://rickandmortyapi.com/api/location/${id}`);

export const getResidentsInfo = (url) => axios.get(`${url}`);