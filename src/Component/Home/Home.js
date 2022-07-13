import {Button, ButtonGroup, Typography} from '@mui/material'
import { Add, Settings } from '@mui/icons-material';
import styled from '@emotion/styled';

export const Home = () => {
    const Text = styled(Typography)({
        backgroundColor:'paleturquoise',
        borderRadius:'10px',
        padding:'10px',
        margin:'20px',
        "&:hover":{
          backgroundColor:'skyblue',
          backgroundImage:'linear'
        }
    })
  
    return (
      <div>
        <ButtonGroup>
          <Button
              variant='contained'
              startIcon={<Add />}
              color='secondary'
          >Add</Button>
          <Button
            variant='contained'
            endIcon={<Settings/>}
            color='success'
          >
            Setting
          </Button>
        </ButtonGroup>
        <Typography
          variant='h1'
          component='p'
        >
          Hello
        </Typography>
        <Text
          variant='h3'
        >
          Hello From Text
        </Text>
      </div>
    );
}