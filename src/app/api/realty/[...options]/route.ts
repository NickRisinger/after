import type { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { operation: string } },
) {
  return Response.json({ params });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { category: string } },
) {
  return Response.json({ params });
}
