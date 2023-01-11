import { shallow } from 'enzyme'
import MeetupItem from './index'

test('<MeetupItem/> renders without crashing', () => {
  const wrapper = shallow(<MeetupItem />)
  expect(wrapper.exists()).toBe(true)
})
