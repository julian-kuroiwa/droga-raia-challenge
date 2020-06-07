import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from './index';

import LogoImg from '../../assets/logo.png';

describe('Header', () => {
  it('should match snapshot', () => {
    const component = mount(<Header />);

    expect(component).toMatchSnapshot();
  });

  it('should have a logo', () => {
    const component = mount(<Header />);

    expect(
      component.containsMatchingElement(
        <img src={LogoImg} alt="Raia Drogasil S.A" />,
      ),
    ).toBeTruthy();
  });

  it('should have a navigation', () => {
    const component = mount(<Header />);

    expect(
      component.containsMatchingElement(
        <nav>
          <ul>
            <li>
              <a href="#">HTML5</a>
            </li>
            <li>
              <a href="#">CSS3</a>
            </li>
            <li>
              <a href="#">Javascript</a>
            </li>
            <li>
              <a href="#">React</a>
            </li>
            <li>
              <a href="#">Redux</a>
            </li>
          </ul>
        </nav>,
      ),
    ).toBeTruthy();
  });
});
