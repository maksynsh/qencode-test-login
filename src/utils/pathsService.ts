class PathsService {
  getLoginPath(): string {
    return '/v1/auth/login'
  }

  getForgotPasswordPath(): string {
    return '/v1/auth/password-reset'
  }

  getPasswordSetPath(): string {
    return '/v1/auth/password-set'
  }

  getRefreshTokenPath(): string {
    return '/v1/auth/refresh-token'
  }
}

export default new PathsService()
