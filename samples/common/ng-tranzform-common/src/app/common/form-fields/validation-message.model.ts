/**
 * A message to be shown when a validator is invalid.
 */
export interface ValidationMessage {
  /**
   * The validator to tie this message to.
   */
  validator: string;

  /**
   * Message to show.
   */
  message: string;
}
