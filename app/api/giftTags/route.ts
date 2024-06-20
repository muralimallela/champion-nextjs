
import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export const revalidate = 30;

export async function GET() {
    const query = `
  *[_type =='giftTags'] | order(_createdAt desc){
    title,
    "slug":slug.current,
    "src": image.asset->url,
    "thumbnail": image.asset->metadata.lqip,
    description
  }
  `;

    try {
        const data = await client.fetch(query);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
