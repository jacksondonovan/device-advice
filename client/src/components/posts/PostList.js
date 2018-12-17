import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {post.title}
            <div className="description">
              {post.description}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>All Articles</h2>
        <ul>
          <div className="ui celled list">{this.renderList()}</div>      
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: Object.values(state.posts) }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
