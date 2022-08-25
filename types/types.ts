export interface IPost {
    id: number;
    title: string;
    description: string;
    img: string;
}

export interface IOptions {
    sort: string;
    filter: {
        name: string;
        value: string;
    };
}
