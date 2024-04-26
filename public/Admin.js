async function loadUsers() {
    try {
        const response = await fetch('/users');
        const users = await response.json();
        const list = document.createElement('ul');
        users.forEach(user => {
            const item = document.createElement('li');
            item.textContent = `ID: ${user.id}, Email: ${user.email}, FirstName: ${user.firstName}, LastName: ${user.lastName}, State: ${user.state}`;
            list.appendChild(item);
        });
        document.body.appendChild(list);
    } catch (error) {
        console.error('Error loading the users:', error)
    }
}

document.addEventListener('DOMContentLoaded', loadUsers);