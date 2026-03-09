import React, { Component, ErrorInfo, ReactNode } from "react";
import { BaseLayout } from "./base-layout";
import { Button } from "@/components/ui/button";
import { ShieldAlert, RefreshCcw, Home } from "lucide-react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    private handleReset = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-secondary flex items-center justify-center p-6 text-white text-center">
                    <div className="max-w-md w-full animate-in fade-in zoom-in duration-700">
                        <div className="w-24 h-24 bg-red-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-red-500/30 luxury-shadow">
                            <ShieldAlert className="text-red-500" size={48} />
                        </div>

                        <h2 className="text-3xl font-bold mb-4 text-white">System Synchronized Issue</h2>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            A logical regression was detected in the luxury environment. To preserve data integrity, we recommend a safety reset.
                        </p>

                        <div className="space-y-4">
                            <Button
                                variant="gold"
                                className="w-full py-6 rounded-xl font-bold"
                                onClick={() => window.location.reload()}
                            >
                                <RefreshCcw className="mr-2" size={20} /> Attempt Soft Recovery
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10"
                                onClick={this.handleReset}
                            >
                                Hard Reset (Clear Storage)
                            </Button>

                            <a href="/" className="block text-sm text-white/40 hover:text-white transition-colors mt-4">
                                Return to Homepage
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
