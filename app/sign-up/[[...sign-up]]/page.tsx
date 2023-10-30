import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
 
export default function SignUpForm() {
  return (
    <div className="flex h-[60rem] justify-center items-center bg-zinc-50">
      <div className="flex flex-col justify-center mt-20 items-center">
        <SignUp
          appearance={{
            elements: {
              card: "w-[500px]",
              socialButtonsBlockButton: "p-4",
              formFieldInput: "p-4",
              formButtonPrimary: "p-4",
            }
          }}/>
        <Link className="text-xs text-slate-500 pt-10" href={"/"}>
            © Geckogen 2023
        </Link>
      </div>
    </div>
  );
}