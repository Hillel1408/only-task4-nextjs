import Router from 'next/router';
import classes from '../../styles/post.module.scss';
import classNames from 'classnames';
import { NextPageContext } from 'next';
import { IPost } from "../../types/types";

interface PostPageProps {
    data: IPost
}

export default function Post({ data }: PostPageProps) {
    return (
        <div className="wrapper">
            <div className={classes.blogPost}>
                <button
                    className={classNames('btn', classes.blogPost__btn)}
                    onClick={() => Router.back()}
                >
                    На главную
                </button>
                <div className={classes.blogPost__img}>
                    <img src={data.img} alt={data.title} />
                </div>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

Post.getInitialProps = async ({ query }: NextPageContext) => {
    const res = await fetch(`http://localhost:3000/api/posts/${query.id}`);
    const data: IPost = await res.json();
    return {
        data,
    };
};
