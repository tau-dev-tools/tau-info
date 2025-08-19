// TAU Developer Tools - Interactive Features

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")
  const menuIcon = mobileMenuToggle.querySelector(".menu-icon")
  const closeIcon = mobileMenuToggle.querySelector(".close-icon")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  // Toggle mobile menu
  mobileMenuToggle.addEventListener("click", () => {
    const isMenuOpen = !mobileMenu.classList.contains("hidden")

    if (isMenuOpen) {
      // Close menu
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    } else {
      // Open menu
      mobileMenu.classList.remove("hidden")
      menuIcon.classList.add("hidden")
      closeIcon.classList.remove("hidden")
    }
  })

  // Close mobile menu when clicking on a link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = mobileMenuToggle.contains(event.target) || mobileMenu.contains(event.target)

    if (!isClickInsideNav && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    }
  })

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href === "#") return

      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll effect to navigation
  const navigation = document.querySelector(".navigation")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // Add/remove background opacity based on scroll
    if (scrollTop > 50) {
      navigation.style.backgroundColor = "rgba(10, 10, 15, 0.98)"
    } else {
      navigation.style.backgroundColor = "rgba(10, 10, 15, 0.95)"
    }

    lastScrollTop = scrollTop
  })

  // Add loading animation for external links
  const externalLinks = document.querySelectorAll('a[href^="http"]')
  externalLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Add a subtle loading state
      this.style.opacity = "0.7"
      setTimeout(() => {
        this.style.opacity = "1"
      }, 200)
    })
  })

  // Add hover effects for cards
  const cards = document.querySelectorAll(".product-card, .contact-card, .detailed-product-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.transition = "transform 0.2s ease-in-out"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Skip if button is disabled
      if (this.classList.contains("btn-disabled")) {
        e.preventDefault()
        return
      }

      // Create ripple effect
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for fade-in animation
  const animatedElements = document.querySelectorAll(
    ".product-card, .contact-card, .detailed-product-card, .additional-info-card",
  )
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(el)
  })

  // Add typing effect to hero title (only on home page)
  const heroTitle = document.querySelector(".hero-title")
  if ((heroTitle && window.location.pathname === "/") || window.location.pathname.includes("index.html")) {
    const originalText = heroTitle.textContent
    heroTitle.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500)
  }

  // Add parallax effect to hero background elements
  const heroBlurs = document.querySelectorAll(".hero-blur-1, .hero-blur-2")
  if (heroBlurs.length > 0) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5

      heroBlurs.forEach((blur, index) => {
        const multiplier = index === 0 ? 0.3 : 0.5
        blur.style.transform = `translateY(${rate * multiplier}px)`
      })
    })
  }

  // Add form validation if contact forms exist
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Basic form validation
      const inputs = form.querySelectorAll("input[required], textarea[required]")
      let isValid = true

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false
          input.style.borderColor = "#ef4444"
          input.style.boxShadow = "0 0 0 1px #ef4444"
        } else {
          input.style.borderColor = ""
          input.style.boxShadow = ""
        }
      })

      if (isValid) {
        // Show success message
        const successMessage = document.createElement("div")
        successMessage.textContent = "Thank you for your message! We'll get back to you soon."
        successMessage.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background-color: var(--primary);
                    color: white;
                    padding: 1rem;
                    border-radius: var(--radius);
                    z-index: 1000;
                    animation: slideIn 0.3s ease-out;
                `

        document.body.appendChild(successMessage)

        setTimeout(() => {
          successMessage.remove()
        }, 5000)

        // Reset form
        form.reset()
      }
    })
  })

  // Add keyboard navigation support
  document.addEventListener("keydown", (e) => {
    // Close mobile menu with Escape key
    if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    }
  })

  // Add focus management for accessibility
  const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
  )

  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid var(--primary)"
      this.style.outlineOffset = "2px"
    })

    element.addEventListener("blur", function () {
      this.style.outline = ""
      this.style.outlineOffset = ""
    })
  })

  console.log("TAU Developer Tools website loaded successfully!")
})

// Add CSS for ripple effect
const style = document.createElement("style")
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`
document.head.appendChild(style)
