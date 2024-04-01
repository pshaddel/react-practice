import React, { PropsWithChildren } from "react";

export class ErrorBoundary extends React.Component<{ } & PropsWithChildren, { hasError: boolean, error: any }> {
    constructor(props:any) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    componentDidCatch(error:any, info:any) {
        console.log('inside did catch')
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
      console.log(error, info);
      this.setState({
        hasError: true,
        error
      })
    }
  
    render() {
      if (this.state.hasError) {
        return <div>
        <h6>Something went wrong.</h6>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
        </details>
      </div>
      }
  
      return this.props.children;
    }
  }


  