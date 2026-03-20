// AIML 501 Residency Copilot — floating chat widget

(function () {
  'use strict';

  var MAX_INPUT_LENGTH = 300;
  var BOT_RESPONSE_DELAY_MS = 350;

  /* ── Knowledge base ──────────────────────────────────────────── */
  var KB = [
    {
      patterns: ['hello', 'hi', 'hey', 'greet', 'howdy', 'good morning', 'good afternoon', 'good evening'],
      response: "Hello! 👋 I'm the <strong>AIML 501 Residency Copilot</strong>. I can answer questions about this portfolio, its AI/ML artifacts, and key concepts from the AIML 501 program. What would you like to know?"
    },
    {
      patterns: ['who are you', 'what are you', 'what is this', 'about you', 'your purpose'],
      response: "I'm the <strong>AIML 501 Residency Copilot</strong> — an AI assistant built into this portfolio to help you explore Naga Venkata Satyanarayana Devarapalli's work in Artificial Intelligence and Machine Learning. Ask me about any artifact, skill, or AI concept!"
    },
    {
      patterns: ['artifact 1', 'chatbot', 'botpress', 'mizou', 'ai lab'],
      response: "<strong>Artifact 1 – AI Lab Chatbot</strong> 🤖<br>This artifact demonstrates the creation of a no-code chatbot using <em>Botpress</em> and <em>Mizou AI</em> platforms. The focus was on user interaction design, natural language understanding (NLU), and automating customer-support workflows — all without writing a single line of back-end code. <a href='artifact1.html'>View full details →</a>"
    },
    {
      patterns: ['artifact 2', 'timeline', 'history', 'evolution', 'ai history', 'milestones', '1956'],
      response: "<strong>Artifact 2 – AI Timeline</strong> 📅<br>A visual timeline tracing AI and ML evolution from the Dartmouth Conference in <em>1956</em> through modern breakthroughs like GPT and diffusion models. It highlights key milestones such as the Perceptron, expert systems, deep learning resurgence, and transformer architectures. <a href='artifact2.html'>View full details →</a>"
    },
    {
      patterns: ['artifact 3', 'schoolai', 'school ai', 'education', 'personalized learning', 'classroom'],
      response: "<strong>Artifact 3 – SchoolAI Project</strong> 🎓<br>An AI-powered educational tool integrated into real classroom settings. The project leveraged adaptive learning algorithms to personalise content delivery, boosting student engagement and measurable learning outcomes. <a href='artifact3.html'>View full details →</a>"
    },
    {
      patterns: ['artifact 4', 'data challenge', 'big data', 'healthcare', 'privacy', 'hadoop', 'spark', 'pipeline'],
      response: "<strong>Artifact 4 – Data Challenges</strong> 💾<br>This artifact tackled large-scale healthcare data using <em>Hadoop</em> and <em>Spark</em> distributed-computing frameworks. Privacy-preserving techniques (differential privacy, k-anonymisation) were applied alongside scalable ML pipelines for clinical outcome prediction. <a href='artifact4.html'>View full details →</a>"
    },
    {
      patterns: ['artifact 5', 'model training', 'workshop', 'tensorflow playground', 'hyperparameter', 'supervised'],
      response: "<strong>Artifact 5 – Model Training Workshop</strong> 🧠<br>A hands-on workshop covering supervised learning fundamentals, model selection strategies, and hyperparameter tuning — demonstrated live with <em>TensorFlow Playground</em> simulations. Participants gained intuition for bias-variance trade-offs and regularisation. <a href='artifact5.html'>View full details →</a>"
    },
    {
      patterns: ['skills', 'python', 'r programming', 'language'],
      response: "<strong>Python &amp; R Programming</strong> 🐍<br>Core skills include writing clean, efficient code for data analysis, modelling, and visualisation using libraries such as <em>Pandas</em>, <em>NumPy</em>, <em>Matplotlib</em>, and <em>ggplot2</em>."
    },
    {
      patterns: ['machine learning', 'scikit', 'tensorflow', 'deep learning', 'classification', 'regression', 'model'],
      response: "<strong>Machine Learning</strong> 🤖<br>Applied supervised, unsupervised, and deep learning techniques using <em>Scikit-learn</em> and <em>TensorFlow</em> for classification, regression, and predictive modelling. Experience covers the full pipeline — data prep, feature engineering, model training, evaluation, and deployment."
    },
    {
      patterns: ['visualization', 'visualisation', 'power bi', 'tableau', 'dashboard', 'report'],
      response: "<strong>Data Visualisation</strong> 📊<br>Interactive dashboards and executive reports built with <em>Power BI</em> and <em>Tableau</em> to communicate complex data trends to both technical and non-technical stakeholders."
    },
    {
      patterns: ['cloud', 'aws', 'azure', 's3', 'lambda', 'azure ml'],
      response: "<strong>Cloud Platforms</strong> ☁️<br>Experienced deploying AI and data solutions on <em>AWS</em> (S3, Lambda, SageMaker) and <em>Microsoft Azure</em> (Azure ML Studio, Azure SQL, Azure Blob Storage) to enable scalable, production-ready workloads."
    },
    {
      patterns: ['sql', 'database', 'query', 'relational'],
      response: "<strong>SQL &amp; Database Management</strong> 🗄️<br>Proficient in designing normalised relational schemas, writing complex multi-table queries, and optimising indexes and execution plans to ensure fast, reliable data access."
    },
    {
      patterns: ['contact', 'reach', 'email', 'connect', 'hire', 'collaborate'],
      response: "Want to connect? Visit the <a href='feedback.html'>Feedback page</a> to leave a message, or check the bio for contact details. Collaboration inquiries are always welcome! 🤝"
    },
    {
      patterns: ['bio', 'about', 'background', 'who is', 'naga', 'devarapalli'],
      response: "Naga Venkata Satyanarayana Devarapalli is an AI &amp; Data Analytics professional passionate about building practical AI solutions that create real-world impact. <a href='bio.html'>Read the full bio →</a>"
    },
    {
      patterns: ['feedback', 'review', 'comment', 'suggestion'],
      response: "Your feedback is valuable! Head over to the <a href='feedback.html'>Feedback page</a> to share your thoughts on the portfolio. 📝"
    },
    {
      patterns: ['home', 'portfolio', 'main page', 'index'],
      response: "You're already on (or can return to) the <a href='index.html'>Home page</a> to get an overview of all artifacts and skills. 🏠"
    },
    {
      patterns: ['nlp', 'natural language', 'transformer', 'bert', 'gpt', 'llm'],
      response: "<strong>Natural Language Processing (NLP)</strong> 💬<br>NLP powers chatbots, text classifiers, and large language models. Key techniques include tokenisation, embeddings, attention mechanisms, and transformer architectures (BERT, GPT). Artifact 1 explores practical NLP through chatbot design."
    },
    {
      patterns: ['neural network', 'cnn', 'rnn', 'lstm', 'convolutional'],
      response: "<strong>Neural Networks</strong> 🧠<br>Neural networks mimic the brain's structure using layers of weighted nodes. CNNs excel at image tasks; RNNs and LSTMs handle sequential data; and transformers now dominate many tasks. Artifact 5 covers training intuition using TensorFlow Playground."
    },
    {
      patterns: ['overfitting', 'underfitting', 'bias', 'variance', 'regularization', 'regularisation'],
      response: "<strong>Bias–Variance Trade-off</strong> ⚖️<br><em>Overfitting</em> (high variance) means the model memorises training data but generalises poorly. <em>Underfitting</em> (high bias) means the model is too simple. Regularisation techniques (L1/L2, dropout, early stopping) help find the sweet spot."
    },
    {
      patterns: ['help', 'what can you do', 'options', 'menu', 'topics'],
      response: "Here are some things I can help with:<br>• 🔍 Explain any of the <strong>5 Portfolio Artifacts</strong><br>• 🛠️ Describe technical <strong>skills</strong> (Python, ML, Cloud, SQL…)<br>• 🤖 Answer <strong>AI/ML concept</strong> questions (NLP, neural nets, bias-variance…)<br>• 📬 Guide you to the <strong>Feedback or Bio</strong> page<br><br>Just type your question!"
    }
  ];

  var DEFAULT_RESPONSE = "Great question! I don't have a specific answer for that yet, but you can explore all five artifacts on the <a href='index.html'>Home page</a> or check the <a href='bio.html'>Bio</a> for more background. Feel free to ask anything about AI/ML or the portfolio! 😊";

  /* ── Utility: match user input against knowledge base ─────────── */
  function getResponse(text) {
    var lower = text.toLowerCase();
    var bestMatch = null;
    var bestLen = 0;
    for (var i = 0; i < KB.length; i++) {
      var entry = KB[i];
      for (var j = 0; j < entry.patterns.length; j++) {
        var pat = entry.patterns[j];
        if (lower.indexOf(pat) !== -1 && pat.length > bestLen) {
          bestLen = pat.length;
          bestMatch = entry.response;
        }
      }
    }
    return bestMatch !== null ? bestMatch : DEFAULT_RESPONSE;
  }

  /* ── Build DOM ────────────────────────────────────────────────── */
  function buildWidget() {
    // Toggle button
    var toggleBtn = document.createElement('button');
    toggleBtn.id = 'copilot-toggle';
    toggleBtn.setAttribute('aria-label', 'Open AIML 501 Copilot chat');
    toggleBtn.setAttribute('title', 'AIML 501 Copilot');
    toggleBtn.innerHTML = '<span aria-hidden="true">🤖</span>';

    // Chat window
    var chatWindow = document.createElement('div');
    chatWindow.id = 'copilot-window';
    chatWindow.setAttribute('role', 'dialog');
    chatWindow.setAttribute('aria-label', 'AIML 501 Residency Copilot chat window');
    chatWindow.setAttribute('aria-hidden', 'true');

    // Header
    var header = document.createElement('div');
    header.id = 'copilot-header';
    header.innerHTML =
      '<span>🤖 AIML 501 Residency Copilot</span>' +
      '<button id="copilot-close" aria-label="Close chat">✕</button>';

    // Messages container
    var messages = document.createElement('div');
    messages.id = 'copilot-messages';
    messages.setAttribute('aria-live', 'polite');
    messages.setAttribute('aria-atomic', 'false');

    // Input row
    var inputRow = document.createElement('div');
    inputRow.id = 'copilot-input-row';

    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'copilot-input';
    input.placeholder = 'Ask me anything…';
    input.setAttribute('aria-label', 'Chat message input');
    input.maxLength = MAX_INPUT_LENGTH;

    var sendBtn = document.createElement('button');
    sendBtn.id = 'copilot-send';
    sendBtn.setAttribute('aria-label', 'Send message');
    sendBtn.textContent = 'Send';

    inputRow.appendChild(input);
    inputRow.appendChild(sendBtn);

    chatWindow.appendChild(header);
    chatWindow.appendChild(messages);
    chatWindow.appendChild(inputRow);

    document.body.appendChild(toggleBtn);
    document.body.appendChild(chatWindow);

    // Welcome message
    appendMessage('bot', "Hi there! 👋 I'm the <strong>AIML 501 Residency Copilot</strong>. Ask me about the portfolio artifacts, AI/ML concepts, or type <em>help</em> to see what I can do!");

    /* ── Events ─────────────────────────────────────────────────── */
    toggleBtn.addEventListener('click', openChat);
    document.getElementById('copilot-close').addEventListener('click', closeChat);
    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); handleSend(); }
    });
  }

  function openChat() {
    var win = document.getElementById('copilot-window');
    var btn = document.getElementById('copilot-toggle');
    win.classList.add('open');
    win.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-label', 'Close AIML 501 Copilot chat');
    document.getElementById('copilot-input').focus();
    scrollMessages();
  }

  function closeChat() {
    var win = document.getElementById('copilot-window');
    var btn = document.getElementById('copilot-toggle');
    win.classList.remove('open');
    win.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-label', 'Open AIML 501 Copilot chat');
    btn.focus();
  }

  function handleSend() {
    var input = document.getElementById('copilot-input');
    var text = input.value.trim();
    if (!text) { return; }
    appendMessage('user', escapeHtml(text));
    input.value = '';
    // Brief delay so the user message renders first
    setTimeout(function () {
      appendMessage('bot', getResponse(text));
    }, BOT_RESPONSE_DELAY_MS);
  }

  function appendMessage(role, html) {
    var messages = document.getElementById('copilot-messages');
    var bubble = document.createElement('div');
    bubble.className = 'copilot-bubble copilot-' + role;
    bubble.innerHTML = html;
    messages.appendChild(bubble);
    scrollMessages();
  }

  function scrollMessages() {
    var messages = document.getElementById('copilot-messages');
    if (messages) { messages.scrollTop = messages.scrollHeight; }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ── Init ─────────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }
}());
