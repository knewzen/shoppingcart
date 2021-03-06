/**
 * Define a computed date range available for the user to select.
 */
export interface PredefinedDateRange {
  /**
   * Text to display for this option.
   */
  text: string;

  /**
   * The start date.
   *
   * If undefined, the date will be today.
   * If a Date, that will be the date.
   * If an object, the date will be computed based on today's date.
   */
  start?: Date | {
    offset: number,
    unit: 'year' | 'month' | 'week' | 'day',
  };

  /**
   * The end date.
   *
   * If undefined, the date will be today.
   * If a Date, that will be the date.
   * If an object, the date will be computed based on today's date.
   */
  end?: Date | {
    offset: number,
    unit: 'year' | 'month' | 'week' | 'day',
  };
}
