import axios from "axios";

import { axiosGetCancellable } from "../helpers/axios.helper"

const axiosConfig = {
    baseURL: 'https://api.github.com',
    auth: {
        username: process.env.GITHUB_CLIENT_ID,
        password: process.env.GITHUB_CLIENT_SECRET
    }
};

function searchRepos(searchText, lang = 'all') {
    const query = lang ? `${searchText}+language:${lang}` : searchText;
    
    // return axios.get(
    //     `/search/repositories?q=${query}&sort=stars&order=desc`,
    //     axiosConfig
    // );
    
    if (isServer()) {
        return axios.get(
          `search/repositories?q=${query}&sort=stars&order=desc`,
          axiosConfig
        );
    }
    
    return axiosGetCancellable(`api/search?q=${query}&sort=stars&order=desc`, undefined);
}

function getRepo(id) {
    return axios.get(`repositories/${id}`, axiosConfig);
}

function getProfile(username) {
    return axios.get(`users/${username}`, axiosConfig);
}


function isServer() {
    return typeof window === 'undefined';
}

export { searchRepos, getRepo, getProfile };
