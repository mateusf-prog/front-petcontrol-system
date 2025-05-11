export function Post(props: any) {
    return (
        <div>
            <strong>Author: {props.author}</strong>
            <p>Post: {props.post}</p>
        </div>
    );
}