import { createTheme } from "@mui/system";

export const theme = createTheme({
    CharityParagraph: {
        pad: {
            xs: '1rem',
            sm: '3rem'
        },
        Economy: {
            heading: {
                fontSize: '1.7rem',
                fontWeight: '600',
                fontFamily: 'Lora, serif',
                padding: '1rem 0rem'
            },
            EconomyTitle: {
                fontSize: '1.3rem',
                lineHeight:"2rem",
                textTransform:'capitalize',
                // fontWeight: '600',
                // width:'',
                fontFamily: 'Lora, serif',
                padding: '0.7rem 0rem'
            }
        },
        aboutcion: {
            fontSize: '2.8rem',
            border: '1px solid silver',
            backgroundColor: "white",
            borderRadius: '2rem',
            padding: '0.3rem',
            '&:hover': { backgroundColor: 'green', color: 'white' },
        },
        aboutsideLink: {
            width: '100%',
            padding: '0.6rem',
            textTransform: 'capitalize',
            fontWeight: '600',
            borderBottom: '1px solid silver',
            '&:hover': { backgroundColor: '#eeeeee' }
        },
        style: {
            lineHeight: '1.6rem',
            textTransform: 'capitalize',
            fontSize: '1rem',
            fontWeight: 500,
            textItems: 'center',
            fontFamily: 'Lora, serif',
        },

        NavLinkStyle: {
            color: "#000000",
            textTransform: 'capitalize',
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: 'Lora, serif',
        },
        newsBtn: {
            textTransform: 'capitalize',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            color: 'black',
            lineHeight: '0.3rem',
            fontFamily: 'Lora, serif',
            overFlow: 'scroll'
        }
    }
})