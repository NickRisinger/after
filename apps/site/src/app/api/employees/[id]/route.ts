import type { NextRequest } from 'next/server';
import { http } from '~/libs/http';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { data } = await http.get('/realtor/' + params.id);

  return Response.json({ params });
}
