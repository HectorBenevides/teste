"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  label?: string;
};

export default function BackButton({ label = "Voltar" }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button variant="text" onClick={() => router.back()}>
      {label}
    </Button>
  );
}
