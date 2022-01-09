import * as React from "react"
import Grid from '@mui/material/Grid'
import OutlinedCard from '../components/card'
const HomePage = () => {
  return (

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh', position: 'absolute' }}
      >
        <Grid item xl={6} />
            <OutlinedCard />
        </Grid>

  )
}

export default HomePage



