const listscore = [
  { name: 'Name', score: 100 },
  { name: 'Name', score: 20 },
  { name: 'Name', score: 50 },
  { name: 'Name', score: 78 },
  { name: 'Name', score: 125 },
  { name: 'Name', score: 77 },
  { name: 'Name', score: 42 },
];

const displayScores = () => {
  const scoreBoardContainer = document.querySelector('#scores');
  scoreBoardContainer.innerHTML = '';
  listscore.forEach((user) => {
    scoreBoardContainer.innerHTML += `<li>
        <p>${user.name}: ${user.score}</p>
        </li>`;
  });
};

exports.displayScores = displayScores;