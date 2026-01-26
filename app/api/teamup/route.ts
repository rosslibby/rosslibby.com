import { NextRequest, NextResponse } from 'next/server';
import { env } from '@notross/dotenv-config';
import { CalendarEventPayload } from '@/types';
const { teamup } = env();

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const date = searchParams.get('date') as string;
  const title = searchParams.get('title') as string;
  const calendarId = searchParams.get('calendarId') as string;
  const subcalendarId = Number(searchParams.get('subcalendarId') as string);
  const payload = createPayload(date, title, subcalendarId);
  return submit(calendarId, payload)
    .then((res) => res.json())
    .then(NextResponse.json);
}

async function submit(calendarId: string, payload: CalendarEventPayload) {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const query = new URLSearchParams({ tz: 'America/New_York' });
  const endpoint = `${teamup.host}/${calendarId}/events?${query}`;
  return fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });
}

function createPayload(
  date: string,
  title: string,
  subcalendarId: number,
): CalendarEventPayload {
  return {
    title,
    start_dt: (new Date(date).toISOString())
      .split('.')[0].replace(/T\d\d:\d\d:\d\d/, 'T00:00:00'),
    end_dt: (new Date(date).toISOString())
      .split('.')[0].replace(/T\d\d:\d\d:\d\d/, 'T23:59:59'),
    all_day: true,
    location: '',
    who: '',
    notes: '',
    subcalendar_ids: [subcalendarId],
    signup_visibility: 'users_with_modify_permission',
    comments_visibility: 'all_users',
    custom: {},
    attachments: [],
  }
}
