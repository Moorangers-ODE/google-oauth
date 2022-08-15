import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleLoing(req) {
    if (!req.user) {
      return 'No user from Google';
    }
    return {
      message: 'User infomation from Google',
      user: req.user,
    };
  }
  hello() {
    return 'Hello';
  }
}
