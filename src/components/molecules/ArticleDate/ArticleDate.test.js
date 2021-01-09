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

  it('値がpropsに反映されているか', () => {
    const wrapper = articleDate(dummyDate);
    expect(wrapper.vm.date).toBe(dummyDate.date);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('dateFormatメソッド', () => {
    const wrapper = articleDate(dummyDate);
    wrapper.vm.dateFormat(dummyDate);
  });
});
