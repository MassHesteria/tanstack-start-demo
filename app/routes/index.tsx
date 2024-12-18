import { createFileRoute } from "@tanstack/react-router"
import { getServerTime } from "~/lib/getServerTime"

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getServerTime()
})

function Home() {
  const state = Route.useLoaderData();
  return (
    <>
      <div>hello tanstack</div>
      <div className="text-lg font-bold text-red-700 pl-5">update test</div>
      <div>{state}</div>
    </>
  )
}