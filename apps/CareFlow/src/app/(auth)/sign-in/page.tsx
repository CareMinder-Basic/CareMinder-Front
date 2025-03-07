import dynamic from "next/dynamic";
import Skeleton from 'react-loading-skeleton';
import Image from "next/image";
import LoginBg from "@/assets/background-image/login-ward.png";


const LoginFormWard = dynamic(() => import("./_components/login-form-ward"), { 
  ssr: true,
  loading: () => <Skeleton height={40} width={147} /> 
});

export default async function SignInPage() {  
  return (    
    <div className="min-h-screen flex 2xl:flex-row flex-col">            
      <div className="flex-1 relative bg-gradient-to-br ">
        <Image
          src={LoginBg}
          alt="login-background"
          fill          
          objectFit="cover"
          priority
        />
      </div>      
      <div className="flex-1 flex flex-col justify-center items-center px-10 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">CAREMINDER</h1>
            <p className="text-primary mt-2">케어플로우에 오신걸 환영합니다.</p>
          </div>
          <LoginFormWard />          
          <div className="text-center text-sm text-gray-500 space-x-2">
            <span>ID/PW 찾기</span>
            <span>|</span>
            <span>어드민 계쩡 로그인</span>
          </div>
        </div>
      </div>      
    </div>    
  );
}

