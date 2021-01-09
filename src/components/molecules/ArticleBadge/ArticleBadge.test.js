import { shallowMount } from '@vue/test-utils';
import ArticleBadge from './ArticleBadge.vue';
import { dummyCategoryBadge, dummyTagBadge } from '@/__testdata__/testdata.js';

describe('ArticleBadge', () => {
  const articleBadge = propsData =>
    shallowMount(ArticleBadge, {
      propsData: {
        ...propsData
      }
    });

  it('値がpropsに反映されているか: CategoryBadge', () => {
    const wrapper = articleBadge(dummyCategoryBadge);
    expect(wrapper.vm.badge).toBe(dummyCategoryBadge.badge);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('値がpropsに反映されているか: TagBadge', () => {
    const wrapper = articleBadge(dummyTagBadge);
    expect(wrapper.vm.badge).toBe(dummyTagBadge.badge);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
