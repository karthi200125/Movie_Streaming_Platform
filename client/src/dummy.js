import test from './Assets/img1.jpg';
import avatar from './Assets/avatar.jpg';
import avengers from './Assets/avengers.jpg';
import joker from './Assets/joker.jpg';
import redsona from './Assets/redsona.jpg';
import xmen from './Assets/xmen.jpg';
import dacula from './Assets/dacula.jpg';
import bp from './Assets/bp.jpg';
import iron from './Assets/iron.jpg';
import avengervideo from './Assets/trailer/avemgers.mp4'
import darkvideo from './Assets/trailer/dark.mp4'
import avatarvideo from './Assets/trailer/avatar.mp4'

export const MOVIES = [
    { id: 0, name: 'Avatar', img: avatar, tailer: avatarvideo, year: 2009, genre: ['Action', 'Adventure', 'Fantasy'], language: '4' },
    { id: 1, name: 'Avengers', img: avengers, tailer: avengervideo, year: 2012, genre: ['Action', 'Adventure', 'Sci-Fi'], language: '5' },
    { id: 2, name: 'The Dark Knight', img: joker, tailer: darkvideo, year: 2008, genre: ['Action', 'Crime', 'Drama'], language: '5' },
    { id: 3, name: 'Inception', img: redsona, year: 2010, genre: ['Action', 'Adventure', 'Sci-Fi'], language: '5' },
    { id: 4, name: 'Interstellar', img: dacula, year: 2014, genre: ['Adventure', 'Drama', 'Sci-Fi'], language: '5' },
    { id: 5, name: 'Pulp Fiction', img: bp, year: 1994, genre: ['Crime', 'Drama'], language: '5' },
    { id: 6, name: 'The Shawshank Redemption', img: iron, year: 1994, genre: ['Drama'], language: '5' },
    { id: 7, name: 'The Godfather', img: xmen, year: 1972, genre: ['Crime', 'Drama'], language: '5' },
];
