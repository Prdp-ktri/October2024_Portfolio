console.log("Script running.....");
document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 300);
  }
});

const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    service_id: 'service_8dbeqzq',
    template_id: 'template_g9gko59',
    user_id: 'OzsUZj_-vxY_eTBQO', // API key
    template_params: {
      email: email,
      phone: phone,
      projectInterest: projectInterest
    }
  })
});
