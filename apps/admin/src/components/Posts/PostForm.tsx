"use client";

import {
  ArrowDownTrayIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@repo/ui/button";
import type { Post } from "@repo/ui/data";
import { marked } from "marked";
import { useRef, useState } from "react";

function ErrorView({
  errors,
  name,
}: {
  errors: Record<string, string>;
  name: string;
}) {
  if (errors[name] == null) {
    return null;
  }
  return (
    <div className="mb-2 mt-2 flex items-center gap-2 text-red-500">
      <ExclamationTriangleIcon width={16} /> {errors[name]}
    </div>
  );
}

export function PostForm({ post }: { post: Post }) {
  const [isPreview, showPreview] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const cursorPosition = useRef(0);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const [modifyPost, setModifyPost] = useState<Post>(
    post || {
      title: "",
      content: "",
      author: "",
      published: false,
      category: "",
      date: new Date().toISOString(),
      description: "",
      id: Date.now(),
      imageUrl: "",
      likes: 0,
      tags: [],
      urlId: "",
      views: 0,
      active: false,
    },
  );

  function validateAndSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errors: Record<string, string> = {};
    if (modifyPost.title.length === 0) {
      errors.title = "Title is required";
    }
    if (modifyPost.category.length === 0) {
      errors.category = "Category is required";
    }
    if (modifyPost.description.length === 0) {
      errors.description = "Description is required";
    }
    if (modifyPost.content.length === 0) {
      errors.content = "Content is required";
    }
    if (modifyPost.imageUrl.length === 0) {
      errors.imageUrl = "Image URL is required";
    }
    if (modifyPost.tags.length === 0) {
      errors.tags = "At least one tag is required";
    }
    if (modifyPost.content.length > 200) {
      errors.content = "Content is too long. Maximum is 200 characters";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      alert("Saved");
    }
  }

  return (
    <form className="space-y-4">
      <div>
        <label className="block font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={modifyPost.title}
          onChange={(e) =>
            setModifyPost({ ...modifyPost, title: e.target.value })
          }
          className="focus:border-wsu focus:ring-wsu mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm"
        />
        <ErrorView errors={errors} name="title" />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Category</label>
        <input
          type="text"
          value={modifyPost.category}
          onChange={(e) =>
            setModifyPost({ ...modifyPost, category: e.target.value })
          }
          className="focus:border-wsu focus:ring-wsu mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm"
        />
        <ErrorView errors={errors} name="category" />
      </div>
      <div>
        <label className="block font-medium text-gray-700">
          Description ({modifyPost.description.length} out of 200 characters)
        </label>
        <textarea
          value={modifyPost.description}
          placeholder="Max 200 characters"
          onChange={(e) => {
            setModifyPost({ ...modifyPost, description: e.target.value });
            if (e.target.value.length > 200) {
              setErrors({
                ...errors,
                description: "Content is too long. Maximum is 200 characters ",
              });
            } else {
              setErrors({ ...errors, content: "" });
            }
          }}
          className="focus:border-wsu focus:ring-wsu mt-1 block h-64 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm"
        />
        <ErrorView errors={errors} name="description" />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Content</label>
        {isPreview ? (
          <div
            className="focus:border-wsu focus:ring-wsu mt-1 block h-64 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm"
            dangerouslySetInnerHTML={{
              __html: marked.parse(modifyPost.content),
            }}
          ></div>
        ) : (
          <textarea
            value={modifyPost.content}
            ref={editorRef}
            onChange={(e) => {
              setModifyPost({ ...modifyPost, content: e.target.value });
            }}
            className="focus:border-wsu focus:ring-wsu mt-1 block h-64 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm"
          />
        )}
        <ErrorView errors={errors} name="content" />

        <Button
          className="bg-wsu mt-2"
          onClick={() => {
            if (editorRef.current) {
              cursorPosition.current = editorRef.current.selectionStart;
            }
            showPreview(!isPreview);

            setTimeout(() => {
              if (editorRef.current) {
                editorRef.current.selectionStart = cursorPosition.current;
                editorRef.current.selectionEnd = cursorPosition.current;
                editorRef.current.focus();
              }
            }, 0);
          }}
        >
          {isPreview ? "Edit" : "Preview"}
        </Button>
      </div>

      <div>
        <label className="block font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          value={modifyPost.imageUrl}
          onChange={(e) =>
            setModifyPost({ ...modifyPost, imageUrl: e.target.value })
          }
          className="focus:border-wsu focus:ring-wsu mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm"
        />
        <ErrorView errors={errors} name="imageUrl" />
      </div>
      <div className="min-h-10">
        {post.imageUrl ? (
          <img
            src={modifyPost.imageUrl}
            alt={modifyPost.title}
            className="w-64 rounded-md object-cover"
          />
        ) : (
          "No image"
        )}
      </div>
      <div>
        <label className="block font-medium text-gray-700">Tags</label>
        <input
          type="text"
          defaultValue={modifyPost.tags.join(", ")}
          onChange={(e) =>
            setModifyPost({
              ...modifyPost,
              tags: e.target.value.split(",").map((t) => t.trim()),
            })
          }
          className="focus:border-wsu focus:ring-wsu mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={modifyPost.active}
          onChange={(e) =>
            setModifyPost({ ...modifyPost, active: e.target.checked })
          }
          className="focus:ring-wsu h-4 w-4 rounded border-gray-300 text-indigo-600"
        />
        <label className="text-secondary ml-2 block">Active</label>
      </div>
      {Object.keys(errors).length > 0 && (
        <div className="flex items-center gap-2 rounded-xl bg-red-500 p-6 text-white">
          <ExclamationTriangleIcon width={16} />
          Please fix the errors before saving
        </div>
      )}
      <button
        type="submit"
        onClick={validateAndSubmit}
        className="focus:ring-wsu bg-wsu hover:wsu-light inline-flex justify-center rounded-md border border-transparent px-4 py-2 font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <ArrowDownTrayIcon />
        Save
      </button>
    </form>
  );
}
