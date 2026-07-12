import React from "react";

function HelpCenter() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Help Center
      </h1>

      <p className="text-white-600 font-xl leading-8">
        Welcome to the Help Center. Here you'll find answers to common
        questions regarding our blogging platform.
      </p>

      <div className="mt-10 space-y-5">
        <div className="p-5 bg-white rounded-xl shadow">
          <h2 className="font-semibold text-xl !text-black">
            How do I create a blog?
          </h2>
          <p className="text-gray-600 mt-2">
            Login to your account and click on "Add Post".
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow">
          <h2 className="font-semibold text-xl !text-black">
            How do I edit a blog?
          </h2>
          <p className="text-gray-600 mt-2">
            Open your post and click the Edit button.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;