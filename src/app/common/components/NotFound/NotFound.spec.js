import { shallow } from 'enzyme';
import NotFound from './index';
import { findByTestAttr } from '../../../../../utils';

describe('<NotFound />', () => {
    it('Should render without error', () => {
      const component = shallow(<NotFound />);
      const wrapper = findByTestAttr(component, 'NotFoundComponent');
  
      expect(wrapper.length).toBe(1);
    });
  });