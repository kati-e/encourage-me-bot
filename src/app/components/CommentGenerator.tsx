"use client";
import React, { useState } from "react";
import getComment from "../hooks/getComment";

export default function CommentGenerator() {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchComment() {
    setLoading(true); //begins loading
    try {
      const result: any = await getComment();
      setComment(result);
    } catch (error) {
      setError(true);
      //Shows errors to slow people down. The free version of this api only allows 3 req per minute and it runs out super easily haha.
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bot">
      <div className="bot-inner">
        {!error && <h3>An encouraging comment especially for you!</h3>}
        {!loading && !error && comment == "" && (
          <button onClick={fetchComment}>Cheer me up!</button>
        )}
        {loading && !error && <span>Loading...</span>}
        {!loading && !error && <span className="comment">{comment}</span>}
        {error && (
          <span className="error">
            Sorry, too many requests for encouragement. I only take a few
            requests per minute.
          </span>
        )}
      </div>
    </div>
  );
}
