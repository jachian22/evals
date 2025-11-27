import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-2">PDF Eval Tool</h1>
        <p className="text-text-tertiary mb-8">Create an account to continue</p>
        <SignUp
          forceRedirectUrl="/"
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-bg-secondary border border-border shadow-xl",
              headerTitle: "text-text-primary",
              headerSubtitle: "text-text-secondary",
              socialButtonsBlockButton: "bg-bg-tertiary border-border text-text-primary hover:bg-bg-primary",
              socialButtonsBlockButtonText: "text-text-primary font-medium",
              dividerLine: "bg-border",
              dividerText: "text-text-tertiary",
              formFieldLabel: "text-text-secondary",
              formFieldInput: "bg-bg-tertiary border-border text-text-primary",
              footerActionLink: "text-accent hover:text-accent/80",
              formButtonPrimary: "bg-accent hover:bg-accent/90",
            },
          }}
        />
      </div>
    </div>
  );
}

