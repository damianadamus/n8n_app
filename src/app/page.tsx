//import { caller } from '@/trpc/server';
import { getQueryClient, trpc } from "@/trpc/server";
//"use client"
//import { useTRPC } from "@/trpc/client";
//import { useQuery } from "@tanstack/react-query";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

const Page= async () => {
    //const users = await caller.getUsers();
    //const trpc = useTRPC();
    //const { data: users } = useQuery(trpc.getUsers.queryOptions());
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<p>Loading...</p>}>
                    <Client />
                </Suspense>
            </HydrationBoundary>
        </div>
    )
}
export default Page
