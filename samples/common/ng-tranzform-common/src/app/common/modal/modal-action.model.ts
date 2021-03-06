/**
 * An action to be added to the modal as a button.
 */
export interface ModalAction {
  /**
   * The ID of the action. This will be sent in the event from (action). It can be anything but an enum is recommended.
   */
  id: any;

  /**
   * Text to show on the button to trigger this action.
   */
  text: string;

  /**
   * Disable this action.
   */
  disabled?: boolean;
}
