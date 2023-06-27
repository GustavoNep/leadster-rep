export type Video = {
    id: number;
    videoId: string;
    title: string;
    thumbnail: string;
    description: string;
    downloads: {
        fileName: string;
        downloadLink: string;
    }[];
};