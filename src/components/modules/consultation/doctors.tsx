"use client";
import { getDoctors } from "@/app/(commonLayout)/consultation/_action";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function Doctors() {
  const { data } = useQuery({ queryKey: ["doctors"], queryFn: getDoctors });
  console.log("doctors data", data.data);
  if (!data) {
    return <h1>Data not available</h1>;
  }
  return (
    <div>
      {data.data.map((doctor) => (
        <h1>{doctor.name}</h1>
      ))}
    </div>
  );
}

export default Doctors;
