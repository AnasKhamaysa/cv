document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeToggle");
  btn.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
});

document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const skills = ["Object oriented programming in JAVA/Python", "HTML", "CSS", "JavaScript", "PHP", "C/C++", "Problem solving", "MySQL", "WFA .NET C#", "Python", "Machine Learning"];
const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(skill => {
  const span = document.createElement("span");
  span.textContent = skill;
  skillsContainer.appendChild(span);
});

window.onload = function() {
  document.getElementById("downcv").onclick = downcv;
  document.getElementById("myfacebook").onclick = gofacebook;
  document.getElementById("mylinkedin").onclick = golinkedin;
  document.getElementById("database").onclick = downdatabase;
  document.getElementById("datacom").onclick = downdatacom;
  document.getElementById("VB").onclick = downvb;
  document.getElementById("ML").onclick = downml;
  document.getElementById("BA").onclick = downba;
  document.getElementById("oracle").onclick = downoracle;
  document.getElementById("intro_to_syber").onclick = downintrotosiber;
  document.getElementById("packet_tracer").onclick = downpackettracer;
}

function downcv() {
  window.open("ANAS A A KHAMAYSA.pdf");
}

function golinkedin() {
  window.open("https://www.linkedin.com/in/anas-a-a-khamaysa-1a17b33a6");
}

function gofacebook() {
  window.open("https://www.facebook.com/anas.ahmad.khamaysa");
}

function downdatabase() {
  window.open("DatabaseProject.pdf");
}

function downdatacom() {
  window.open("https://github.com/AnasKhamaysa/Data-communication-project.git");
}

function downvb() {
  window.open("https://github.com/AnasKhamaysa/BusBooking_Windows_Form.git");
}

function downml() {
    window.open("https://github.com/AnasKhamaysa/ML_Car_Price_Prediction.git");
}

function downba() {
    window.open("https://github.com/AnasKhamaysa/keystroke-biometric-authentication.git);
}

function downoracle() {
    window.open("Oracle_Certificate_ANAS A A KHAMAYSA.pdf");
}

function downintrotosiber() {
    window.open("Introduction_to_Cybersecurity_certificate_anas34592-gmail-com_9a576bf1-2559-4a88-aaf3-57ea2609acad.pdf");
}

function downpackettracer() {
    window.open("Getting_Started_with_Cisco_Packet_Tracer_certificate_anas34592-gmail-com_6b49eb12-ad19-4f76-8f4c-c690d03eb265.pdf");
}
