// import { useEffect, useState } from 'react';
import { Button, Container, Divider, Grid, Header, Input } from 'semantic-ui-react'

import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div>

      <Container>
        <Divider hidden />

        <Header as='h3'>Responsive Width Adjustments</Header>
        <p>You can specify columns to appear at different widths on different screens.</p>

        <Grid columns={3} doubling stackable>
          <Grid.Column>
            <Input label="City 1" focus placeholder='City Name...' />
            <br />
            results
          </Grid.Column>
          <Grid.Column>
            <Input label="City 2" focus placeholder='City Name...' />
            <br />
            results
          </Grid.Column>
          <Grid.Column>
            <Button primary>Submit</Button>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>



      </Container>
    </div >

  );
}

export default App;
