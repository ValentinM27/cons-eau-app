import React from "react";
import {
  InputProps as MUIInputsProps,
  Input as MUIInput,
  useTheme,
  Box,
} from "@mui/material";

export type InputProps<T = string> = {
  label?: string;
  placeholder?: string;
  value: T;
  type: string;
  handleChange: (value: T) => void;
} & MUIInputsProps;

export const Input = <T extends string | number | undefined>({
  handleChange,
  ...props
}: InputProps<T>) => {
  const theme = useTheme();

  const setValue: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    handleChange(e.target.value as T);
  };

  return (
    <Box
      sx={{
        alignContent: "left",
        width: "100%",
        maxWidth: "370px",
      }}
    >
      <MUIInput
        {...props}
        onChange={setValue}
        disableUnderline={true}
        sx={{
          background: theme.palette.background.paper,
          padding: "0 .5rem",
          borderRadius: "5px",
          width: "100%",
          margin: 0,
        }}
      />
    </Box>
  );
};
