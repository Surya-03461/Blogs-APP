import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userID: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
  <div className="max-w-7xl mx-auto py-10 px-4">
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-gray-200">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        {post ? "✏️ Update Blog" : "📝 Create New Blog"}
      </h1>

      <form
        onSubmit={handleSubmit(submit)}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <Input
            label="Title"
            placeholder="Enter blog title..."
            {...register("title", { required: true })}
          />

          <Input
            label="Slug"
            placeholder="blog-title"
            {...register("slug", { required: true })}
            onInput={(e) =>
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              })
            }
          />

          <RTE
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <Input
            label="Featured Image"
            type="file"
            accept="image/png,image/jpg,image/jpeg,image/gif"
            {...register("image", { required: !post })}
          />

          {post && (
            <div className="overflow-hidden rounded-2xl shadow-lg border">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="w-full h-60 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          )}

          <Select
            options={["active", "inactive"]}
            label="Status"
            {...register("status", { required: true })}
          />

          <Button
            type="submit"
            className="w-full py-3 rounded-xl text-lg font-semibold transition duration-300 hover:scale-105"
            bgColor={
              post
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }
          >
            {post ? "Update Post" : "Publish Post"}
          </Button>
        </div>
      </form>
    </div>
  </div>
);
}