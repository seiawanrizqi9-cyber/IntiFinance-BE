import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  health() {
    return {
      success: true,
      message: 'Auth service is running',
    };
  }
}