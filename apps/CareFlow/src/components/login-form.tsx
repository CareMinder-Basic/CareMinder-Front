"use client";

import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { LoginFormType } from "@/lib";
import { useDelayedSkeleton } from "@/hooks/useDelayedSkeleton";

export default function LoginForm({
  onSubmit,  
  handleSubmit,
  register,
  errors,
  onError,
  dataCy
}: {
  onSubmit: (data: LoginFormType) => void;
  handleSubmit: UseFormHandleSubmit<LoginFormType>;
  register: UseFormRegister<LoginFormType>;
  errors?: FieldErrors<LoginFormType>;
  onError: (error: any) => void;
  dataCy : {
    loginId: string;
    password: string;
    submitButton: string;
  }
}) {        
    return (
      <form onSubmit={handleSubmit(onSubmit,onError)} className="space-y-4">
        <div>
          <input
            {...register("loginId")}
            type="text"
            placeholder="아이디"
            data-cy={dataCy.loginId}
            className="w-full p-2 border rounded"
          />
          {errors?.loginId && (
            <p className="text-red-500 text-sm">{errors.loginId.message}</p>
          )}
        </div>
  
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="비밀번호"
            data-cy={dataCy.password}
            className="w-full p-2 border rounded"
          />
          {errors?.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
  
        <button
          type="submit"
          data-cy={dataCy.submitButton}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          로그인
        </button>
      </form>
    );
  }