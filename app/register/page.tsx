"use client";

import AuthCard from "@/components/auth-card";
import FormTextField from "@/components/form-text-field";
import { Alert, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

type RegisterFormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function RegisterPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const { control, handleSubmit, setValue } = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = useWatch({ control, name: "password" });

  const onSubmit = () => {
    setSuccessMessage("Cadastro realizado com sucesso.");
  };

  return (
    <AuthCard
      title="Cadastro de Usuario"
      subtitle="Preencha os campos para criar sua conta."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <FormTextField
            name="name"
            label="Nome"
            control={control}
            rules={{ required: "Nome obrigatorio." }}
          />
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
            name="phone"
            label="Telefone"
            control={control}
            rules={{
              required: "Telefone obrigatorio.",
              minLength: {
                value: 14,
                message: "Informe um telefone valido.",
              },
            }}
            onChangeValue={(value) =>
              setValue("phone", formatPhone(value), { shouldValidate: true })
            }
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
          <FormTextField
            name="confirmPassword"
            label="Confirmar senha"
            control={control}
            type="password"
            rules={{
              required: "Confirmacao de senha obrigatoria.",
              validate: (value) =>
                value === password || "As senhas precisam ser iguais.",
            }}
          />
        </div>

        <Button type="submit" fullWidth variant="contained" size="large">
          Cadastrar
        </Button>
      </form>

      {successMessage && (
        <Alert severity="success" className="mt-4">
          {successMessage}
        </Alert>
      )}

      <div className="mt-4 text-center">
        <Typography variant="body2">
          Ja possui conta?{" "}
          <Link href="/login" className="text-blue-600 font-semibold">
            Voltar para login
          </Link>
        </Typography>
      </div>
    </AuthCard>
  );
}
