const { User } = require('../../src/app/models');

describe('Authentication', () => {
    it('create user', async () => {
     const user =   await User.create({
            name: 'wesllen alves de sousa',
            email: 'Wesllenalves@teste.com',
            password_hash: '123123'
        });

        console.log(user);

        expect(user.email).toBe('Wesllenalves@teste.com');
    });
});