import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles((theme) =>({
    root:{

    },
    formContent : {
        marginTop: '3rem !important',
        padding: '1rem 2rem',
        border : '2px solid #1976d2 ',
        borderRadius: '5px',
        minHeight: '70vh'
    },
    formTitle : {
        textAlign: 'center',
        marginTop: '1rem',
        fontSize: '1.6rem !important',
        fontWeight: '500 !important',
    },
    loginIconBottom: {
        display: "flex !important", 
        justifyContent: "center !important",
        margin: ".5rem auto 1.4rem !important", 
    },
    loginIcon : {
        fontSize: "3rem !important", 
        color: "#2d76d2", 
    },
    formInput : {
        width: '100%',
        borderColro: 'blue '
    },
    inputLabel : {
        fontSize: '1rem !important',
        paddingButton: '.6rem',
        fontWeight:'normal !important',
        color: '#999 !important',
        marginBottom: '.8rem !important',
    },
    formBottom : {
        margin: '2rem 0 1rem !important',
        width: '100%',
        padding: '.6rem 0 !important',
    },
    error : {
        fontSize: '.9rem !important',
        color:'red',
        marginTop: '.4rem !important',
    }
    
}))