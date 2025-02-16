document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("active")) return; // Prevent unnecessary re-render

    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active", "large-tab"));
    document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active-content"));

    tab.classList.add("active", "large-tab");
    document.getElementById(tab.getAttribute("data-tab")).classList.add("active-content");
  });
});

// background animation
document.addEventListener("DOMContentLoaded", function() {
  // Get the container element
  const container = document.getElementById('bg-animation-stars');

  // Create 150 instances of <div class="starfield"></div>
  for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.classList.add('starfield');
      container.appendChild(star);
  }
});

document.querySelectorAll(".rotated-box, .rotated-box2").forEach((box) => {
  box.addEventListener("click", () => {
    const projectId = box.getAttribute("data-id");
    const project = document.getElementById(`project-${projectId}`);

    document.querySelectorAll(".project-item").forEach((p) => {
      p.classList.remove("active-project");
      p.classList.add("inactive-project"); // Ensures previous projects are hidden
    });

    project.classList.remove("inactive-project");
    project.classList.add("active-project");
  });
});

// Select the .box-shadow-test element
document.querySelector('.box-shadow-test').addEventListener('click', () => {
  // Remove 'active-content' class from all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active-content');
  });

  // Remove 'active' class from all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Add 'active-content' to the contact tab content
  document.getElementById('contact').classList.add('active-content');

  // Add 'active' class to the 'Contact' tab
  const contactTab = document.querySelector('[data-tab="contact"]'); // Assuming the tab has a data-tab attribute
  if (contactTab) {
    contactTab.classList.add('active');
  }
});

// Apply event listeners to both .rotated-box and .rotated-box2
document.querySelectorAll('.rotated-box, .rotated-box2').forEach((box) => {
  box.addEventListener('click', () => {
    // Remove the 'active' class from all boxes
    document.querySelectorAll('.rotated-box, .rotated-box2').forEach((b) => {
      b.classList.remove('active');
    });

    // Add the 'active' class to the clicked box
    box.classList.add('active');
  });
});

// copy button for my email
const copyButton = document.getElementById('copyButton');
  const textToCopy = "paan-kaur.riives@voco.ee";

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      copyButton.textContent = 'Copied!'; 
      setTimeout(() => {
        copyButton.textContent = 'Copy my e-mail';
      }, 2000); 
    } catch (err) {
      console.error('Failed to copy: ', err);
      copyButton.textContent = 'Error!'; 
       setTimeout(() => {
        copyButton.textContent = 'Sorry, need to copy manually';
      }, 2000); 
    }
  });
  // copy button for my phone
const copyButtonPhone = document.getElementById('copyButtonPhone');
const textToCopyPhone = "+37256258379";

copyButtonPhone.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(textToCopyPhone);
    copyButtonPhone.textContent = 'Copied!'; 
    setTimeout(() => {
      copyButtonPhone.textContent = 'Copy my phone number';
    }, 2000); 
  } catch (err) {
    console.error('Failed to copy: ', err);
    copyButtonPhone.textContent = 'Error!'; 
     setTimeout(() => {
      copyButton.textContent = 'Sorry, need to copy manually';
    }, 2000); 
  }
});