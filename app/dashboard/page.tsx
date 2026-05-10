"use client";

import BackButton from "@/components/back-button";
import { Button, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Paper elevation={3} className="w-full max-w-2xl p-6 sm:p-8">
        <div className="mb-2">
          <BackButton />
        </div>
        <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
          Dashboard
        </Typography>
        <Typography color="text.secondary" className="mb-6">
          Login simulado com sucesso.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button component={Link} href="/users" variant="contained">
            Ver usuarios da API
          </Button>
          <Button component={Link} href="/login" variant="outlined">
            Sair
          </Button>
        </Stack>
      </Paper>
    </div>
  );
}
