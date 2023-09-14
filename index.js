const customVinylData = {
  'ts-midnights': 'Midnights (The Til Dawn Edition)',
  'ts-red': "Red (Taylor's Version)",
  'ts-lover': "Lover",
}

const customVinyl = (albumArt, album, className, albumName) => {
  if (albumName[0].innerHTML === album) {
    albumArt.classList.add(className);
  } else {
    albumArt.classList.remove(className);
  }
}

 const AllCustomVinyl = (albumArt, albumName) => {
  if (null === albumName) {
    return;
  }
  Object.keys(customVinylData).forEach(key => {
    customVinyl(albumArt, customVinylData[key], key, albumName);
  });
}

const vinylSpin = (playingElement, albumArt) => {
  if (playingElement.length > 0) {
    albumArt.classList.add("now-playing");
  } else {
    albumArt.classList.remove("now-playing");
  }
}

const isPlaylist = () => {
  const pageElement = document.querySelectorAll('section[data-testid="playlist-page"]');
  return pageElement.length !== 0;
}

const isAlbum = () => {
  const pageElement = document.querySelectorAll('section[data-testid="album-page"]');
  return pageElement.length !== 0;
}

const vinylChecks = () => {
  if (isAlbum()) {
    const playingElement = document.querySelectorAll('div[data-testid="track-list"] div[data-testid="tracklist-row"] div[role="gridcell"] > div > img');
    const albumArt = document.querySelector('[data-testid="album-page"] .contentSpacing > button div');
    const albumName = document.querySelectorAll('div[data-testid="track-list"] div[data-testid="tracklist-row"] div[role="gridcell"] > span > a');
    vinylSpin(playingElement, albumArt);
    AllCustomVinyl(albumArt, albumName);
  }

  if (isPlaylist()) { 
    const playingElement = document.querySelectorAll('div[data-testid="playlist-tracklist"] div[data-testid="tracklist-row"] div[role="gridcell"] > div > img');
    const albumArt = document.querySelector('[data-testid="playlist-page"] .contentSpacing > div:nth-child(4)'); 
    const albumName = document.querySelectorAll('div[data-testid="playlist-tracklist"] div[data-testid="tracklist-row"] div[role="gridcell"] > span > a');
    vinylSpin(playingElement, albumArt );
    AllCustomVinyl(albumArt, albumName);
  }
};

export default {
    vinylChecks
};