import type { NextRequest } from 'next/server';
import type { RawAxiosResponseHeaders, AxiosResponseHeaders } from 'axios';
import { http } from '~/libs/http';

function extractPagination(
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders,
) {
  return {
    totalCount: parseInt(headers['x-pagination-total-count']),
    currentPage: parseInt(headers['x-pagination-current-page']),
    pageCount: parseInt(headers['x-pagination-page-count']),
    perPage: parseInt(headers['x-pagination-per-page']),
  };
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { data, headers } = await http.post('/realtors', {
    ...body,
  });

  const pagination = extractPagination(headers);

  return Response.json({ data, pagination });
}
