import React, {Fragment} from 'react';
import {Button, Comment, Form, Header, Segment} from "semantic-ui-react";

const ActivityDetailedChat = () => {
    return (
        <Fragment>
            <Segment textAlign='center' attached='top' inverted color='teal' style={{border: 'none'}}>
                <Header>
                    Chat about this event
                </Header>
            </Segment>
            <Segment attached>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Nyben</Comment.Author>
                            <Comment.Metadata>
                                <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>How artistic!</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
                        <Comment.Content>
                            <Comment.Author as='a'>Awumen</Comment.Author>
                            <Comment.Metadata>
                                <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Dude this is awesome thank you very much</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea/>
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
                    </Form>
                </Comment.Group>
            </Segment>
        </Fragment>
    );
}

export default ActivityDetailedChat;
