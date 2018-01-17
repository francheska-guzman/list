// Using the 'I' prefex to distinguish the interface.
// Defines custom types to avoid syntax error.
export interface ISong {
    songId: number;
    songName: string;
    time: string;
    artist: string;
    album: string;
    releaseDate: number;
    genre: string;
    starRating: number;
    imageUrl: string;
    songUrl: string;
    songLyrics: string;
}
