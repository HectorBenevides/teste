"use client";

import BackButton from "@/components/back-button";
import { getUsers } from "@/services/users";
import { ApiUser } from "@/types/user";
import {
  Alert,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");
        const data = await getUsers();
        setUsers(data);
      } catch {
        setError("Erro ao carregar usuarios. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen px-4 py-10">
      <Paper elevation={3} className="mx-auto w-full max-w-4xl p-6">
        <div className="mb-2">
          <BackButton />
        </div>
        <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
          Usuarios da API Publica
        </Typography>

        {loading && (
          <div className="py-10 text-center">
            <CircularProgress />
          </div>
        )}

        {error && <Alert severity="error">{error}</Alert>}

        {!loading && !error && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Telefone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </div>
  );
}
