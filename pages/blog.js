import Link from "next/link"

export default function Blog(props) {
    return (
        <>
            <h2>The blog page</h2>
            {props.posts.map((post, index) => {
                return (
                    <div key={index}>
                        <h3>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.content}</p>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("http://localhost:4000/posts")
    const data = await response.json()
    return {
        props: {
            posts: data,
        },
        revalidate: 10,
    }
}