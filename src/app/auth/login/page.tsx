import { Metadata } from "next"
import FormLogin from './components/form';

export const metadata: Metadata = {
  title: "Login - IE 1263 PURUCHUCO",
  description: "Login - IE 1263 PURUCHUCO"
}

export default function LoginPage() {
  return (
    <div className="w-full h-[calc(100vh-96px)] flex justify-center px-4 md:px-6">
      <div className="mt-12">
        <FormLogin />
      </div>
    </div>
  )
}