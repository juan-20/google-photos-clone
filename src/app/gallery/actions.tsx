"use server";

import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export default async function MarkAsFavoriteAction(publicId: string) {
  await cloudinary.v2.uploader.add_tag("liked", [publicId]);
  revalidatePath("/gallery");
}
