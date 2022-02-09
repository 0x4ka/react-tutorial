import React from "react"

export class List extends React.Component {
    render() {
        const { title, hoge } = this.props;
        
        return (
            <div>
                <h4>{ title }</h4>
                <div>this is { hoge } list.</div>
            </div>
        )
    }
}