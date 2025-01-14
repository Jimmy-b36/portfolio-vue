import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import CardFront from '../projects/CardFront.vue'

describe('CardFront', () => {
  it('renders properly', () => {
    const wrapper = mount(CardFront)
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
