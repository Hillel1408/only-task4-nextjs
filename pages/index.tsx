import { useState, useEffect } from 'react';
import { Posts } from '../components/Posts';
import { Search } from '../components/Search';
import { useFilters } from '../hooks/useFilters';
import { IPost } from "../types/types";

interface IndexPageProps {
    data: IPost[];
}

export default function Home({ data }: IndexPageProps ) {
    const [options, setOptions] = useState({
        sort: 'ASC',
        filter: {
            value: '',
            name: 'description',
        },
    });
    
    const filteredPosts = useFilters(data, options);
    
    return (
        <div className="wrapper">
            <Search options={options} setOptions={setOptions} />
            {filteredPosts && <Posts posts={filteredPosts} />}
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
