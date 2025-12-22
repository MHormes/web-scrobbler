export {};

const DJ_LIST = [
	'Annemieke Schollaardt', 'Bart Arens', 'Carolien Borgers', 'Corné Klijn',
	'Daniël Lippens', 'Desiree van der Heiden', 'Dolf Jansen', 'Eddy Keur',
	'Emmely de Wilt', 'Evelien de Bruijn', 'Gijs Hakkert', 'Jan-Willem Roodbeen',
	'Jasper de Vries', 'Jeroen Kijk in de Vegte', 'Jeroen van Inkel',
	'Klaas van Kruistum', 'Leo Blokhuis', 'Morad El Ouakili', 'Obi Raaijmaakers',
	'Paul Rabbering', 'Ruud de Wild', 'Shay Kreuger', 'Tannaz Hajeby',
	'Thomas Hekker', 'Tim Op het Broek', 'Willemijn Veenhoven', 'NPO Radio 2'
];

Connector.playerSelector = '#__next';

Connector.getArtistTrack = () => {
	let track = Util.getTextFromSelectors('.sc-425d5a34-7');
	let artist = Util.getTextFromSelectors('p.fPMiJp:not(.sc-425d5a34-7)');

	if (artist) {
		// Clean up station name if it's appended to the artist
		artist = artist.replace(/\s-\sNPO\sRadio\s2/i, '');

		// Ignore if it's a DJ
		if (DJ_LIST.some(dj => dj.toLowerCase() === artist.toLowerCase())) {
			return null;
		}
	}

	return { artist, track };
};

Connector.trackArtSelector = '.sc-d00cd6bf-2 img';

Connector.isPlaying = () => {
	return Util.hasElementClass('.bmpui-npo-player', 'bmpui-player-state-playing');
};