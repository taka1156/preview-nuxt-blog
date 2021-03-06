import { mount } from '@vue/test-utils';
import BaseNavIcon from './BaseNavIcon.vue';

// NavIcon
describe('BaseNavIcon', () => {
  const navIcon = propsData =>
    mount(BaseNavIcon, {
      slots: {
        default: 'NAVI'
      },
      propsData: {
        ...propsData
      }
    });

  it('開いた時(閉じるアイコン表示)', () => {
    const wrapper = navIcon({ isOpen: true });
    const TOP = wrapper.find('.nav-icon__top');
    const MIDDLE = wrapper.find('.nav-icon__middle');
    const BOTTOM = wrapper.find('.nav-icon__bottom');
    expect(TOP.classes()).toContain('nav-icon__top--open');
    expect(MIDDLE.classes()).toContain('nav-icon__middle--fade');
    expect(BOTTOM.classes()).toContain('nav-icon__bottom--open');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('閉じる時(開くアイコン表示)', () => {
    const wrapper = navIcon({ isOpen: false });
    const TOP = wrapper.find('.nav-icon__top');
    const MIDDLE = wrapper.find('.nav-icon__middle');
    const BOTTOM = wrapper.find('.nav-icon__bottom');
    expect(TOP.classes()).toContain('nav-icon__top--close');
    expect(MIDDLE.classes()).not.toContain('nav-icon__middle--fade');
    expect(BOTTOM.classes()).toContain('nav-icon__bottom--close');
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('btnClickを実行した時、`btn-click`のイベントが発生するか', () => {
    const wrapper = navIcon({ isOpen: false });
    wrapper.vm.btnClick();
    expect(wrapper.emitted('btn-click')).toBeTruthy();
  });
});
