import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.error("Application Error:", error);
        console.error("Error Information:", info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <main className="error-page">
                    <h1>Something went wrong.</h1>
                    <p>could not load this page.</p>
                    <button onClick={() => window.location.reload()}>Refresh Page</button>
                </main>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;