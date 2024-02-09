export type Status = "idle" | "pending" | "success" | "error";
export type Variant = "light" | "dark";

export interface Video {
  name: string;
  ownedBy: string;
  url: string;
  length: number;
  id: string;
}

// name: fileName.replace(".mp4", ""),
// ownedBy: user?.uid,
// url,
// length: blob.size * 200 * 60,
