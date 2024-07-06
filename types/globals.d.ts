export { };

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean;
      birthday?: string;
      cityState?: string;
    };
  }
}