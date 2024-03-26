import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Button from "./Button.vue";

describe("Button.vue", () => {
  it("emits a click event when clicked", async () => {
    const wrapper = mount(Button);

    await wrapper.find("button").trigger("click");

    // Avec Vitest, l'utilisation de expect reste très similaire
    expect(wrapper.emitted()).toHaveProperty("click");
  });

  it("has the correct default btnType", () => {
    const wrapper = mount(Button);

    // L'assertion reste inchangée ici aussi
    expect(wrapper.props().btnType).toBe("primary");
  });

  it("renders the correct btnType", async () => {
    const wrapper = mount(Button, {
      props: {
        btnType: "secondary",
      },
    });

    // Pas de changement nécessaire pour cette assertion
    expect(wrapper.find("button").classes()).toContain("secondary");
  });
});
