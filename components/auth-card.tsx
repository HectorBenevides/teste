import { Box, Paper, Typography } from "@mui/material";
import { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <Box className="min-h-screen flex items-center justify-center px-4 py-10">
      <Paper elevation={3} className="w-full max-w-md p-6 sm:p-8">
        <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
          {title}
        </Typography>
        <Typography component="p" variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          {subtitle}
        </Typography>
        {children}
      </Paper>
    </Box>
  );
}
