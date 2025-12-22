export {};

/**
 * Connector for NPO Radio 2
 * Verified with live track: Red Box - For America
 */

Connector.playerSelector = '#__next';

Connector.getArtistTrack = () => {
	// The song title is the more specific paragraph
	const track = Util.getTextFromSelectors('.sc-425d5a34-7');
	
	// The artist is in the paragraph that lacks the song-specific class
	// We use a CSS :not selector to distinguish them
	const artist = Util.getTextFromSelectors('.sc-425d5a34-0 p.fPMiJp:not(.sc-425d5a34-7)');

	// Logic to ignore DJ names/Station names
	const filter = ['Annemieke Schollaardt',
	'Bart Arens',
	'Carolien Borgers',
	'Corné Klijn',
	'Daniël Lippens',
	'Desiree van der Heiden',
	'Dolf Jansen',
	'Eddy Keur',
	'Emmely de Wilt',
	'Evelien de Bruijn',
	'Gijs Hakkert',
	'Jan-Willem Roodbeen',
	'Jasper de Vries',
	'Jeroen Kijk in de Vegte',
	'Jeroen van Inkel',
	'Klaas van Kruistum',
	'Leo Blokhuis',
	'Morad El Ouakili',
	'Obi Raaijmaakers',
	'Paul Rabbering',
	'Ruud de Wild',
	'Shay Kreuger',
	'Tannaz Hajeby',
	'Thomas Hekker',
	'Tim Op het Broek',
	'Willemijn Veenhoven',
	'NPO Radio 2',]; // Add DJs as needed
  
	
	if (artist && filter.includes(artist)) {
		return null;
	}

	return { artist, track };
};

// Selects the album art for the current song
Connector.trackArtSelector = '.sc-d00cd6bf-2 img';

// Uses the Bitmovin player state found in your HTML
Connector.isPlaying = () => {
	return Util.hasElementClass('.bmpui-npo-player', 'bmpui-player-state-playing');
};
