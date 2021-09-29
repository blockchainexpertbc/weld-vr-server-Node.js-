
class Service {

    constructor() {
        this.users = [];
        this.getSocketById = {};
        this.getIdBySocket = {};

    }
    
    login(user, socket) {
        const newUser = {
            ID: socket.id,
            ActivatedAt: new Date(),
            ...user
        };
        this.users.push(newUser);
        this.getSocketById[newUser.ID] = socket;
        this.getIdBySocket[socket] = newUser.ID

        console.log(`logined user: ${newUser.ID}`)

        return newUser;
    }

    logout(user) {
        this.users = this.users.map(u => !u.ID === user.ID);
    }

}

module.exports = new Service();