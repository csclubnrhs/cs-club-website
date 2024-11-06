let watching = document.getElementById('dvd');
let eyeList = [];

watching.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
        let eyes = document.createElement('img');
        eyes.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0f430a6-d612-4822-9512-75ff2d9b23ad/dfxr8nu-cf8e043c-67ac-4b93-89e5-ff64a38256b6.png/v1/fill/w_947,h_840/creepy_eye_by_smellyknickknacks_dfxr8nu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQwIiwicGF0aCI6IlwvZlwvYzBmNDMwYTYtZDYxMi00ODIyLTk1MTItNzVmZjJkOWIyM2FkXC9kZnhyOG51LWNmOGUwNDNjLTY3YWMtNGI5My04OWU1LWZmNjRhMzgyNTZiNi5wbmciLCJ3aWR0aCI6Ijw9OTQ3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.tWb-6gpGqpLvCM3czo-onKZiLIUdkcdMtIDPZXR99tc';
        eyes.style.position = 'absolute';
        eyes.style.width = '25px';
        eyes.style.height = 'auto';
        eyes.style.top = Math.random() * 1920 + 'px';
        eyes.style.left = Math.random() * 1080 + 'px';
        document.getElementById('dvdeye').appendChild(eyes);
    }
});