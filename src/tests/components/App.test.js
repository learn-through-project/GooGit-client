import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../../components/App';
import ROOT from '../../constants/paths';

it('should redirect to /login when token does not exist', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ROOT]}>
      <Route component={App} />
    </MemoryRouter>
  );

  expect(wrapper.find(App).props().location.pathname).toBe('/login');
});
