import { Post, User } from "@/types/types";
import LikeButton from "./LikeButton";
import CommentsButton from "./CommentsButton";

function PostItem({
  post,
  currentUserId,
  isAuth,
}: {
  post: Post;
  currentUserId: string;
  isAuth: User;
}) {
  const isLiked = (post.likes || []).includes(currentUserId);

  return (
    <div
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5
    hover:border-zinc-700 transition duration-200"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 
        flex items-center justify-center text-blue-400 text-sm font-bold shrink-0"
        >
          {post.user.username.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{post.user.username}</p>
          <p className="text-zinc-500 text-xs">@{post.user.username}</p>
        </div>
      </div>

      <div className="mb-4 space-y-1">
        <p className="text-white font-semibold">{post.title}</p>
        {post.content && (
          <p className="text-zinc-400 text-sm leading-relaxed">
            {post.content}
          </p>
        )}
      </div>

      <div className="border-t border-zinc-800 pt-3 flex items-center gap-5">
        <LikeButton
          postId={post.id}
          likesCount={post.likesCount}
          isLiked={isLiked}
          isAuth={isAuth}
        />
        <CommentsButton post={post} commentsCount={post.commentsCount} />
      </div>
    </div>
  );
}

export default PostItem;
