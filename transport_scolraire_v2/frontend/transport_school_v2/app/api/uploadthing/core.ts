import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    busImage: f({ image: { maxFileSize: "4MB" } })
        .onUploadComplete(async ({ file }) => {
            console.log("Image uploadée :", file.url);
            return { uploadedBy: "dashboard" };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
