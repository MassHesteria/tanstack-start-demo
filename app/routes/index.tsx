import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/')({
  component: Home,
  //loader: async () => await getCount(),
})

function Home() {
  return (
    <>
      <div>hello tanstack</div>
      <div className="text-lg font-bold text-red-700 pl-5">update test</div>
    </>
  )
}