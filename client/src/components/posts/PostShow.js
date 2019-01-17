import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    if(!this.props.post) {
      return <div></div>
    }
    return (
      <div>
        <Link to="/" className="ui button">Back</Link>
        <h3>Post Details</h3>
        <h5>{this.props.post.title}</h5>
        <h5>{this.props.post.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
