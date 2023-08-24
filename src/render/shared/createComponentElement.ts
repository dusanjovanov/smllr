import { currentComponent } from "../../currentComponent";
import { MintComponentElement } from "../../elements";
import { filterNodes } from "../../utils";

export const createComponentElement = (el: MintComponentElement) => {
  currentComponent.current = el;
  const elements = filterNodes(el.render(el.props));
  currentComponent.current = undefined;

  elements.forEach((childEl, i) => {
    childEl.parent = el;
    childEl.index = i;
  });

  el.children = elements;
};
