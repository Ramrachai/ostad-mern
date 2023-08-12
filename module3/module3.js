const qaList = document.getElementById("qa-list")

qaArray.map(item => {
    qaList.innerHTML += `
        <section>
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <span id="q-title">${item.id}. ${item.question.title}</span>
                    <button class="toggle-qa">Show <span>Question</span></button>
                </div>
                <div class="card-body">
                    <div class="question d-none">
                        <pre class="" id="q-description">${item.question.description}</pre>
                    </div>
                    <pre class="answer"><code class="language-javascript" id="answer">${item.answer} </code></pre>
                </div>
            </div>
        </section>
    `
})

const toggleButtons = document.querySelectorAll('.toggle-qa');

// Attach click event listener to each button
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const question = card.querySelector('.question');
        const answer = card.querySelector('.answer');

        // Toggle the visibility of the question section
        question.classList.toggle('d-none');
        answer.classList.toggle('d-none');

        // Toggle the text of the button
        const buttonText = button.querySelector('span');
        buttonText.textContent = question.classList.contains('d-none') ? 'Question' : 'Answer';
    });
});


