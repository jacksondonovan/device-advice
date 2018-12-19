import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, editPost } from '../../actions';
import PostForm from './PostForm';

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editPost(this.props.match.params.id, formValues);
  }

  render() {
    if(!this.props.post) {
      return <div></div>
    }
    return (
      <div>
        <h3>Edit Your Post</h3>
        <PostForm
          initialValues={this.props.post}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps, { fetchPost, editPost })(PostEdit);
