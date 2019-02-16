import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Table, Button } from 'react-bulma-components'
import { withRouter } from 'react-router-dom'

class PostsTable extends Component {
  static propTypes = {
    userSession: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
  }

  displayAdminOptions(post) {
    return (
      <React.Fragment>
        <Button
          className="mr-one"
          color="warning"
          onClick={() => console.log('clicking the edit button!')}
        >
          Edit
        </Button>
        <Button
          className="mr-one"
          color="info"
          onClick={() => console.log('clicking the view button!')}
        >
          View
        </Button>

        <Button
          color="danger"
          onClick={() => console.log('clicking the delete button!')}
        >
          Delete
        </Button>
      </React.Fragment>
    )
  }

  render() {
    const { posts } = this.props

    return (
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            _.map(posts, (post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{this.displayAdminOptions(post)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    )
  }
}

export default withRouter(PostsTable)