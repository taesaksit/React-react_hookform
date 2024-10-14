import React from 'react'
import { Box, Stack, TextField, Typography, Button, FormControl } from '@mui/material'
import { useForm } from 'react-hook-form';

import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
export default function HookFormv3() {

    const [showPassword, sethowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        sethowPassword(!showPassword);
        console.log(showPassword);
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log('Form Data:', data)
        // alert(data)
    }


    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='100vh'
        >
            <Box
                width={400}
                boxShadow={4}
                padding={4}
                borderRadius={3}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                        <Typography variant='h5'>Login</Typography>

                        <TextField
                            label='username'
                            size='small'
                            {...register('username',
                                {
                                    required: 'Username is required',
                                    minLength: { value: 6, message: 'Min Len atleast 6' },
                                    maxLength: { value: 10, message: 'Max Len 10' }

                                })}
                            error={!!errors.username}
                            helperText={errors.username ? errors.username.message : ''}
                        />

                        <TextField
                            label='password'
                            size='small'
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            {...register('password',
                                {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Min Le atleast 6' },
                                    validate: {
                                        hasUpperCase: value => /[A-Z]/.test(value) || 'Password must have at least one uppercase letter',
                                        hasLowerCase: value => /[a-z]/.test(value) || 'Password must have at least one lowercase letter',
                                        hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must have at least one special character',
                                    }

                                }
                            )}
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ''}

                        />

                        <Button variant='contained' type='submit'>Login</Button>
                    </Stack>
                </form>

            </Box>
        </Box>
    )
}

