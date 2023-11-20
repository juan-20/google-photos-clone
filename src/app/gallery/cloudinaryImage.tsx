"use client";

import HeartIcon from "@/components/icons/heart";
import { CldImage } from "next-cloudinary";
import React, { useTransition } from "react";
import MarkAsFavoriteAction from "./actions";
import { SearchResultProps } from "./page";

export default function CloudinaryImage(props: any & SearchResultProps) {
  const [transition, startTransition] = useTransition();

  // const isFavorite = props.tags.includes("liked");

  return (
    <div className="relative">
      <CldImage {...props} />

      <HeartIcon
        onClick={() => {
          startTransition(() => {
            MarkAsFavoriteAction(props.publicId);
          });
        }}
        className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
      />
    </div>
  );
}
