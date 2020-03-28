import React, { Component } from 'react';
import styled from 'react-emotion';

import Button from '@material-ui/core/Button';
import space from '../assets/images/space.jpg';
import { colors, unit } from '../styles';

interface loginVariables {
  email: string;
}

interface LoginFormProps {
  login: (a: { variables: loginVariables }) => void;
}

interface LoginFormState {
  email: string;
}

export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
  state = { email: '' };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = (event.target as HTMLInputElement).value;
    this.setState(s => ({ email }));
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.login({ variables: { email: this.state.email } });
  };

  render() {
    return (
      <Container>
        <Heading>Vocab Learner</Heading>
        <StyledForm onSubmit={(e) => this.onSubmit(e)}>
          <StyledInput
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => this.onChange(e)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
        </StyledForm>
      </Container>
    );
  }
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  paddingBottom: unit * 6,
  color: 'white',
  backgroundColor: colors.primary,
  backgroundImage: `url(${space})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const Heading = styled('h1')({
  margin: `${unit * 3}px 0 ${unit * 6}px`,
});

const StyledForm = styled('form')({
  width: '100%',
  maxWidth: 406,
  padding: unit * 3.5,
  borderRadius: 3,
  boxShadow: '6px 6px 1px rgba(0, 0, 0, 0.25)',
  color: colors.text,
  backgroundColor: 'white',
});

const StyledInput = styled('input')({
  width: '100%',
  marginBottom: unit * 2,
  padding: `${unit * 1.25}px ${unit * 2.5}px`,
  border: `1px solid ${colors.grey}`,
  fontSize: 16,
  outline: 'none',
  ':focus': {
    borderColor: colors.primary,
  },
});
