document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Typing effect for the hero section
  const codeContent = `const developer = {
  name: "Sandhyarani",
  role: "Java Full Stack Developer",
  location: "Bangalore, India",
  passion: "Building elegant web experiences",
  coffee: true ☕
};`;

  const codeEditor = document.getElementById('typewriter');
  let i = 0;
  
  function typeWriter() {
    if (i < codeContent.length) {
      let char = codeContent.charAt(i);
      // Basic syntax highlighting logic for typing
      if (char === '\n') {
        codeEditor.innerHTML += '<br>';
      } else if (char === ' ') {
        codeEditor.innerHTML += '&nbsp;';
      } else {
        codeEditor.innerHTML += char;
      }
      i++;
      setTimeout(typeWriter, 50); // Typing speed
    } else {
      // Once typing is done, apply actual syntax highlighting for better look
      codeEditor.innerHTML = `
<span class="keyword">const</span> <span class="variable">developer</span> = {<br>
&nbsp;&nbsp;<span class="property">name</span>: <span class="string">"Sandhyarani"</span>,<br>
&nbsp;&nbsp;<span class="property">role</span>: <span class="string">"Java Full Stack Developer"</span>,<br>
&nbsp;&nbsp;<span class="property">location</span>: <span class="string">"Bangalore, India"</span>,<br>
&nbsp;&nbsp;<span class="property">passion</span>: <span class="string">"Building elegant web experiences"</span>,<br>
&nbsp;&nbsp;<span class="property">coffee</span>: <span class="boolean">true</span> ☕<br>
};`;
    }
  }

  // Start typing after a short delay
  setTimeout(typeWriter, 1000);

  // 3D Card Effect for Code Editor
  const heroEditor = document.querySelector('.hero-editor');
  const codeEditorBlock = document.querySelector('.code-editor');

  if (heroEditor && codeEditorBlock) {
    heroEditor.addEventListener('mousemove', (e) => {
      const rect = heroEditor.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 25;
      const y = (e.clientY - rect.top - rect.height / 2) / 25;
      
      // Update transform. Note: x moves rotateY, and y moves rotateX
      codeEditorBlock.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    heroEditor.addEventListener('mouseenter', () => {
      codeEditorBlock.classList.add('hovered');
    });

    heroEditor.addEventListener('mouseleave', () => {
      codeEditorBlock.style.transform = `rotateY(0deg) rotateX(0deg)`;
      codeEditorBlock.classList.remove('hovered');
    });
  }
});
