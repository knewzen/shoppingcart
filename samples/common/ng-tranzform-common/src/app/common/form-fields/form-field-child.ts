/**
 * Base class for common form fields.
 */
export class FormFieldChild {
  /**
   * Disable this field.
   */
  disabled: boolean;

  /**
   * Make this field disabled. This method can be overridden to add additional logic for disabling children, etc.
   * @param disabled Disable the field.
   */
  setDisabled (disabled: boolean) {
    this.disabled = disabled;
  }
}
