"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Return = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/api/checkout?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
      });
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      {status === "complete" && 
      <div className="flex flex-col text-center">
        <div className="flex justify-center">
          <img
            className="h-14 w-14"
            src="data:image/png;base64,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"
          />
        </div>
        <p className="text-2xl">Thanks for your payment!</p>
        <p className="text-xl">your order has been placed</p>
        <br />

        <div className="pt-8 flex justify-center gap-8">
          <Link href={"/shop"}>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-full">
              Back to shop
            </button>
          </Link>
          <Link href={"/orders"}>
            <button className="py-2 px-4 border rounded-full">
              Go to my orders
            </button>
          </Link>
        </div>
      </div>
      }
    </div>
  );
};

export default Return;
