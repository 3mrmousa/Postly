export type Post = {
  id: string;
  title: string;
  content: string;
  user: { username: string };
  likes: string[];
  likesCount: number;
  comments: Comment[];
  commentsCount: number;
};

export type Comment = {
  id: string;
  user: { username: string };
  content: string;
  createdAt: string;
};

export type FormState = {
  success: boolean;
  message: string;
  error?: string | null;
  data?: string;
};

export const initialFormState: FormState = {
  success: false,
  message: "",
  error: null,
  data: undefined,
};

export type User = {
  createdAt: Date;
  updatedAt: Date;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
};
