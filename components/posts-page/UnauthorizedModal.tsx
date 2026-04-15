"use client";
import Link from "next/link";

function UnauthorizedModal({ onClose }: { onClose?: () => void }) {
  return (
    <>
      {onClose && (
        <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40" />
      )}

      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        z-101 w-2/3 md:w-3/4 lg:w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-6
        flex flex-col items-center gap-5 shadow-2xl"
      >
        <div
          className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20
        flex items-center justify-center"
        >
          <svg
            className="w-7 h-7 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        <div className="text-center space-y-1">
          <h5 className="text-white font-bold text-lg">
            You are not logged in
          </h5>
          <p className="text-zinc-400 text-sm">
            Please login or create an account to continue
          </p>
        </div>

        <div className="flex gap-3 w-full">
          <Link
            href="/login"
            className="flex-1 py-2.5 rounded-xl border border-zinc-700 text-zinc-300
            hover:border-zinc-500 hover:text-white text-sm font-medium
            text-center transition duration-200"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500
            text-white text-sm font-medium text-center
            transition duration-200 active:scale-95"
          >
            Register
          </Link>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-zinc-600 hover:text-zinc-400 text-xs transition duration-200"
          >
            Maybe later
          </button>
        )}
      </div>
    </>
  );
}

export default UnauthorizedModal;
