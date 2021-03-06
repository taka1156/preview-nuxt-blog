import { mount } from '@vue/test-utils';
import NavBar from './NavBar.vue';
import { dummyLogo } from '@/__testdata__/testdata.js';

describe('NavBar', () => {
  const navBar = propsData =>
    mount(NavBar, {
      propsData: {
        ...propsData,
        logoText: dummyLogo
      }
    });

  it('NavBar初期値: isOpen, logoText', () => {
    const wrapper = navBar({ isOpen: false });
    // logoText
    expect(wrapper.vm.$options.props.logoText.required).toBe(true);
    expect(wrapper.vm.logoText).toBe(dummyLogo);
    // isOpen
    expect(wrapper.vm.$options.props.isOpen.required).toBe(true);
    expect(wrapper.vm.isOpen).toBe(false);
  });

  it('logoTextが反映されているか', () => {
    const wrapper = navBar({ isOpen: false });
    const navLogo = wrapper.find('.base-logo');
    expect(navLogo.text()).toBe(dummyLogo);
  });

  it('ナビゲーションバーを開く', () => {
    const wrapper = navBar({ isOpen: true });
    const navIconText = wrapper.find('.nav-icon__text');
    expect(wrapper.vm.isOpen).toBe(true);
    expect(navIconText.text()).toBe('CLOSE');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('ナビゲーションバーを閉じる', () => {
    const wrapper = navBar({ isOpen: false });
    const navIconText = wrapper.find('.nav-icon__text');
    expect(wrapper.vm.isOpen).toBe(false);
    expect(navIconText.text()).toBe('NAVI');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
