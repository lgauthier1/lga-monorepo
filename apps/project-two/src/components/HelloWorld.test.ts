/**
 * @vitest-environment happy-dom
 */

import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";
import { describe, expect, test } from "vitest";

describe("helloWorld.vue", () => {
  test("renders the correct message", () => {
    const message = "Hello LGA";
    const wrapper = mount(HelloWorld, {
      props: { msg: message },
    });
    expect(wrapper.find("h1").text()).toBe(message);
  });
});
