import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr } from '../utils/';

describe('<App />', () => {
  it('Should render without error', () => {
    const component = shallow(<App />);
    const wrapper = findByTestAttr(component, 'AppComponent');

    expect(wrapper.length).toBe(1);
  });
});
