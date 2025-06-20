class PasswordManager {
    constructor() {
        this.passwords = {}
    }
    addPassword(service, password) {
        const specialCharacters = [`!`, `@`, `$`, `%`, `&`]
        if (password.length < 8) {
            return
        }
        for (let i = 0; i < password.length; i++) {
            if (specialCharacters.includes(password[i])) {
                this.passwords[service] = password;
                return
            }
        }


    }

    getService(service) {
        return this.passwords[service]
    }

    listServices() {
        const keys = Object.keys(this.passwords);
        return keys;
    };

}


const password_manager1 = new PasswordManager();
password_manager1.addPassword("netflix", "password!")
password_manager1.addPassword("Sky", "AnotherPassword@");
password_manager1.addPassword("Nintendo", "M@rioIsGreat!")
console.log(password_manager1.passwords);
console.log(password_manager1.getService("netflix"))
console.log(password_manager1.listServices());




// const dummy = "leaves";
// const growth = "branches"

// const plant = {
//     leaves: "green",
//     branches: 5,
//     flowers: true

// }

// console.log(plant[dummy]);
// console.log(plant[growth]);


// # Purpose: Manage a user's (valid) passwords
// #
// # Methods:
// # 1. Name: __init__
// # Arguments: none
// # 2. Name: add
// # Purpose: add a password for a service IF it is valid, otherwise do nothing
// # Arguments: one string representing a service name,
// # one string representing a password
// # Returns: None
// # 3. Name: get_for_service
// # Arguments: one string representing a service name
// # Returns: the password for the given service, or None if none exists
// # 4. Name: list_services
// # Arguments: none
// # Returns: a list of all the services for which the user has a password
// #
// # A reminder of the validity rules:
// # 1. A password must be at least 8 characters long
// # 2. A password must contain at least one of the following special characters:
// # `!`, `@`, `$`, `%` or `&`
// #
// # We recommend that you store the passwords in a dictionary, where the keys are
// # the service names and the values are the passwords.
// #
// # Example usage:
// # > password_manager = PasswordManager()
// # > password_manager.add('gmail', '12ab5!678') # Valid password
// # > password_manager.add('facebook', '$abc1234') # Valid password
// # > password_manager.add('twitter', '12345678') # Invalid password, so ignored
// # > password_manager.get_for_service('facebook')
// # '$abc1234'
// # > password_manager.get_for_service('not_real')
// # None
// # > password_manager.get_for_service('twitter')
// # None
// # > password_manager.list_services()
// # ['gmail', 'facebook']
// #