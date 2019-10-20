import { LitElement, customElement, property } from "lit-element";

import style from "./style";
import template from "./template";

@customElement("grid-component")
export class GridComponent extends LitElement {
  @property() public columns: string;
  @property() public gap: string;

  public static styles = style;
  public render = template.bind(this);

  public firstUpdated() {
    if (this.gap) this.style.setProperty("grid-gap", `${this.gap}`);
    if (this.columns)
      this.style.setProperty(
        "grid-template-columns",
        `repeat(${this.columns}, 1fr)`
      );
  }
}
