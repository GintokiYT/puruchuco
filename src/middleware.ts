export { default } from "next-auth/middleware";

interface Config {
  matcher: String[]
}

export const config: Config = {
  matcher: [
    "/dashboard/:path*"
  ] 
}