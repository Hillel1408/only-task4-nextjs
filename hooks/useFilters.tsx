import { IOptions, IPost } from '../types/types';

export const useFilter = (posts: IPost[], options: IOptions): IPost[] | undefined => {

    const filter = posts.filter((item) => {
        return item[options.filter.name as keyof Omit<IPost, 'id' | 'image'>]
            .toLowerCase()
            .includes(options.filter.value.toLowerCase());
    });

    switch (options.sort) {
        case 'ASC':
            return [...filter].sort((a, b) => a.id - b.id);
        case 'DESC':
            return [...filter].sort((a, b) => b.id - a.id);
    }
    return
};
