import { shallowMount } from '@vue/test-utils';
import IndexList from './IndexList.vue';
import { dummyTocs } from '@/__testdata__/testdata.js';

describe('IndexList', () => {
  const indexList = propsData =>
    shallowMount(IndexList, {
      propsData: {
        ...propsData
      }
    });

  it('IndexList初期値: isOpen, toc', () => {
    const wrapper = indexList({ isOpen: false, toc: dummyTocs });
    // isOpen
    expect(wrapper.vm.$options.props.isOpen.required).toBe(true);
    expect(wrapper.vm.isOpen).toBe(false);
    // toc
    expect(wrapper.vm.$options.props.toc.required).toBe(true);
    expect(wrapper.vm.toc).toBe(dummyTocs);
  });

  it('isOpenがtrueの時に`index-list`が表示', () => {
    const wrapper = indexList({ isOpen: true, toc: dummyTocs });
    expect(wrapper.find('.index-list').element.style.display).not.toBe('none');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('isOpenがfalseの時に`index-list`が非表示', () => {
    const wrapper = indexList({ isOpen: false, toc: dummyTocs });
    expect(wrapper.find('.index-list').element.style.display).toBe('none');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('changeStateを実行した時、`change-state`のイベントが発生するか', () => {
    const wrapper = indexList({ isOpen: true, toc: dummyTocs });
    wrapper.vm.changeState();
    expect(wrapper.emitted('change-state')).toBeTruthy();
  });
});
