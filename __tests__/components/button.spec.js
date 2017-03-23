import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button from '../../src/components/button';

describe('<Button />', () => {
  let wrapper;
  let spy;
  const text = 'Hello Jest!';

  beforeEach(() => {
    spy = jest.fn();

    wrapper = shallow(
      <Button onClick={spy}>
        {text}
      </Button>
    );
  });

  afterEach(() => {
    spy.mockReset();
  });

  it('should render a button', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct children text', () => {
    expect(wrapper.text()).toEqual(text);
  });

  it('should call the `onClick` prop when clicked', () => {
    expect(spy.mock.calls.length).toEqual(0);
    wrapper.find('.btn').simulate('click');
    expect(spy.mock.calls.length).toEqual(1);
  })

  it('should test instance methods', () => {
    const favoriteColor = wrapper.instance().getFavoriteColor();
    expect(favoriteColor).toBe('blue');
  });
});
