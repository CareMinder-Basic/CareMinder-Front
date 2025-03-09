import { LockIcon, PersonIcon } from "@/components/atoms/Icon";
import { Button } from "../../atoms/Button"
import { Input } from "../../atoms/Input"
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";

interface LoginFormData {
  loginId: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  handleSubmit: UseFormHandleSubmit<LoginFormData>;
  register: UseFormRegister<LoginFormData>;
  errors?: FieldErrors<LoginFormData>;
  isDisabled: boolean;
  onError: (error: any) => void;
}

export function LoginForm({ onSubmit, handleSubmit, register, onError, isDisabled }: LoginFormProps) {  

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-12">
      <div className="flex flex-col gap-9">
        <div>
          <Input
            {...register("loginId")}
            type="text"
            placeholder="ID"
            width="428.7px"          
            height="62.46px"
            textSize="2xl"
            radius="xl"
            leftIcon={<PersonIcon />}
            paddingLeft="pl-14"
          />          
        </div>

        <div>
          <Input
            {...register("password")}
            type="password"
            placeholder="PW"
            width="428.7px"
            height="62.46px"
            textSize="2xl"
            radius="xl"
            leftIcon={<LockIcon />}
            paddingLeft="pl-14"
          />          
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button 
          type="submit" 
          variant="gradient" 
          textSize="3xl" 
          width="329.33px" 
          height="70.98px" 
          radius="full"
          disabled={!isDisabled}
        >
          LOGIN
        </Button>
      </div>
    </form>
  )
} 