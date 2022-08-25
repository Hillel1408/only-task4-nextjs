import Link from 'next/link';
import classes from '../styles/posts.module.scss';
import { IPost } from '../types/types';

interface PostProps {
    post: IPost;
}

function Post({ post }: PostProps) {
    return (
        <div className={classes.blogItems__item}>
            <div className={classes.blogItems__itemImg}>
                <img src={post.img} alt={post.title} />
            </div>
            <div className={classes.blogItems__itemContent}>
                <h2>{post.title}</h2>
                <p>{post.description.slice(0, 530)}...</p>
                <Link href={`/post/${post.id}`}>
                    <a className="btn">Подробнее</a>
                </Link>
            </div>
        </div>
    );
}

export { Post };
