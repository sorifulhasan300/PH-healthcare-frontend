import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import Doctors from "@/components/modules/consultation/doctors";
import { getDoctors } from "./_action";

async function ConsultationPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Doctors />
      </HydrationBoundary>
    </div>
  );
}

export default ConsultationPage;
