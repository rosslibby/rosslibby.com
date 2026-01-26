export type CalendarEventPayload = {
  title: string;
  start_dt: string;
  end_dt: string;
  all_day: boolean;
  location: string;
  who: string;
  notes: string;
  subcalendar_ids: number[];
  signup_visibility: string;
  comments_visibility: string;
  custom: Record<string, any>;
  attachments: string[];
}
