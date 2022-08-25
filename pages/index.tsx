import { useState, useEffect } from 'react';
import { Posts } from '../components/Posts';
import { Search } from '../components/Search';
import { useFilter } from '../hooks/useFilters';
import { IOptions, IPost } from "../types/types";

interface IndexPageProps {
    data: IPost[];
}

export default function Home({ data }: IndexPageProps ) {
    const [options, setOptions] = useState<IOptions>({
        sort: 'ASC',
        filter: {
            value: '',
            name: 'description',
        },
    });

    const [posts, setPosts] = useState<IPost[]>();

    useEffect(() => {
        setPosts(useFilter(data, options));
    }, [options]);

    return (
        <div className="wrapper">
            <Search options={options} setOptions={setOptions} />
            {posts && <Posts posts={posts} />}
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/posts');
    const data: IPost[] = await res.json();
    return {
        props: {
            data,
        },
    };
}
