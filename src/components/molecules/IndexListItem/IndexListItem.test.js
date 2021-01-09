import { shallowMount } from '@vue/test-utils';
import IndexListItem from './IndexListItem.vue';
import { dummyTocs } from '@/__testdata__/testdata.js';

describe('IndexList', () => {
  const indexListItem = propsData =>
    shallowMount(IndexListItem, {
      propsData: {
        ...propsData
      }
    });

  it('IndexListItem初期値: t', () => {
    const wrapper = indexListItem({ t: dummyTocs[0] });
    // t
    expect(wrapper.vm.$options.props.t.required).toBe(true);
    expect(wrapper.vm.t).toBe(dummyTocs[0]);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
