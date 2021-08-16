import { Component, Prop, h } from '@stencil/core';
import { JSX } from '@stencil/core/internal';

@Component({
  tag: 'fa-icon',
  styleUrl: '../../assets/fontawesome/css/all.css',
  shadow: true,
})
export class AppNav {
  /**
   * The icon name. If the name does not start with "fa-", it will be prefixed with it.
   */
  @Prop() iconName: string;

  /**
   * Which style of icon set to load from.
   */
  @Prop() iconStyle: 'fa' | 'fas' = 'fa';

  private getIconName(): string {
    const { iconName } = this;

    if (iconName.match(/^fa-[a-z0-9]+$/i) != null) {
      return iconName;
    }

    return `fa-${iconName}`;
  }

  render(): JSX.Element {
    const name = this.getIconName();
    const style = this.iconStyle;

    return <i class={{ [style]: true, [name]: true }}></i>;
  }
}
