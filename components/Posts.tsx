import { Post } from './Post';
import classes from '../styles/posts.module.scss';
import { IPost } from "../types/types";

interface PostsProps {
    posts: IPost[];
}

function Posts({ posts }: PostsProps) {
    return (
        <div className={classes.blogItems}>
            {posts.length ? (
                posts.map((post) => <Post key={post.id} post={post} />)
            ) : (
                <h1>Посты не найдены</h1>
            )}
        </div>
    );
}

export { Posts };
