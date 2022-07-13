import { Grid, Typography } from "@mui/material"

export const Gridd = () => {

    return(
        <>  
         <Grid container>

            <Grid item xs={8}>
                <Typography 
                    variant="h4"
                    color='GrayText'
                >
                    Hello This is Grid
                </Typography>
            </Grid>

         </Grid>
        </>
    )
}