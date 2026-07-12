import React from "react";

function FAQs() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">

        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold !text-black">
            Is BlogSpace free?
          </h2>

          <p className="mt-2 text-gray-600">
            Yes, creating and reading blogs is completely free.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold !text-black">
            Can I upload images?
          </h2>

          <p className="mt-2 text-gray-600">
            Yes. Images are securely stored using Appwrite Storage.
          </p>
        </div>

      </div>
    </div>
  );
}

export default FAQs;