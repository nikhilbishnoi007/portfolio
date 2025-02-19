let menu=document.querySelector(".menu-toggle")
menu.addEventListener("click",()=>{
    const nav=document.querySelector(".navlink")
    nav.classList.toggle("show");
})

    const messages = [
    " Welcome to my portfolio!", 
    "I’m a front-end developer",
    " passionate about creating clean, ",
    "responsive, and user-friendly web experiences.",
    " Explore my work and feel free to connect!"
    ];

    let i = 0;  // Line index
    let j = 0;  // Word index
    let currentText = "";

    function typeEffect() {
      if (i < messages.length) {
        let words = messages[i].split(" ");  // Split the line into words
        if (j < words.length) {
          currentText += words[j] + " ";  // Add one word at a time
          document.getElementById("text").innerHTML = currentText;
          j++;
          setTimeout(typeEffect, 300);  // Adjust typing speed (300ms per word)
        } else {
          currentText += "<br>";  // Move to the next line after the current message completes
          i++;
          j = 0;
          setTimeout(typeEffect, 1000);  // Delay before starting the next line
        }
      }
    }

    typeEffect();
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
    
          // Optional delay effect (in milliseconds)
          setTimeout(() => {
            console.log(targetId + " reached with delay!");
          }, 400); // 500ms delay
        });
      });
      const sections = document.querySelectorAll('.section');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, {
        threshold: 0.2 // Content will load when 20% of the section is visible
      });
      
      sections.forEach(section => {
        observer.observe(section);
      });
 