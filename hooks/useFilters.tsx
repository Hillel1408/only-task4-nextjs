import { IOptions, IPost } from '../types/types';
import { useMemo, useRef} from 'react'

export const useFilters = (posts: IPost[], options: IOptions): IPost[] => {
    const filter = useRef<IPost[]>([])

    filter.current = useMemo(() => {
        return posts.filter((item) => {
            return item[options.filter.name as keyof Omit<IPost, 'id' | 'image'>]
                .toLowerCase()
                .includes(options.filter.value);
        });
    }, [options.filter])

    useMemo(() => {
        switch (options.sort) {
            case 'ASC':
                return filter.current.sort((a, b) => a.id - b.id);
            case 'DESC':
                return filter.current.sort((a, b) => b.id - a.id);
        }
    }, [options.sort])

    return filter.current
}