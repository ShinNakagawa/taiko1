export class Song {
    id?: string;
    userid?: string;
    name?: string;
    imageUrl?: string;
    description?: string;
    date?: Date = new Date();
    fullVideoID?: string;
    playListID?: string;
}
