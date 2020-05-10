import React from "react";
import styles from "./comment.module.css";

export default class Comment extends React.PureComponent {
    render() {
        const {value} = this.props;
        return (
            <pre className={styles.container}>
                {value}
            </pre>
        )
    }
}