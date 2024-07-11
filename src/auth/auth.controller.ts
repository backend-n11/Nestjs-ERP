// src/auth/auth.controller.ts
import { Controller, Post, Body, Req, UseGuards, Get, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';

interface MRequest extends Request { user: any }

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  async signup(@Body() body) {
    const { login, password } = body;
    return this.authService.signup(login, password);
  }

  @Post('signin')
  async signin(@Body() body) {
    const { login, password } = body;
    const user = await this.authService.validateUser(login, password);
    if (!user) throw new UnauthorizedException();
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getMe')
  getMe(@Req() req: MRequest) {
    const result = this.authService.getme(req.user.sub)
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  logout() {
    return { message: 'Logout successful' };
  }
}
