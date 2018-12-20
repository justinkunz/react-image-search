import React from 'react';

class imageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 }
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height / 10)
        console.log(spans)
        this.setState({ spans })
    }

    render() {

        const { description, urls, id } = this.props.image
        return (

            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img key={id} ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
};
export default imageCard;