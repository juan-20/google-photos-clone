"use server";

import cloudinary from "cloudinary";

export default async function MarkAsFavoriteAction(
  publicId: string,
  isFavorite: boolean
) {
  if (!isFavorite) {
    await cloudinary.v2.uploader.remove_tag("liked", [publicId]);
  } else {
    await cloudinary.v2.uploader.add_tag("liked", [publicId]);
  }
}
