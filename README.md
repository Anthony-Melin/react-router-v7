# React router V7 demo

This is a sample projet on how to define routes with react router V7.

**Disclaimer**

This project is based on vite 5.5.5 while 6.0.1 has been released because there is a conflict of version raised by NPM.

## Steps to reproduce

1) Install vite

    npm create vite@5.5.5 project-name -- --template react

2) Install react-router

    npm i react-router@7.0.1
    npm i react-router-dom@7.0.1
    npm i @react-router/dev@7.0.1

3) Clean up vite

Remove React application files in src folder and index.html. It won't be used (only main.jsx and svgs are kept actually).

    rm src/App.css
    rm src/App.jsx
    rm src/index.css
    rm index.html
