import { shallowMount } from '@vue/test-utils';
import ArticleDate from './ArticleDate.vue';
import { dummyDate } from '@/__testdata__/testdata.js';

describe('ArticleDate', () => {
  const articleDate = propsData =>
    shallowMount(ArticleDate, {
      propsData: {
        ...propsData
      }
    });

  it('ArticleDate初期値: createdAt, updatedAt', () => {
    const wrapper = articleDate(dummyDate);
    // createdAt
    expect(wrapper.vm.$options.props.createdAt.required).toBe(true);
    expect(wrapper.vm.createdAt).toBe(dummyDate.createdAt);
    // updatedAt
    expect(wrapper.vm.$options.props.updatedAt.required).toBe(true);
    expect(wrapper.vm.updatedAt).toBe(dummyDate.updatedAt);
    // スナップショット
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('dateFormatメソッド', () => {
    const wrapper = articleDate(dummyDate);
    expect(wrapper.vm.dateFormat(dummyDate.createdAt)).toBe('2020/7/4');
    expect(wrapper.vm.dateFormat(undefined)).toBe('--/--/--');
  });
});
