import { CATEGORIES } from "@/constants/communities";

export type Category = (typeof CATEGORIES)[number];

 
export enum CommunityType {
  PUBLIC = "public",
  PRIVATE = "private",
}

export enum JoinStatus {
  NONE = "none",
  PENDING = "pending",
  JOINED = "joined",
}

export interface Community {
  id: string;
  name: string;
  description: string;
  slug:string;
  avatar?: string;     
  coverImage?: string;
  category: Category;
  type: CommunityType;
  membersCount: number;
  isMember?: boolean;
  joinStatus?: JoinStatus;
  createdAt: string;
}