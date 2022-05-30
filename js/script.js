// Task 1 - Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
//          щоб отримати 5 елементів в рядку.
//          Для кожного елементу свій блок div.post
//          Всі характеристики повинні мати свої блоки всередені div.post
//          https://jsonplaceholder.typicode.com/posts

const content = document.getElementsByClassName('content')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(value => {
        for (const elem of value) {
            const ul = document.createElement('ul');
            ul.classList.add('wrap');
            ul.innerHTML = `
                <li>${elem.id}</li>
                <li>${elem.title}</li>
                <li>${elem.body}</li>
            `;
            content.appendChild(ul);
        }
    });

// Task 2 - Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//          Для кожного елементу свій блок div.comment
//          Всі характеристики повинні мати свої блоки всередені div.comment
//          https://jsonplaceholder.typicode.com/comments

const commentsWrap = document.getElementsByClassName('comments_wrap')[0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(value => {
        for (const elem of value) {
            const div = document.createElement('div');
            const ul = document.createElement('ul');
            div.classList = 'comment';
            ul.innerHTML = `
                <li>${elem.id}</li>
                <li>${elem.name}</li>
                <li>${elem.email}</li>
                <li>${elem.body}</li>
            `;
            commentsWrap.appendChild(div);
            div.appendChild(ul);
        }
    })