import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CareerCard(props) {


  const user = localStorage.getItem("token");

  const courses=localStorage.getItem('courses')

    const initialArray = courses.split(',');

  return (
    <>
      <div className="border-grey bg-grey-200 m-2 flex h-fit w-72 flex-col justify-between text-wrap rounded-2xl border-2 border-solid p-5">
        <div>
          <img className="w-full rounded-md" src={props.img} alt="" />
          <h1 className="text-md ml-2 pt-8 font-bold text-black md:text-3xl">
            {props.title}
          </h1>
          <h2 className="ml-2 pt-2 text-sm text-black md:text-xl">
            {props.subtitle}
          </h2>
          <p className="ml-2 w-full text-wrap break-words pr-5 pt-2 text-xs md:text-xs">
            {props.content}
          </p>
          
        </div>
        <Link
          className="mt-2 flex h-16 w-full items-center justify-center rounded-xl bg-blue-600 text-white"
          to={user?`/careers/${props.item}`:'/careers'} onClick={()=>{user?console.log('login'):alert('login first to go to the course')}}state={initialArray[`${props.item}`]}// Ensure the correct path is used here
        >
      {
        initialArray[`${props.item}`] === 'true' && user
          ? 'Open'
          : initialArray[`${props.item}`] === 'pending' && user
          ? 'Pending'
          : 'Enroll'
      }
        </Link>
      </div>
    </>
  );
}
