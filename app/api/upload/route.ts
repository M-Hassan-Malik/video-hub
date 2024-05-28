import { NextRequest, NextResponse } from "next/server";
import { pipeline } from "stream";
import { promisify } from "util";
import path from "path";
import fs from "fs";

const pump = promisify(pipeline);

export async function POST(req: any, res: any) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    let fileName = file.name;
    
    // Check if the file already exists in the directory
    const filePath = path.join(process.cwd(), "public/video", fileName);
    if (fs.existsSync(filePath)) {
      // Append a random string to make the filename unique
      const randomString = (Math.random() + 1).toString(36).substring(7);
      const fileExtension = path.extname(fileName);
      const baseName = path.basename(fileName, fileExtension);
      fileName = `${baseName}-${randomString}${fileExtension}`;
    }

    const finalFilePath = path.join(process.cwd(), "public/video", fileName);

    await pump(file.stream(), fs.createWriteStream(finalFilePath));
    return NextResponse.json({ status: "success", data: { fileName, size: file.size } });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
