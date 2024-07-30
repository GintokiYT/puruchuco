import { Metadata } from "next"

import Form from "./components/Form"

export const metadata: Metadata = {
  title: "Dashboard - IE 1263 PURUCHUCO",
  description: "Dashboard - IE 1263 PURUCHUCO"
}

export default function DashboardPage() {
  return (
    <>
      <div className="w-full max-w-7xl m-auto px-4 md:px-6 flex flex-col py-12">
        <Form />
      </div>
    </>
  )
}