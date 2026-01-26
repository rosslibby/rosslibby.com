import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { CalendarEventPayload } from '@/types';

export async function POST(req: NextRequest) {
  const headersList = await headers();
  const host = headersList.get('host') as string;
  const protocol = headersList.get('x-forwarded-proto') ||
    (host.includes('localhost') ? 'http' : 'https');
  const searchParams = req.nextUrl.searchParams;
  const runAt = searchParams.get('runAt') as string;
  const date = searchParams.get('date') as string;
  const title = searchParams.get('title') as string;
  const event = searchParams.get('event') as string;
  const name = searchParams.get('name') as string;
  const calendarId = searchParams.get('calendarId') as string;
  const subcalendarId = Number(searchParams.get('subcalendarId') as string);
  const query = new URLSearchParams({
    date: date,
    title: title,
    calendarId: calendarId,
    subcalendarId: subcalendarId.toString(),
  });
  const url = `${protocol}://${host}/api/teamup?${query}`;
  console.log(`⚡️ prepped run: ${url}`)
  return fetch(`https://cronhooks.io/schedules`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CRON_API_KEY as string}`,
    },
    body: JSON.stringify({
      url,
      title: event,
      name,
      timezone: 'America/New_York',
      method: 'GET',
      contentType: 'application/json',
      isRecurring: false,
      runAt,
      sendCronhookObject: true,
      sendFailureAlert: true,
      cronExpression: '',
      retryCount: 2,
      retryIntervalSeconds: 1,
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN as string}`,
      },
    }),
  })
    .then((res) => res.json())
    .then(NextResponse.json);
}

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
  const endpoint = `https://teamup.com/${calendarId}/events?${query}`;
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
