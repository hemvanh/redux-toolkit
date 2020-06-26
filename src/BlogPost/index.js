import React from 'react';
import { Button, Segment, Card, Image } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBlogPosts } from './redux/blogPostsActions';

export default () => {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.blogPosts);

  console.log(entities);

  return (
    <Segment textAlign='center'>
      <Button onClick={() => dispatch(fetchAllBlogPosts())}>
        Fetch All Blog Posts{' '}
      </Button>
      <Card.Group>
        {entities.map((blogPost) => (
          <Card key={blogPost.id}>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={`https://i.pravatar.cc/30?img=${blogPost.id}`}
              />
              <Card.Header>{blogPost.title}</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>{blogPost.body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Segment>
  );
};
