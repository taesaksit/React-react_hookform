import React from 'react';
import { Stack, TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function HookFormV1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <Box
        sx={{
          boxShadow: 3,
          padding: 4,
          borderRadius: 2,
          width: { xs: '100%', sm: 500 },
          maxWidth: '100%',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" justifyContent="center">
            <h1>Login</h1>
          </Box>
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              size="small"
              fullWidth
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Enter a valid email address',
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />

            <TextField
              label="Password"
              type="password"
              size="small"
              fullWidth
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
