class LoginPage {
    constructor(page) {
        this.page = page;
        this.username_txtbox = page.getByPlaceholder('Username');
        this.password_txtbox = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.profilePic = page.getByRole('banner').getByRole('img', { name: 'profile picture' });

    }

    async gotoLoginPage() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async login(Username, Password) {
      
        await this.username_txtbox.fill(Username);
        await this.password_txtbox.fill(Password);
        await this.loginBtn.click();
    }
}

export default LoginPage;
