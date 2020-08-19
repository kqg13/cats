import React from 'react';

class CatCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); // grid-auto-rows allocates 10pxs to each row
    this.setState({spans});
  }

  render () {
    const { id, url } = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={url} alt={id}/>
      </div>
    );
  }
}

export default CatCard;
