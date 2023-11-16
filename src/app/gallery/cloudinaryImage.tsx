"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

export default function CloudinaryImage(props: any) {
  return <CldImage {...props} />;
}
