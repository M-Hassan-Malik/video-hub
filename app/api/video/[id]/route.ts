import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  
  const id = url.pathname.split('/api/video')[1];
  const videoPath = path.join(process.cwd(), 'public/video', `${id}.mp4`);
  
  if (!fs.existsSync(videoPath)) {
    
    return new NextResponse('Video not found', { status: 404 });
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.get('range');

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunksize = end - start + 1;
    const file: any = fs.createReadStream(videoPath, { start, end });
    const head: any = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };

    return new NextResponse(file, { headers: head, status: 206 });
  } else {
    const head: any = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };

    return new NextResponse(fs.createReadStream(videoPath) as any, { headers: head, status: 200 });
  }
}
