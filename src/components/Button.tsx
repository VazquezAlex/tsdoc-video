/**
 * Types of styles accepted by the Button.
 * @enum
 */
export enum ButtonStyle {
  PRIMARY = "primary",
  SECONDAY = 'secondary',
  TERTIARY = 'tertiary',
  DANGER = 'danger',
  WARNING = 'warning',
  SUCCESS = 'success',
  INFO = 'info',
}

/**
 * Props for the Button component.
 * @interface
 */
export interface ButtonProps {
  /**
   * Text to be displayed on the button.
   * @type string
   */
  label: string;
  
  /**
   * Sets if the button should be disabled.
   * @default false
   * @type boolean
  */
  disabled?: boolean;

  /**
   * Sets the style of the button.
   * @default ButtonStyle.PRIMARY
   * @type ButtonStyle
   */
  style?: ButtonStyle,
}

/**
 * Button component with company styling.
 * @since 2.0.0
 * @param { ButtonProps } props - Properties to build the button.
 * @returns {JSX.Element} Customizable button.
 * 
 * @example
 * ```tsx
 * <Button label="Delete" />
 * ```
 * 
 * @example
 * ```tsx
 * <Button label="Delete" disabled={true} />
 * ```
 * 
 * @example
 * ```tsx
 * <Button label="Delete" style={ButtonStyle.DANGER} />
 * ```
 */
const Button = ({ 
  label, 
  disabled = false,
  style = ButtonStyle.PRIMARY,
}: ButtonProps): JSX.Element => {

  return (
    <button
      disabled={disabled}
    >
      { label }
    </button>
  );
};

export default Button;
