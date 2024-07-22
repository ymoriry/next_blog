'use client'

import React from 'react'

const page = () => {
    const dataList = [];
    const fetchData = async () => {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty');
        const data = await res.json();
        dataList.push(data);
    }
  return (
    <>
        <button onClick={fetchData}>データフェッチ</button>
        <header>Article</header>
    </>
  )
}

export default page