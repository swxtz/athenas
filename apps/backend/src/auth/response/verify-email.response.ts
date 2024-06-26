interface PrismaResponse {
    id: string;
    email: string;
    emailVerified: boolean;
}

export interface VerifyEmailResponse {
    message: string | number | Buffer;
    data: PrismaResponse;
}
