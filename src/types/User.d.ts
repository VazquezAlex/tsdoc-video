/**
 * User type to be used on task ownership, orders, etc. This is the
 * default model for any user on the app.
 *
 * @remarks
 * Dont use this model for authentication.
 *
 * @since 2.0.1
 *
 * @interface
 *
 * @property
 */
export interface User {
  name: string;
  lastName: string;

  /**
   * Shows if the user belongs to PRO account members.
   * @type {boolean}
   * @default false
   * @example true
   */
  isPro?: string;

  email: string;
}
