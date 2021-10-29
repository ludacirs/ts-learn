class User {
    #username: string;
    private address = 'korea';

    constructor(username: string) {
        this.#username = username;
    }

    introduce() {
        console.log(`Hello, my name is ${this.#username}! and i'm living in ${this.address}`);
    }
}

let user = new User("Jeremy Bearimy");