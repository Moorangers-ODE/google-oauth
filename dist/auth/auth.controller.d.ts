import { AuthService } from '../auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): Promise<"No user from Google" | {
        message: string;
        user: any;
    }>;
}
