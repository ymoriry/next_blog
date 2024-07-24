"use client"

import { createArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setLoading(true)
    await createArticle(id, title, content);

    setLoading(false)
    router.push("/");
    router.refresh();
  };
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>
      <form className='bg-slate-300 p-9 rounded shadow-lg' onSubmit={(e) => handleSubmit(e)} >
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold flex flex-col gap-2'>
            URL
            <input type="text" className='shadow border rounded w-full py-2 px-3 leading-tight focus:outline-nonez font-normal' onChange={(e) => setId(e.target.value)} />
          </label>
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold flex flex-col gap-2'>
            タイトル
            <input type="text" className='shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none font-normal' onChange={(e) => setTitle(e.target.value)} />
          </label>
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold flex flex-col gap-2'>
            本文
            <textarea className='shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none font-normal' onChange={(e) => setContent(e.target.value)} />
          </label>
        </div>

        <button type='submit' disabled={loading} className={`py-2 px-4 border rounded-md ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-400 hover:bg-orange-500"
          } `}>投稿</button>
      </form>
    </div>
  );
};

export default CreateBlogPage