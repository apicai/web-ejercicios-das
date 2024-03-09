(function(global) {

  // Highlight footnotes
  global.onhashchange = function() { 
    Array.from(global.document.querySelectorAll('.footnote-definition')).forEach(e => 
      e.id === global.location.hash.substring(1) ? 
      e.classList.add("highlight") || e.classList.remove("lowlight") :
      e.classList.remove("highlight") || e.classList.add("lowlight")
    );
  }

  // Open external links in a new tab
  Array.from(global.document.querySelectorAll("a[href^=http]:not(a[title])")).forEach(a => {
    a.innerHTML += '<i class="fa fa-external-link" title="Abre en una pestaña nueva"></i>';
    a.target = "_blank";
  });

  // Add React sandboxes
  if (document.querySelectorAll('.sandpack').length) {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = document.currentScript.src + '/../../react/js/sandpack.js';
    document.body.appendChild(script);
  }

  // Add Codepen sandboxes
  if (document.querySelectorAll('.codepen').length) {
    const script = document.createElement('script');
    script.src = "https://static.codepen.io/assets/embed/ei.js";
    document.body.appendChild(script);
  }

  // Remember answers logic...
  function save(id, value) { global.localStorage && global.localStorage.setItem(id, value); }
  function read(id) { return global.localStorage && global.localStorage.getItem(id); }
  // Avoid hidden text in textareas with scroll
  function fitContent(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight + 12)+"px";
    document.getElementById(element.id + '-span').textContent = element.value;
  }
  // All questions in current page
  function getQuestions() {
    return Array.from(global.document.querySelectorAll('blockquote > p'))
                .filter(el => el.textContent.startsWith('❓'))
                .map(el => el.parentElement);
  }
  function getAnswers() {
    return Array.from(global.document.querySelectorAll(".answer-area"));
  }
  // Textarea for each question
  function answerArea(question, questionNumber) {
    const id = global.location.pathname + "#" + questionNumber;
    question.addEventListener('keydown', e => e.stopPropagation());
    question.className = 'question';
    question.innerHTML += '<p><textarea id="' + id + '" class="answer-area" placeholder="Respuesta..."></textarea><span id="' + id + '-span" class="answer-span"></span></p>';
  }
  // Summary of answers
  function answerStats() {
    if (getAnswers().length === 0) return;
    const answerStats = document.createElement('div');
    answerStats.id = "answer-stats";
    answerStats.innerHTML = '<a onclick="setTimeout(print, 100);" title="Entregar" aria-label="Entregar"><i class="fa fa-print"></i></a><span></span>';
    global.document.querySelector('main').insertBefore(answerStats, global.document.querySelector('.footnote-definition'));
    updateAnswerStats();
  }
  function updateAnswerStats() {
    const answers = getAnswers();
    const answered = answers.map(a => read(a.id) ? 1 : 0).reduce((total, i) => total + i);
    const completed = answers.length === answered;
    global.document.querySelector('#answer-stats a').hidden = !completed;
    global.document.querySelector('#answer-stats span').textContent = 
    (completed ? ' ' : '✘ ') + answered + ' de ' + answers.length + ' respuestas completadas';
  }

  getQuestions().forEach((q, i) => answerArea(q, i));
  getAnswers().forEach((a, i) => {
    a.oninput = () => fitContent(a) || save(a.id, a.value) || updateAnswerStats();
    a.value = read(a.id);
    a.value && fitContent(a);
  });
  answerStats();

})(this);