'use strict';

// outer function is removed from global scope after musicListener declared
const audioPlayer = function (playList) {
    let currentTrack = 0;

    return function () {
        currentTrack = ++currentTrack >= playList.length ? 0 : currentTrack;
        console.log('Currently played:', playList[currentTrack]);
    }
}

// this is in global scope
const favoriteSongs = ['Nightwish - Wishmaster', 'Linkin Park - In the End', 'Eminem - Business'];
const musicListener = audioPlayer(favoriteSongs);

// musicListener should not have access to currentTrack, but it does due to closures
// when a new function created it will have access to all the already existing variables within its parent context
musicListener();
musicListener();

// closure is a feature in JS that allows inner functions to access data of outer functions even after the outer function fully executed
