import {NextResponse} from "next/server"
import cloudinary from "@/lib/cloudinary"

type CloudinaryUploadResult = {
    secure_url: string;
};

export async function POST(req: Request){

    const formData = await req.formData()
    const file = formData.get("photo") as File;

    if (!file) {
        return NextResponse.json({success: false, error: "No file uploaded"})
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    try {
        const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
            cloudinary.uploader.upload_stream({
                folder : "membres",
                resource_type : "image"
            },
                (err, result) => {
                if (err) return reject(err ?? new Error("upload failed"));
                    resolve(result as CloudinaryUploadResult);
                }

            ).end(buffer)
        })

        return NextResponse.json({ success: true, url: result.secure_url })
    }catch(err){
        console.error(err)
        return NextResponse.json({ success: false, error: err }, {status : 500})
    }
}