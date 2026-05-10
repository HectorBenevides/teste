"use client";

import AuthCard from "@/components/auth-card";
import FormTextField from "@/components/form-text-field";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <AuthCard title="Login" subtitle="Entre com seus dados para continuar.">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <FormTextField
            name="email"
            label="Email"
            control={control}
            type="email"
            rules={{
              required: "Email obrigatorio.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Informe um email valido.",
              },
            }}
          />
          <FormTextField
            name="password"
            label="Senha"
            control={control}
            type="password"
            rules={{
              required: "Senha obrigatoria.",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres.",
              },
            }}
          />
        </div>

        <Button type="submit" fullWidth variant="contained" size="large">
          Entrar
        </Button>
      </form>

      <div className="mt-4 text-center">
        <Typography variant="body2">
          Nao possui conta?{" "}
          <Link href="/register" className="text-blue-600 font-semibold">
            Cadastre-se
          </Link>
        </Typography>
      </div>
    </AuthCard>
  );
}
