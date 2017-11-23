import * as React from 'react';
import { ITheme, IStyle, IStyleFunction } from '../../Styling';
import { IRenderFunction, IBaseProps, IComponentAs } from '../../Utilities';
import { IIconProps } from '../Icon/Icon.types';

/**
 * Checkbox class interface.
 */
export interface ICheckbox {
  /** Gets the current checked state. */
  checked: boolean;

  /** Sets focus to the checkbox. */
  focus: () => void;
}

/**
 * Checkbox properties.
 */
export interface ICheckboxProps extends React.ButtonHTMLAttributes<HTMLElement | HTMLInputElement>, IBaseProps {

  /**
 * Optional callback to access the IBreadcrumb interface. Use this instead of ref for accessing
 * the public methods and properties of the component.
 */
  componentRef?: (component: ICheckbox) => void;

  /**
   * Additional class name to provide on the root element, in addition to the ms-Checkbox class.
   */
  className?: string;

  /**
   * Checked state. Mutually exclusive to "defaultChecked". Use this if you control the checked state at a higher
   * level and plan to pass in the correct value based on handling onChange events and re-rendering.
   */
  checked?: boolean;

  /**
   * Default checked state. Mutually exclusive to "checked". Use this if you want an uncontrolled component, and
   * want the Checkbox instance to maintain its own state.
   */
  defaultChecked?: boolean;

  /**
   * Label to display next to the checkbox.
   */
  label?: string;

  /**
   * Disabled state of the checkbox.
   */
  disabled?: boolean;

  /**
   * Callback that is called when the checked value has changed.
   */
  onChange?: (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => void;

  /**
   * Optional input props that will be mixed into the input element, *before* other props are applied. This allows
   * you to extend the input element with additional attributes, such as data-automation-id needed for automation.
   * Note that if you provide, for example, "disabled" as well as "inputProps.disabled", the former will take
   * precedence over the later.
   */
  inputProps?: React.ButtonHTMLAttributes<HTMLElement | HTMLButtonElement>;

  /**
   * Allows you to set the checkbox to be at the before (start) or after (end) the label.
   * @default 'start'
   */
  boxSide?: 'start' | 'end';

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Accessible label for the checkbox.
   */
  ariaLabel?: string;

  /**
   * ID for element that contains label information for the checkbox.
   */
  ariaLabelledBy?: string;

  /**
   * ID for element that provides extended information for the checkbox.
   */
  ariaDescribedBy?: string;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  getStyles?: IStyleFunction<ICheckboxStyleProps, ICheckboxStyles>;

  /**
   * Custom render function for the label.
   */
  onRenderLabel?: IRenderFunction<ICheckboxProps>;

  /**
   * Custom icon props for the check mark rendered by the checkbox
   */
  checkmarkIconProps?: IIconProps;
}

export interface ICheckboxStyleProps {
  theme: ITheme;
  className?: string;
  disabled: boolean | undefined;
  checked: boolean | undefined;
  reversed: boolean | undefined;
}

export interface ICheckboxStyles {
  /**
   * Style for the root element (a button) of the checkbox component in the default enabled/unchecked state.
   */
  root?: IStyle;

  /**
   * Style for the label part (contains the customized checkbox + text) when enabled.
   */
  label?: IStyle;

  /**
   * Style for checkbox in its default unchecked/enabled state.
   */
  checkbox?: IStyle;

  /**
   * Style for the checkmark in the default enabled/unchecked state.
   */
  checkmark?: IStyle;

  /**
   * Style for text appearing with the checkbox in its default enabled state.
   */
  text?: IStyle;
}