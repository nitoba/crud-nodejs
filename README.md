# CRUD in NodeJs

Studies in NodeJs, creating one simple CRUD

---

# ↓ Quick Start

- clone this project or fork

```jsx
git clone [https://github.com/NitoBa/crud-node.git](https://github.com/NitoBa/crud-node.git)
```

- setup your mongo database

On this protect was used Mongodb Atlas

- install dependecies

```jsx
npm intall or npm i
```

- Run the project with script created

```jsx
npm run dev
```

# ↓Endpoints / Routes

- Create a new User in database

[http://localhost:3333/users](http://localhost:3333/users)   http method Post

- List all Users in database

[http://localhost:3333/users](http://localhost:3333/users)  http method Get

- Edit an Users in database

[http://localhost:3333/users](http://localhost:3333/users):id  http method Put

- Delete an Users in database

[http://localhost:3333/users](http://localhost:3333/users)/:id  http method Delete

- List an User in database

[http://localhost:3333/users](http://localhost:3333/users)  http method Get  Request body with 'username'