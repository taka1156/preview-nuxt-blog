import { mount } from '@vue/test-utils';
import IndexNav from './IndexNav.vue';

describe('IndexNav', () => {
  const indexNav = propsData => {
    return mount(IndexNav, {
      slots: {
        default: 'TEXT'
      },
      propsData: {
        ...propsData
      }
    });
  };

  it('IndexNav初期値: isOpen', () => {
    const wrapper = indexNav({ isOpen: false });
    // isOpen
    expect(wrapper.vm.$options.props.isOpen.required).toBe(true);
    expect(wrapper.vm.isOpen).toBe(false);
  });

  it('ナビゲーションバーを開く', () => {
    const wrapper = indexNav({ isOpen: true });
    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('ナビゲーションバーを閉じる', () => {
    const wrapper = indexNav({ isOpen: false });
    expect(wrapper.vm.isOpen).toBe(false);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
