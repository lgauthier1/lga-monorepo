/**
 * @vitest-environment happy-dom
 */

import { mount } from '@vue/test-utils'
import App from './App.vue'
import { describe, expect, test } from 'vitest'

describe('App.vue', () => {
  test('Test Project Name', () => {
    const wrapper = mount(App, {})
    expect(wrapper.find('h1').text()).toBe('Projet Two')
  })
})
