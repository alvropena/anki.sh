import React from 'react'
import Footer from '@/components/footer'
import { TableDemo } from '@/components/deck-table'

function Page() {
  return (
    <div>
      <TableDemo />
      <Footer />
    </div>
  )
}

export default Page

// import Image from "next/image";
// import AuthForm from "@/app/(site)/components/auth-form";

// const Auth = () => {
//     return (
//         <div
//             className="
//         flex 
//         min-h-full 
//         flex-col 
//         justify-center 
//         py-12 
//         sm:px-6 
//         lg:px-8 
//         bg-gray-100
//       "
//         >
//             <div className="sm:mx-auto sm:w-full sm:max-w-md">
//                 {/* <Image
//                     height="48"
//                     width="48"
//                     className="mx-auto w-auto"
//                     src="/images/logo.png"
//                     alt="Logo"
//                 /> */}
//                 <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//                     Sign in to your account
//                 </h2>
//             </div>
//             <AuthForm />
//         </div>
//     )
// }

// export default Auth;