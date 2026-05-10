"use client";

import { TextField } from "@mui/material";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

type FormTextFieldProps<T extends FieldValues> = {
  name: FieldPath<T>;
  label: string;
  control: Control<T>;
  type?: string;
  rules?: RegisterOptions<T, FieldPath<T>>;
  onChangeValue?: (value: string) => void;
};

export default function FormTextField<T extends FieldValues>({
  name,
  label,
  control,
  type = "text",
  rules,
  onChangeValue,
}: FormTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          label={label}
          onChange={(event) => {
            if (onChangeValue) {
              onChangeValue(event.target.value);
              return;
            }
            field.onChange(event);
          }}
          error={!!fieldState.error}
          helperText={fieldState.error?.message ?? ""}
        />
      )}
    />
  );
}
