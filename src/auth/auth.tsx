class Auth{
    authenticated: boolean

    constructor() {
        this.authenticated = false
    }

    login(cb: Function): void {
        this.authenticated = true;
        cb();
    }

    logout(cb: Function): void {
        this.authenticated = false;
        cb();
    }

    isAuthenticated(): boolean {
        return this.authenticated;
    }

}

export default new Auth()