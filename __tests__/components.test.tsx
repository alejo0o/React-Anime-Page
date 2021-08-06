import * as React from 'react';
import {
  render,
  RenderResult,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import Card from '../src/components/cards';
import Navbar from '../src/components/navbar';
import LogIn from '../src/components/login';
import { card_info } from '../__mocks__/mock.data';
import userEvent from '@testing-library/user-event';
import { AppWrapper } from '../src/components/context';

let documentBody: RenderResult;

describe('Testing Navbar', () => {
  documentBody = render(
    <Navbar>
      <div></div>
    </Navbar>
  );
  it('should render the navbar', () => {
    expect(documentBody.getByText('Animes')).toBeInTheDocument();
  });
});

describe('Testing Card component', () => {
  it('should render the card with information', () => {
    documentBody = render(<Card anime={card_info} cardWidth='2xl' />);
    expect(
      documentBody.getByText(card_info.canonicalTitle)
    ).toBeInTheDocument();
    expect(documentBody.getByText(card_info.showType)).toBeInTheDocument();
    expect(documentBody.getByText(card_info.status)).toBeInTheDocument();
  });
});

describe('Testing Login behavior', () => {
  it('should allow user to log into the app', () => {
    //Arrange
    const username = 'Alejandro',
      email = 'alejo@stackbuilders.com';

    //Act
    render(
      <AppWrapper>
        <Navbar>
          <></>
        </Navbar>
      </AppWrapper>
    );

    userEvent.click(screen.getByText('Log In'));
    userEvent.type(screen.getByPlaceholderText('Username'), username);
    userEvent.type(screen.getByPlaceholderText('Email'), email);
    //Assert
    expect(screen.getByLabelText('Create your account')).toBeInTheDocument();

    //Act
    userEvent.click(screen.getByTestId('login-button')); //usar within

    //Assert
    waitFor(() => {
      screen.getByText('Welcome Alejandro');
      screen.getByText('Log Out');
    });
  });
});
