import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Countdown } from './components/countdown';

interface StateProps {
  theme: any;
}

class App extends React.Component {
  state: StateProps = {
    theme: null,
  }
  componentDidMount() {
    fetch("https://api.koala.io/marketing/v1/device-configurations/alias/web-config", {
      method: 'GET',
      // @ts-ignore
      headers: {
        'X-Organization-Id': 1,
      }
    })
      .then(res => res.json())
      .then(
        (result) => this.setState({ theme: result }),
        (error) => console.log(error))
  }
  render() {
    // @ts-ignore
    const data = this.state.theme && this.state.theme.data && this.state.theme.data.data;
    return (
      this.state.theme && (
        <ThemeProvider theme={data}>
          <Countdown />
        </ThemeProvider>
      )
    )
  }
}

export default App;
