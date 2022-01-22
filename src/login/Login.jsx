import { Container, Grid, Typography, Box, TextField, IconButton, Button } from "@mui/material"
import { useStyles } from "./style";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useForm } from "react-hook-form";


export const Login = () =>{

    const classes = useStyles();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmitHandler = (data) =>{
        console.log(data)
    }
    return(
        <Container position="static">
            <Grid container
        
                justifyContent="center"
            >
                <Grid item xs={12} sm={8} md={4} lg={4}
                    className={classes.formContent}
                >
                    <Typography 
                        variant="subtitle1"
                        color="primary"
                        className={classes.formTitle}
                    >
                        Loge In
                    </Typography>
                    <IconButton className={classes.loginIconBottom}>
                        <AccountCircleIcon className={classes.loginIcon} />
                    </IconButton>
                    <Box component="form"
                        onSubmit={handleSubmit(onSubmitHandler)}
                    >


                        <Typography 
                            className={classes.inputLabel}
                            color="primary"
                            variant="subtitle2"
                        >
                            Enter Your Email
                        </Typography>
                        <TextField
                            className={classes.formInput}
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            autoComplete="current-email"
                            {...register("email", { required: true })}
                        />
                         {errors.email && 
                            <Typography className={classes.error} variant="body1">please enter valid email</Typography> 
                         }


                        <Typography 
                            style={{marginTop: '2rem'}}
                            className={classes.inputLabel}
                            color="primary"
                            variant="subtitle2"
                        >
                            Enter Your Password 
                        </Typography>
                        <TextField
                            className={classes.formInput}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && 
                            <Typography className={classes.error} variant="body1">please enter Your Password</Typography>
                        }


                        <Button type="submit" className={classes.formBottom} variant="contained">Contained</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}