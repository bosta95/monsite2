// Traductions (approche hybride professionnelle)
// Français = contenu HTML par défaut
// JavaScript = seulement traductions anglaises
const translations = {
  en: {
    slogan: "Premium home entertainment excellence, finally accessible.",
    mobileMenu: {
      home: "Home",
      infos: "Information",
      offers: "Our Offers",
      contact: "Contact", 
      faq: "FAQ"
    },
    title: "Transform the way you watch television",
    desc: "Discover why <strong>50,000+ families</strong> have chosen our premium entertainment solution. Movies, series, live sports - everything you love, instantly accessible in 4K quality.",
    btn: "Explore our plans",
    note: "Risk-free trial - Satisfaction guaranteed or money back.",
    offersTitle: "Which plan fits your needs?",
    
    // Traductions des cartes d'offres
    offers: {
      discovery: {
        title: "Discovery",
        features: [
          "Perfect for testing our service",
          "Complete access without commitment", 
          "HD quality guaranteed"
        ],
        btn: "Start trial"
      },
      balance: {
        title: "Balance", 
        features: [
          "Smart choice - 25% savings",
          "4K quality on all your devices",
          "Our most popular plan"
        ],
        btn: "Choose this plan"
      },
      passion: {
        title: "Passion",
        features: [
          "For true enthusiasts",
          "Exceptional 4K HDR quality",
          "Maximum yearly savings"
        ],
        btn: "Get the savings"
      }
    },
    
    // Traductions anglaises pour les autres pages
    contact: {
      title: "Contact Us",
      subtitle: "Our team is available 24/7 to answer all your questions and support you in your VisionZone experience.",
      methods: {
        email: { title: "Email", value: "support@visionzone.tv" },
        chat: { title: "Live Chat", value: "Available 24/7" },
        phone: { title: "Phone", value: "+33 1 23 45 67 89" }
      },
      form: {
        name: "Full Name",
        email: "Email",
        subject: "Subject",
        subjectPlaceholder: "Select a subject",
        subjects: {
          support: "Technical Support",
          billing: "Billing",
          partnership: "Partnership",
          other: "Other"
        },
        message: "Message",
        submit: "Send Message",
        success: "Message sent! We will get back to you as soon as possible."
      }
    },
    
    infos: {
      devTitle: "Passionate Developer",
      devDesc: "Developer passionate about streaming and channel redistribution. I help users discover innovative solutions to enjoy next-generation television.",
      cards: [
        {
          title: "Quick Installation",
          desc: "Learn how to install our app in just a few clicks and instantly enjoy all our premium services.",
          btn: "View Installation Guide"
        },
        {
          title: "Platform Access", 
          desc: "Go directly to our streaming platform and explore all the exclusive features.",
          btn: "Access the Platform"
        },
        {
          title: "Support & Assistance",
          desc: "Need help? Our team is available to assist you every step of the way.",
          btn: "Contact Support"
        }
      ],
      installTitle: "Easy and Fast Installation",
      installDesc: "Follow our detailed guide to install the app on your favorite device. Click the button below to start your VisionZone adventure!",
      installBtn: "Install Now"
    },
    
    faq: {
      title: "VisionZone FAQ - All Your Questions Answered",
      subtitle: "Find all the answers to your questions about VisionZone. Installation, quality, pricing, compatibility - Complete guide for your premium entertainment solution.",
      sections: [
        {
          title: "🔧 Service & Technical",
          questions: [
            {
              q: "What exactly is VisionZone?",
              a: "VisionZone is a premium entertainment solution that transforms the way you watch television. We offer a modern and intuitive multimedia platform, access to thousands of content in 4K quality, a personalized experience according to your tastes, French customer service available 7/7. More than 50,000 families already trust us!"
            },
            {
              q: "Why choose VisionZone over another solution?",
              a: "VisionZone stands out for its excellence: Guaranteed quality with stable 4K Ultra HD streaming, Simplicity with 5-minute installation, Reliability with 24/7 365-day service, French support with dedicated team based in France, Transparent pricing with no hidden fees or commitment."
            },
            {
              q: "On which devices can I use VisionZone?",
              a: "VisionZone is compatible with all your devices: Smart TV (Samsung, LG, Sony, Philips, TCL), Android Box (Nvidia Shield, Mi Box, Fire TV Stick), Smartphones and tablets (iOS and Android), Computers (Windows, Mac, Linux), Consoles (PlayStation, Xbox). Up to 5 simultaneous devices with one subscription!"
            }
          ]
        },
        {
          title: "⚡ Technical & Installation",
          questions: [
            {
              q: "What internet connection is needed for VisionZone?",
              a: "Our internet speed recommendations: HD (720p) 5 Mbps minimum, Full HD (1080p) 10 Mbps recommended, 4K Ultra HD 25 Mbps for optimal quality. Our adaptive streaming technology automatically adjusts quality according to your connection to avoid interruptions."
            },
            {
              q: "Is installation complicated?",
              a: "Absolutely not! Installation in 3 simple steps: 1. Download the app on your device, 2. Log in with your credentials received by email, 3. Immediately enjoy your content! Average installation time: 5 minutes. Detailed installation guide provided + technical support available."
            }
          ]
        },
        {
          title: "💰 Pricing & Offers",
          questions: [
            {
              q: "What are your offers and their prices?",
              a: "Our 3 plans adapted to all needs: Discovery (3 months) ideal for testing our service, Balance (6 months) the good quality-price compromise, Passion (12 months) the best value with maximum savings. Common benefits: 4K Ultra HD quality, 5 simultaneous devices, French customer support, Automatic catalog updates."
            },
            {
              q: "Are there hidden fees or commitments?",
              a: "Total transparency at VisionZone! No hidden fees: the displayed price is the final price. No commitment: no automatic renewal. No surprises: no installation fees. Fixed price throughout your subscription, secure one-time payment, clear invoice sent by email."
            }
          ]
        },
        {
          title: "🛠️ Support & Help",
          questions: [
            {
              q: "How to contact customer support?",
              a: "Our French team is here to help you: Email support@visionzone.fr (response within 2h), Live chat available on our site, Phone French non-premium number. Hours: Monday-Friday 9am-7pm, Weekend 10am-4pm, 24/7 emergency technical support."
            },
            {
              q: "Can I get a refund if I'm not satisfied?",
              a: "Your satisfaction is our priority! 7-day guarantee: full refund if not satisfied. Technical problem: prorated refund. Simple procedure: request by email, processing within 48h. More than 98% of our customers are satisfied and renew their subscription! Refund contact: refund@visionzone.fr"
            }
          ]
        },
        {
          title: "⚖️ Legal & Business",
          questions: [
            {
              q: "Is VisionZone legal in France?",
              a: "VisionZone operates as a premium multimedia platform solution. We provide technology and access to content in compliance with current regulations. Our business model is based on providing technical solutions and customer support for multimedia entertainment."
            },
            {
              q: "What's the difference with Netflix, Canal+ or other services?",
              a: "VisionZone positions itself as a comprehensive multimedia solution with different technical approach. While traditional services focus on their own catalog, we offer a technology platform that centralizes access to various content sources with premium 4K quality and French support."
            },
            {
              q: "Can the whole family share the subscription?",
              a: "Absolutely! Our subscriptions are designed for family use. Up to 5 simultaneous devices, parental controls included, personalized profiles for each family member. One subscription, the whole family enjoys it on their favorite devices."
            },
            {
              q: "How to cancel or change my subscription?",
              a: "Maximum flexibility with VisionZone! No commitment: your subscription expires automatically at the end of the period. No automatic renewal. Want to change? Contact us at support@visionzone.fr. Simple and transparent procedure, no retention or cancellation fees."
            }
          ]
        }
      ]
    },
    
    // Traductions de la page de confidentialité
    privacy: {
      title: "Privacy Policy",
      subtitle: "At VisionZone, we respect your anonymity and privacy. We only collect your email address to provide our service. This simple policy explains our transparent practices.",
      date: "December 15, 2024",
      sections: {
        section1: {
          title: "Information we collect",
          content: `<div style="background: rgba(255,255,255,0.04); padding: 25px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 25px;">
              <h4 style="color: #e50914; margin: 0 0 15px 0; font-size: 1.1rem; font-weight: 600;">Data collection</h4>
              <p style="margin: 0 0 20px 0; font-size: 1rem; color: #fff;">VisionZone only collects your email address during registration. No other personal information is required or stored.</p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <h5 style="color: #ccc; margin: 0 0 12px 0; font-size: 1rem; font-weight: 500;">Data collected:</h5>
              <ul style="margin: 0; padding-left: 20px; color: #ddd;">
                <li style="margin-bottom: 8px;">Email address (required for service access)</li>
              </ul>
            </div>
            
            <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 25px;">
              <h5 style="color: #e50914; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Anonymous browsing</h5>
              <p style="margin: 0; color: #ddd; font-size: 0.95rem;">All browsing on the VisionZone website is completely anonymous. We do not collect any browsing data, IP addresses, or tracking cookies. Your visit remains totally private and untracked.</p>
            </div>
            
            <p style="margin: 0; font-size: 0.95rem; color: #aaa; font-style: italic;">Only the email address provided during registration is kept. No other information is collected or stored.</p>`
        },
        section2: {
          title: "How we use your data",
          content: `<p style="margin-bottom: 20px; font-size: 1rem;">Your email address is used exclusively for the following purposes:</p>
            
            <div style="margin-bottom: 20px;">
              <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Service access</h5>
              <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">Transmission of credentials and information necessary for using VisionZone after subscription.</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Technical support</h5>
              <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">Assistance and resolution of technical problems encountered in using the service.</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Essential communications</h5>
              <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">Important notifications about the service (major interruptions, contractual changes).</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
              <p style="margin: 0; font-size: 0.95rem; color: #ccc;"><strong>Commitment:</strong> No commercial, advertising or prospecting use. Your email address is never transmitted to third parties.</p>
            </div>`
        },
        section3: {
          title: "Sharing your data",
          content: `<p style="margin-bottom: 15px;">VisionZone never sells your personal data. We may share your information only in the following cases:</p>
            <ul style="margin-left: 20px; margin-bottom: 20px;">
              <li><strong>Service providers:</strong> Secure payment partners (PayPal, Stripe)</li>
              <li><strong>Legal obligations:</strong> If required by law or judicial authority</li>
              <li><strong>Rights protection:</strong> To protect our rights, property or security</li>
              <li><strong>Consent:</strong> With your explicit authorization</li>
            </ul>
            <p style="background: rgba(229,9,20,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #e50914;">
              <strong>Commitment:</strong> All our partners respect the same data protection standards as we do.
            </p>`
        },
        section4: {
          title: "Security and protection",
          content: `<p style="margin-bottom: 15px;">We implement robust security measures:</p>
            <ul style="margin-left: 20px; margin-bottom: 20px;">
              <li><strong>SSL/TLS encryption:</strong> All communications are encrypted</li>
              <li><strong>Secure storage:</strong> Data hosted on protected servers in Europe</li>
              <li><strong>Restricted access:</strong> Only authorized personnel can access data</li>
              <li><strong>Continuous monitoring:</strong> 24/7 monitoring against intrusions</li>
              <li><strong>Regular updates:</strong> Security systems constantly updated</li>
            </ul>`
        },
        section5: {
          title: "Your GDPR rights",
          content: `<p style="margin-bottom: 15px;">In accordance with GDPR, you have the following rights:</p>
            <ul style="margin-left: 20px; margin-bottom: 20px;">
              <li><strong>Right of access:</strong> View the data we hold about you</li>
              <li><strong>Right of rectification:</strong> Correct or update your information</li>
              <li><strong>Right to erasure:</strong> Request deletion of your data</li>
              <li><strong>Right to portability:</strong> Retrieve your data in standard format</li>
              <li><strong>Right to object:</strong> Oppose the processing of your data</li>
              <li><strong>Right to restriction:</strong> Restrict the use of your data</li>
            </ul>
            <p style="background: rgba(26,115,232,0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #1a73e8;">
              <strong>How to exercise your rights:</strong> Contact us at <a href="mailto:privacy@visionzone.fr" style="color: #1a73e8; text-decoration: none;">privacy@visionzone.fr</a> or via our <a href="contact.html" style="color: #1a73e8; text-decoration: none;">contact form</a>.
            </p>`
        },
        section6: {
          title: "Cookies and similar technologies",
          content: `<p style="margin-bottom: 15px;">We use cookies to improve your experience:</p>
            <ul style="margin-left: 20px; margin-bottom: 20px;">
              <li><strong>Essential cookies:</strong> Necessary for site functionality</li>
              <li><strong>Performance cookies:</strong> Analyze usage to improve service</li>
              <li><strong>Preference cookies:</strong> Remember your choices (language, settings)</li>
            </ul>
            <p style="margin-bottom: 15px;">You can manage your cookie preferences in your browser settings or via our cookie management tool.</p>`
        },
        section7: {
          title: "Data retention",
          content: `<p style="margin-bottom: 15px;">We retain your personal data:</p>
            <ul style="margin-left: 20px; margin-bottom: 20px;">
              <li><strong>During your subscription</strong> and up to 3 years after termination</li>
              <li><strong>Billing data:</strong> 10 years for accounting and tax compliance</li>
              <li><strong>Support data:</strong> 2 years after last interaction</li>
              <li><strong>Security logs:</strong> 1 year maximum</li>
            </ul>
            <p style="margin-bottom: 15px;">After these periods, your data is automatically deleted from our systems securely.</p>`
        }
      },
      contact: {
        title: "Questions about this policy?",
        content: "If you have questions about this privacy policy or the processing of your personal data, please don't hesitate to contact us:"
      }
    },

    // Traductions du footer
    footer: {
      tagline: "Premium home entertainment excellence. Over 50,000 families trust us to transform their daily TV experience.",
      services: {
        title: "Services",
        discovery: "Discovery Plan",
        balance: "Balance Plan", 
        passion: "Passion Plan",
        info: "Information"
      },
      support: {
        title: "Support",
        contact: "Contact",
        faq: "FAQ",
        help: "Help Center",
        tech: "Technical Support"
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Use", 
        cookies: "Cookie Management",
        mentions: "Legal Notices"
      },
      copyright: "© 2024 VisionZone. All rights reserved.",
      legalLinks: {
        privacy: "Privacy",
        terms: "Terms",
        cookies: "Cookies"
      }
    },

    offre3mois: {
      title: "3-Month Offer at €9.99",
      subtitle: "The unbeatable offer!",
      desc: "Enjoy 3 months of unlimited streaming with flawless quality, on all your devices. No commitment, no surprises.",
      price: "€9.99",
      duration: "for 3 full months - 1 screen",
      screenLabel: "Simultaneous screens:",
      screenOptions: ["1 screen", "2 screens", "3 screens", "4 screens"],
      access: "Premium access to all live channels: Bein Sport, DAZN, Canal+, OCS, Champions League...",
      benefits: [
        "HD/4K quality on all your screens",
        "Access to the latest movies & series", 
        "Adult Live +18",
        "Responsive customer support 7/7",
        "No commitment, no hidden fees"
      ],
      paypalBtn: "Buy with PayPal",
      whyTitle: "Why choose this offer?",
      whyList: [
        "The best value for money on the market",
        "Smooth streaming, no interruptions, even at peak times", 
        "Compatible with TV, smartphone, tablet, computer",
        "Instant activation after payment"
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          q: "How do I activate my offer?",
          a: "After payment, you will receive an email with all the instructions to immediately enjoy your subscription."
        },
        {
          q: "Can I cancel at any time?",
          a: "Yes, the offer is without commitment. You can stop whenever you want, with no fees."
        },
        {
          q: "Which devices are compatible?",
          a: "All: Smart TV, Android, iOS, PC, Mac, TV box..."
        }
      ],
      ctaFinal: "Get the 3-month offer now"
    },
    
    offre6mois: {
      title: "Balance Offer 6 Months",
      subtitle: "The perfect long-term experience",
      desc: "Enjoy 6 full months of premium access to our entire catalog with substantial savings. The ideal offer for total immersion in the VisionZone universe.",
      access: "Premium access to all live channels: Bein Sport, DAZN, Canal+, OCS, Champions League, RMC Sport...",
      duration: "6 full months",
      benefits: [
        "6 months of complete access without interruption",
        "Save up to 25% compared to short offers",
        "Complete and exclusive premium catalog",
        "Ultra HD 4K streaming available",
        "Unlimited offline download",
        "Adult Live +18",
        "Priority support and dedicated assistance",
        "Automatic content updates",
        "No commitment beyond the period"
      ],
      screenLabel: "Simultaneous screens:",
      screenOptions: ["1 screen", "2 screens", "3 screens", "4 screens"],
      paymentInfo: "🔒 100% secure payment via PayPal",
      paymentTerms: "By making this payment, you accept our Terms and Conditions and our Privacy Policy.",
      whyTitle: "🎯 Why choose the 6-month offer?",
      whyList: [
        "Maximum savings: Up to 25% discount vs monthly offers",
        "Guaranteed stability: 6 months without service interruption",
        "Exclusive content: Access to new releases in preview",
        "Total flexibility: Screen changes possible at any time",
        "VIP support: Priority assistance 7/7",
        "Free updates: New features included",
        "Premium quality: Unlimited 4K Ultra HD streaming",
        "Satisfaction guaranteed: Dedicated technical support"
      ],
      faqTitle: "❓ Frequently Asked Questions - 6 month offer",
      faqItems: [
        {
          q: "Can I change the number of screens during my 6-month period?",
          a: "Yes, you can adjust the number of screens at any time via your customer area. The difference will be calculated pro rata."
        },
        {
          q: "What happens at the end of the 6 months?",
          a: "Your access expires automatically. No automatic renewal. You can subscribe to a new offer if you wish."
        },
        {
          q: "Is there really a saving compared to shorter offers?",
          a: "Absolutely! The 6-month offer saves you up to 25% compared to monthly offers, a significant saving over time."
        },
        {
          q: "Is the content different from the 3-month offer?",
          a: "No, you have access to the same complete premium catalog. The advantage is in the duration and savings achieved."
        },
        {
          q: "Can I download content to watch offline?",
          a: "Yes, offline download is included without limitation with your premium 6-month offer."
        }
      ],
      ctaFinal: "Take advantage of the 6-month offer now"
    },
    
    offre12mois: {
      title: "Passion Offer 12 Months",
      subtitle: "🏆 Our most complete and economical solution",
      desc: "The ultimate premium experience with 12 months of complete access, all exclusive benefits and maximum savings. More than 50,000 families already trust us for their daily entertainment.",
      access: "👑 VIP premium access to all live channels: Bein Sport, DAZN, Canal+, OCS, Champions League, RMC Sport, Eurosport...",
      duration: "12 full months",
      benefits: [
        "👑 12 months of complete access without interruption",
        "👑 Save up to 40% compared to short offers",
        "👑 Complete and exclusive premium catalog",
        "👑 Guaranteed Ultra HD 4K streaming",
        "👑 Unlimited offline download",
        "👑 Adult Live +18",
        "👑 VIP priority customer support 7/7",
        "👑 Automatic content updates",
        "👑 No commitment beyond the period",
        "👑 Exclusive access to previews",
        "👑 Advanced parental control included",
        "👑 Ultra-fast 5-minute installation",
        "👑 Compatible with all devices (TV, mobile, tablet...)"
      ],
      screenLabel: "Simultaneous screens:",
      screenOptions: ["1 screen", "2 screens", "3 screens", "4 screens"],
      paymentInfo: "🔒 100% secure payment via PayPal",
      paymentTerms: "By making this payment, you accept our Terms and Conditions and our Privacy Policy.",
      whyTitle: "🏆 Why choose the Passion 12-month offer?",
      whyList: [
        "Maximum annual savings: Up to 40% discount vs monthly offers",
        "Guaranteed stability: 12 months without service interruption",
        "VIP exclusive content: Priority access to new releases",
        "Total flexibility: Screen changes possible at any time",
        "Priority VIP support: Dedicated assistance 24/7",
        "Free premium updates: All new features included",
        "Exceptional quality: 4K HDR Ultra HD streaming",
        "Complete satisfaction: Premium technical support",
        "Advanced parental control: Family management included",
        "Ultra-fast installation: 5-minute setup guaranteed"
      ],
      faqTitle: "❓ Frequently Asked Questions - Passion 12 month offer",
      faqItems: [
        {
          q: "Can I change the number of screens during my 12-month period?",
          a: "Yes, you can adjust the number of screens at any time via your customer area. The difference will be calculated pro rata for the remaining period."
        },
        {
          q: "What happens at the end of the 12 months?",
          a: "Your access expires automatically. No automatic renewal. You can subscribe to a new offer if you wish with current rates."
        },
        {
          q: "Is there really 40% savings compared to shorter offers?",
          a: "Absolutely! The Passion 12-month offer saves you up to 40% compared to monthly offers, the biggest saving in our range."
        },
        {
          q: "Is the content different from other offers?",
          a: "You have access to the same complete premium catalog, but with exclusive benefits: VIP access to new releases, priority support and preview updates."
        },
        {
          q: "Can I download content to watch offline?",
          a: "Yes, offline download is included without limitation with your Passion 12-month offer, perfect for your travels."
        }
      ],
      ctaFinal: "Take advantage of the Passion 12-month offer now"
    }
  }
};

// Gestion du menu de langue
document.addEventListener('DOMContentLoaded', function() {
  const langBtnImg = document.getElementById('lang-btn-img');
  const langDropdown = document.getElementById('lang-dropdown');
  
  if (langBtnImg && langDropdown) {
    langBtnImg.addEventListener('click', function(e) {
      e.stopPropagation();
      langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(e) {
      if (!langDropdown.contains(e.target) && e.target !== langBtnImg) {
        langDropdown.style.display = 'none';
      }
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        updateLanguage(lang);
        langDropdown.style.display = 'none';
      });
    });
  }
  
  // Gestion des boutons de langue mobile
  const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');
  if (mobileLangBtns.length > 0) {
    mobileLangBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        updateLanguage(lang);
        
        // Mise à jour visuelle des boutons
        mobileLangBtns.forEach(b => {
          b.classList.remove('active');
          b.style.border = '2px solid rgba(255,255,255,0.3)';
          b.style.color = 'rgba(255,255,255,0.7)';
        });
        
        this.classList.add('active');
        this.style.border = '2px solid #e50914';
        this.style.color = '#e50914';
      });
    });
  }
});

// Fonction pour mettre à jour la langue (approche hybride)
function updateLanguage(lang) {
  if (lang === 'en') {
    // Passer en anglais
    document.querySelector('#slogan').textContent = translations.en.slogan;
    
    // Menu burger mobile
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    if (mobileMenuItems.length > 0) {
      const mobileMenu = translations.en.mobileMenu;
      mobileMenuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === 'index.html') {
          item.childNodes[2].textContent = mobileMenu.home;
        } else if (href === 'infos.html') {
          item.childNodes[2].textContent = mobileMenu.infos;
        } else if (href.includes('offers-section') || href.includes('offre')) {
          item.childNodes[2].textContent = mobileMenu.offers;
        } else if (href === 'contact.html') {
          item.childNodes[2].textContent = mobileMenu.contact;
        } else if (href === 'faq.html') {
          item.childNodes[2].textContent = mobileMenu.faq;
        }
      });
    }

    // Page d'accueil
    const mainTitle = document.querySelector('#main-title');
    if (mainTitle) {
      mainTitle.innerHTML = translations.en.title;
      document.querySelector('#main-desc').innerHTML = translations.en.desc;
      document.querySelector('#main-btn').textContent = translations.en.btn;
      document.querySelector('#main-note').textContent = translations.en.note;
      
      const offersTitle = document.querySelector('.offers-title');
      if (offersTitle) {
        offersTitle.textContent = translations.en.offersTitle;
      }
      
      // Traduction des cartes d'offres
      const offerCards = document.querySelectorAll('.premium-offer-card');
      const offers = translations.en.offers;
      
      if (offerCards.length >= 3) {
        // Carte Découverte (première)
        offerCards[0].querySelector('.offer-title').textContent = offers.discovery.title;
        const discoveryFeatures = offerCards[0].querySelectorAll('.offer-features li');
        discoveryFeatures.forEach((li, i) => {
          if (offers.discovery.features[i]) li.textContent = offers.discovery.features[i];
        });
        offerCards[0].querySelector('.premium-offer-btn').textContent = offers.discovery.btn;
        
        // Carte Équilibre (deuxième)
        offerCards[1].querySelector('.offer-title').textContent = offers.balance.title;
        const balanceFeatures = offerCards[1].querySelectorAll('.offer-features li');
        balanceFeatures.forEach((li, i) => {
          if (offers.balance.features[i]) li.textContent = offers.balance.features[i];
        });
        offerCards[1].querySelector('.premium-offer-btn').textContent = offers.balance.btn;
        
        // Carte Passion (troisième)
        offerCards[2].querySelector('.offer-title').textContent = offers.passion.title;
        const passionFeatures = offerCards[2].querySelectorAll('.offer-features li');
        passionFeatures.forEach((li, i) => {
          if (offers.passion.features[i]) li.textContent = offers.passion.features[i];
        });
        offerCards[2].querySelector('.premium-offer-btn').textContent = offers.passion.btn;
      }
    }
    
  } else {
    // Retour au français (contenu HTML par défaut)
    lang = 'fr'; // S'assurer que lang vaut 'fr' pour les fonctions
    document.querySelector('#slogan').textContent = "Votre divertissement, sans limites.";
    
    // Menu burger français
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    if (mobileMenuItems.length > 0) {
      mobileMenuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === 'index.html') {
          item.childNodes[2].textContent = "Accueil";
        } else if (href === 'infos.html') {
          item.childNodes[2].textContent = "Informations";
        } else if (href.includes('offers-section') || href.includes('offre')) {
          item.childNodes[2].textContent = "Nos Offres";
        } else if (href === 'contact.html') {
          item.childNodes[2].textContent = "Contact";
        } else if (href === 'faq.html') {
          item.childNodes[2].textContent = "FAQ";
        }
      });
    }

    // Page d'accueil français
    const mainTitle = document.querySelector('#main-title');
    if (mainTitle) {
      mainTitle.innerHTML = "Transformez votre façon de regarder la télévision";
      document.querySelector('#main-desc').innerHTML = "Découvrez pourquoi <strong>50 000+ familles</strong> ont choisi notre solution de divertissement premium. Films, séries, sport en direct - tout ce que vous aimez, accessible instantanément en qualité 4K.";
      document.querySelector('#main-btn').textContent = "Découvrir nos formules";
      document.querySelector('#main-note').textContent = "Essai sans engagement - Satisfaction garantie ou remboursé.";
      
      const offersTitle = document.querySelector('.offers-title');
      if (offersTitle) {
        offersTitle.textContent = "Quelle formule correspond à vos besoins ?";
      }
      
      // Restaurer les cartes d'offres en français
      const offerCards = document.querySelectorAll('.premium-offer-card');
      
      if (offerCards.length >= 3) {
        // Carte Découverte (première)
        offerCards[0].querySelector('.offer-title').textContent = "Découverte";
        const discoveryFeatures = offerCards[0].querySelectorAll('.offer-features li');
        const frenchDiscoveryFeatures = [
          "Idéal pour tester notre service",
          "Accès complet sans engagement", 
          "Qualité HD garantie"
        ];
        discoveryFeatures.forEach((li, i) => {
          if (frenchDiscoveryFeatures[i]) li.textContent = frenchDiscoveryFeatures[i];
        });
        offerCards[0].querySelector('.premium-offer-btn').textContent = "Commencer l'essai";
        
        // Carte Équilibre (deuxième)
        offerCards[1].querySelector('.offer-title').textContent = "Équilibre";
        const balanceFeatures = offerCards[1].querySelectorAll('.offer-features li');
        const frenchBalanceFeatures = [
          "Le choix malin - 25% d'économies",
          "Qualité 4K sur tous vos appareils",
          "Notre formule la plus demandée"
        ];
        balanceFeatures.forEach((li, i) => {
          if (frenchBalanceFeatures[i]) li.textContent = frenchBalanceFeatures[i];
        });
        offerCards[1].querySelector('.premium-offer-btn').textContent = "Choisir cette formule";
        
        // Carte Passion (troisième)
        offerCards[2].querySelector('.offer-title').textContent = "Passion";
        const passionFeatures = offerCards[2].querySelectorAll('.offer-features li');
        const frenchPassionFeatures = [
          "Pour les vrais passionnés",
          "Qualité 4K HDR exceptionnelle",
          "Maximum d'économies sur l'année"
        ];
        passionFeatures.forEach((li, i) => {
          if (frenchPassionFeatures[i]) li.textContent = frenchPassionFeatures[i];
        });
        offerCards[2].querySelector('.premium-offer-btn').textContent = "Profiter des économies";
      }
    }
  }

  // Traduction du footer
  updateFooter(lang);

  // Gestion des autres pages (contact, infos, etc.)
  updateContactPage(lang);
  updateInfosPage(lang);
  updateOfferPage(lang);
  updateFaqPage(lang);
  updatePrivacyPage(lang);
  updateTermsPage(lang);
}

// Fonction pour traduire le footer
function updateFooter(lang) {
  if (lang === 'en') {
    // Traduction en anglais
    const footer = translations.en.footer;
    
    // Tagline
    const tagline = document.querySelector('#footer-tagline');
    if (tagline) tagline.textContent = footer.tagline;
    
    // Titres des sections
    const servicesTitle = document.querySelector('#footer-services-title');
    if (servicesTitle) servicesTitle.textContent = footer.services.title;
    
    const supportTitle = document.querySelector('#footer-support-title');
    if (supportTitle) supportTitle.textContent = footer.support.title;
    
    const legalTitle = document.querySelector('#footer-legal-title');
    if (legalTitle) legalTitle.textContent = footer.legal.title;
    
    // Liens Services
    const linkDiscovery = document.querySelector('#footer-link-discovery');
    if (linkDiscovery) linkDiscovery.textContent = footer.services.discovery;
    
    const linkBalance = document.querySelector('#footer-link-balance');
    if (linkBalance) linkBalance.textContent = footer.services.balance;
    
    const linkPassion = document.querySelector('#footer-link-passion');
    if (linkPassion) linkPassion.textContent = footer.services.passion;
    
    const linkInfo = document.querySelector('#footer-link-info');
    if (linkInfo) linkInfo.textContent = footer.services.info;
    
    // Liens Support
    const linkContact = document.querySelector('#footer-link-contact');
    if (linkContact) linkContact.textContent = footer.support.contact;
    
    const linkFaq = document.querySelector('#footer-link-faq');
    if (linkFaq) linkFaq.textContent = footer.support.faq;
    
    const linkHelp = document.querySelector('#footer-link-help');
    if (linkHelp) linkHelp.textContent = footer.support.help;
    
    const linkTech = document.querySelector('#footer-link-tech');
    if (linkTech) linkTech.textContent = footer.support.tech;
    
    // Liens Légal
    const linkPrivacy = document.querySelector('#footer-link-privacy');
    if (linkPrivacy) linkPrivacy.textContent = footer.legal.privacy;
    
    const linkTerms = document.querySelector('#footer-link-terms');
    if (linkTerms) linkTerms.textContent = footer.legal.terms;
    
    const linkCookies = document.querySelector('#footer-link-cookies');
    if (linkCookies) linkCookies.textContent = footer.legal.cookies;
    
    const linkMentions = document.querySelector('#footer-link-mentions');
    if (linkMentions) linkMentions.textContent = footer.legal.mentions;
    
    // Copyright
    const copyright = document.querySelector('#footer-copyright');
    if (copyright) copyright.textContent = footer.copyright;
    
    // Liens légaux du bas
    const legalPrivacy = document.querySelector('#footer-legal-privacy');
    if (legalPrivacy) legalPrivacy.textContent = footer.legalLinks.privacy;
    
    const legalTerms = document.querySelector('#footer-legal-terms');
    if (legalTerms) legalTerms.textContent = footer.legalLinks.terms;
    
    const legalCookiesBottom = document.querySelector('#footer-legal-cookies');
    if (legalCookiesBottom) legalCookiesBottom.textContent = footer.legalLinks.cookies;
    
  } else {
    // Retour au français
    const tagline = document.querySelector('#footer-tagline');
    if (tagline) tagline.textContent = "L'excellence du divertissement à domicile. Plus de 50 000 familles nous font confiance pour transformer leur expérience TV quotidienne.";
    
    // Titres des sections
    const servicesTitle = document.querySelector('#footer-services-title');
    if (servicesTitle) servicesTitle.textContent = "Services";
    
    const supportTitle = document.querySelector('#footer-support-title');
    if (supportTitle) supportTitle.textContent = "Support";
    
    const legalTitle = document.querySelector('#footer-legal-title');
    if (legalTitle) legalTitle.textContent = "Légal";
    
    // Liens Services
    const linkDiscovery = document.querySelector('#footer-link-discovery');
    if (linkDiscovery) linkDiscovery.textContent = "Formule Découverte";
    
    const linkBalance = document.querySelector('#footer-link-balance');
    if (linkBalance) linkBalance.textContent = "Formule Équilibre";
    
    const linkPassion = document.querySelector('#footer-link-passion');
    if (linkPassion) linkPassion.textContent = "Formule Passion";
    
    const linkInfo = document.querySelector('#footer-link-info');
    if (linkInfo) linkInfo.textContent = "Informations";
    
    // Liens Support
    const linkContact = document.querySelector('#footer-link-contact');
    if (linkContact) linkContact.textContent = "Contact";
    
    const linkFaq = document.querySelector('#footer-link-faq');
    if (linkFaq) linkFaq.textContent = "FAQ";
    
    const linkHelp = document.querySelector('#footer-link-help');
    if (linkHelp) linkHelp.textContent = "Centre d'aide";
    
    const linkTech = document.querySelector('#footer-link-tech');
    if (linkTech) linkTech.textContent = "Support technique";
    
    // Liens Légal
    const linkPrivacy = document.querySelector('#footer-link-privacy');
    if (linkPrivacy) linkPrivacy.textContent = "Politique de confidentialité";
    
    const linkTerms = document.querySelector('#footer-link-terms');
    if (linkTerms) linkTerms.textContent = "Conditions d'utilisation";
    
    const linkCookies = document.querySelector('#footer-link-cookies');
    if (linkCookies) linkCookies.textContent = "Gestion des cookies";
    
    const linkMentions = document.querySelector('#footer-link-mentions');
    if (linkMentions) linkMentions.textContent = "Mentions légales";
    
    // Copyright
    const copyright = document.querySelector('#footer-copyright');
    if (copyright) copyright.textContent = "© 2024 VisionZone. Tous droits réservés.";
    
    // Liens légaux du bas
    const legalPrivacy = document.querySelector('#footer-legal-privacy');
    if (legalPrivacy) legalPrivacy.textContent = "Confidentialité";
    
    const legalTerms = document.querySelector('#footer-legal-terms');
    if (legalTerms) legalTerms.textContent = "Conditions";
    
    const legalCookiesBottom = document.querySelector('#footer-legal-cookies');
    if (legalCookiesBottom) legalCookiesBottom.textContent = "Cookies";
  }
}

// Fonctions pour les autres pages
function updateContactPage(lang) {
  const contactTitle = document.querySelector('.contact-info h1');
  if (contactTitle && lang === 'en') {
    const contact = translations.en.contact;
    contactTitle.textContent = contact.title;
    document.querySelector('.contact-info p').textContent = contact.subtitle;

    // Méthodes de contact
    const methods = contact.methods;
    document.querySelector('.contact-method:nth-child(1) h3').textContent = methods.email.title;
    document.querySelector('.contact-method:nth-child(1) p').textContent = methods.email.value;
    document.querySelector('.contact-method:nth-child(2) h3').textContent = methods.chat.title;
    document.querySelector('.contact-method:nth-child(2) p').textContent = methods.chat.value;
    document.querySelector('.contact-method:nth-child(3) h3').textContent = methods.phone.title;
    document.querySelector('.contact-method:nth-child(3) p').textContent = methods.phone.value;

    // Formulaire
    const form = contact.form;
    document.querySelector('label[for="name"]').textContent = form.name;
    document.querySelector('label[for="email"]').textContent = form.email;
    document.querySelector('label[for="subject"]').textContent = form.subject;
    document.querySelector('#subject option:first-child').textContent = form.subjectPlaceholder;
    document.querySelector('#subject option[value="support"]').textContent = form.subjects.support;
    document.querySelector('#subject option[value="billing"]').textContent = form.subjects.billing;
    document.querySelector('#subject option[value="partnership"]').textContent = form.subjects.partnership;
    document.querySelector('#subject option[value="other"]').textContent = form.subjects.other;
    document.querySelector('label[for="message"]').textContent = form.message;
    document.querySelector('.submit-btn').textContent = form.submit;
  }
}

function updateInfosPage(lang) {
  const devTitle = document.querySelector('.dev-bio-content h2');
  if (devTitle && lang === 'en') {
    const infos = translations.en.infos;
    devTitle.textContent = infos.devTitle;
    document.querySelector('.dev-bio-content p').textContent = infos.devDesc;
    
    // Cartes
    const cards = document.querySelectorAll('.infos-link-card');
    cards.forEach((card, i) => {
      card.querySelector('.infos-link-title').textContent = infos.cards[i].title;
      card.querySelector('.infos-link-desc').textContent = infos.cards[i].desc;
      card.querySelector('.infos-link-btn').textContent = infos.cards[i].btn;
    });
    
    // Section installation
    document.querySelector('.install-section h3').textContent = infos.installTitle;
    document.querySelector('.install-section p').textContent = infos.installDesc;
    document.querySelector('.install-link-btn').textContent = infos.installBtn;
  }
}

function updateFaqPage(lang) {
  const faqTitle = document.querySelector('.faq-title');
  if (faqTitle) {
    if (lang === 'en') {
      const faq = translations.en.faq;
      
      // Titre principal
      faqTitle.textContent = faq.title;
      
      // Sous-titre
      const faqSubtitle = document.querySelector('.faq-subtitle');
      if (faqSubtitle) faqSubtitle.textContent = faq.subtitle;
      
      // Sections FAQ
      const faqSections = document.querySelectorAll('.faq-section');
      faqSections.forEach((section, sectionIndex) => {
        if (faq.sections[sectionIndex]) {
          const sectionTitle = section.querySelector('.faq-section-title');
          if (sectionTitle) {
            sectionTitle.textContent = faq.sections[sectionIndex].title;
          }
          
          const questions = section.querySelectorAll('.faq-item');
          questions.forEach((questionEl, questionIndex) => {
            const questionData = faq.sections[sectionIndex].questions[questionIndex];
            if (questionData) {
              const questionText = questionEl.querySelector('.faq-question');
              const answerText = questionEl.querySelector('.faq-answer');
              
              if (questionText) {
                // Garder le ::after pour le + ou -
                questionText.childNodes[0].textContent = questionData.q;
              }
              if (answerText) {
                answerText.innerHTML = questionData.a;
              }
            }
          });
        }
      });
    } else {
      // Retour au français - recharger la page pour remettre le contenu original
      window.location.reload();
    }
  }
}

function updatePrivacyPage(lang) {
  if (lang === 'en') {
    const privacy = translations.en.privacy;
    
    // Titre principal
    const privacyTitle = document.querySelector('#privacy-title');
    if (privacyTitle) privacyTitle.textContent = privacy.title;
    
    // Sous-titre
    const privacySubtitle = document.querySelector('#privacy-subtitle');
    if (privacySubtitle) privacySubtitle.textContent = privacy.subtitle;
    
    // Date
    const privacyDate = document.querySelector('#privacy-date');
    if (privacyDate) privacyDate.textContent = privacy.date;
    
    // Sections avec nouvelle structure accordéon
    const sections = privacy.sections;
    Object.keys(sections).forEach((sectionKey, index) => {
      const section = sections[sectionKey];
      const sectionNumber = index + 1;
      
      // Titre de section (nouvelle structure)
      const titleElement = document.querySelector(`#${sectionKey}-title`);
      if (titleElement) {
        titleElement.innerHTML = `<span style="background: #e50914; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: bold;">${sectionNumber}</span>
          ${section.title}`;
      }
      
      // Contenu de section (nouvelle structure avec privacy prefix)
      const contentElement = document.querySelector(`#privacy${sectionNumber}-content`);
      if (contentElement) {
        contentElement.innerHTML = section.content;
      }
    });
    
    // Section contact
    const contactTitle = document.querySelector('#contact-title');
    if (contactTitle) contactTitle.textContent = privacy.contact.title;
    
    const contactContent = document.querySelector('#contact-content');
    if (contactContent) {
      contactContent.innerHTML = `<p style="margin-bottom: 15px;">${privacy.contact.content}</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
          <div>
            <strong style="color: #e50914;">Email:</strong><br>
            <a href="mailto:privacy@visionzone.fr" style="color: #ccc; text-decoration: none;">privacy@visionzone.fr</a>
          </div>
          <div>
            <strong style="color: #e50914;">Téléphone:</strong><br>
            <span style="color: #ccc;">+33 1 23 45 67 89</span>
          </div>
          <div>
            <strong style="color: #e50914;">Contact:</strong><br>
            <a href="contact.html" style="color: #ccc; text-decoration: none;">Contact form</a>
          </div>
        </div>`;
    }
  }
}

function updateTermsPage(lang) {
  const termsTitle = document.querySelector('#terms-title');
  if (!termsTitle) return; // Pas sur la page conditions
  
  if (lang === 'en') {
    // Traduction en anglais
    termsTitle.textContent = "Terms and Conditions of Use";
    
    const termsSubtitle = document.querySelector('#terms-subtitle');
    if (termsSubtitle) {
      termsSubtitle.textContent = "These terms and conditions govern the use of the VisionZone service. They define the rights and obligations of each party in a clear and transparent manner.";
    }
    
    const termsDate = document.querySelector('#terms-date');
    if (termsDate) termsDate.textContent = "December 15, 2024";
    
    // Section 1
    const section1Title = document.querySelector('#section1-title');
    if (section1Title) {
      section1Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">1</span> Service Purpose';
    }
    
    const section1Content = document.querySelector('#section1-content');
    if (section1Content) {
      section1Content.innerHTML = `
        <p style="margin-bottom: 20px;">VisionZone offers a premium entertainment service providing access to a multimedia content streaming platform.</p>
        
        <div style="background: rgba(255,255,255,0.04); padding: 25px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 20px;">
          <h4 style="color: #e50914; margin: 0 0 15px 0; font-size: 1.1rem; font-weight: 600;">The service includes:</h4>
          <ul style="margin: 0; padding-left: 20px; color: #ddd;">
            <li style="margin-bottom: 8px;">Access to the VisionZone streaming platform</li>
            <li style="margin-bottom: 8px;">Broadcast quality up to 4K Ultra HD</li>
            <li style="margin-bottom: 8px;">Simultaneous use on multiple devices</li>
            <li style="margin-bottom: 8px;">French technical support</li>
          </ul>
        </div>
        
        <p style="margin: 0; font-size: 0.95rem; color: #aaa; font-style: italic;">The service is provided as part of a fixed-term subscription without automatic renewal.</p>
      `;
    }
    
    // Section 2
    const section2Title = document.querySelector('#section2-title');
    if (section2Title) {
      section2Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">2</span> Access Conditions';
    }
    
    const section2Content = document.querySelector('#section2-content');
    if (section2Content) {
      section2Content.innerHTML = `
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Registration</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">Access to the service requires registration with a valid email address. No other personal information is required.</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Minimum age</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">The service is accessible to adults or minors with parental authorization.</p>
        </div>
        
                 <div style="margin-bottom: 20px;">
           <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Technical requirements</h5>
           <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">Stable internet connection recommended: 25 Mbps for 4K quality, 10 Mbps for Full HD.</p>
           <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">Installation of an application compatible with MegaOTT.net codes:</p>
           <ul style="margin: 0 0 15px 40px; padding-left: 20px; color: #ddd; font-size: 0.95rem;">
             <li style="margin-bottom: 6px;"><strong>Smart TV:</strong> Smart IPTV, IPTV Smarters Pro, TiviMate</li>
             <li style="margin-bottom: 6px;"><strong>Android/iOS:</strong> IPTV Smarters Pro, GSE Smart IPTV, Perfect Player</li>
             <li style="margin-bottom: 6px;"><strong>PC/Mac:</strong> VLC Media Player, IPTV Smarters Pro, Kodi</li>
             <li style="margin-bottom: 6px;"><strong>TV Box:</strong> IPTV Smarters Pro, TiviMate, Perfect Player</li>
           </ul>
         </div>
      `;
    }
    
    // Section 3
    const section3Title = document.querySelector('#section3-title');
    if (section3Title) {
      section3Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">3</span> Pricing and Payment';
    }
    
    const section3Content = document.querySelector('#section3-content');
    if (section3Content) {
      section3Content.innerHTML = `
        <div style="background: rgba(255,255,255,0.04); padding: 25px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 20px;">
          <h4 style="color: #e50914; margin: 0 0 15px 0; font-size: 1.1rem; font-weight: 600;">Our plans:</h4>
          <ul style="margin: 0; padding-left: 20px; color: #ddd;">
            <li style="margin-bottom: 8px;"><strong>Discovery (3 months):</strong> €9.99 - Ideal for testing the service</li>
            <li style="margin-bottom: 8px;"><strong>Balance (6 months):</strong> €19.99 - The best value for money</li>
            <li style="margin-bottom: 8px;"><strong>Passion (12 months):</strong> €29.99 - Maximum savings</li>
          </ul>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Payment terms</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">Payment is made in one go when subscribing. No automatic renewal.</p>
        </div>
        
        <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <h5 style="color: #e50914; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Total transparency</h5>
          <p style="margin: 0; color: #ddd; font-size: 0.95rem;">No hidden fees, no surprises. The displayed price is the final price, support and updates included.</p>
        </div>
      `;
    }
    
    // Section 4
    const section4Title = document.querySelector('#section4-title');
    if (section4Title) {
      section4Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">4</span> Duration and Termination';
    }
    
    const section4Content = document.querySelector('#section4-content');
    if (section4Content) {
      section4Content.innerHTML = `
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Contract duration</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">The subscription is valid for the chosen duration (3, 6 or 12 months) from service activation.</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">End of subscription</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">At the expiration of the subscribed period, access to the service automatically ceases. No automatic renewal.</p>
        </div>
        
        <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <h5 style="color: #e50914; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Satisfaction guarantee</h5>
          <p style="margin: 0; color: #ddd; font-size: 0.95rem;">Full refund possible within 7 days of subscription if you are not satisfied with the service.</p>
        </div>
      `;
    }
    
    // Section 5
    const section5Title = document.querySelector('#section5-title');
    if (section5Title) {
      section5Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">5</span> User Obligations';
    }
    
    const section5Content = document.querySelector('#section5-content');
    if (section5Content) {
      section5Content.innerHTML = `
        <p style="margin-bottom: 20px;">The user undertakes to use the service in compliance with these conditions and applicable legislation.</p>
        
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Personal use</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">The service is intended for personal and family use. Any commercial use is prohibited.</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Access confidentiality</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">The user is responsible for the confidentiality of their credentials and their use.</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Rights respect</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">Prohibition to reproduce, distribute or commercially exploit content accessible via the service.</p>
        </div>
      `;
    }
    
    // Section 6
    const section6Title = document.querySelector('#section6-title');
    if (section6Title) {
      section6Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">6</span> Liability and Warranties';
    }
    
    const section6Content = document.querySelector('#section6-content');
    if (section6Content) {
      section6Content.innerHTML = `
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Service commitment</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">VisionZone commits to providing a quality service with optimal availability. Technical support available 7/7.</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Limitations</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">VisionZone's liability cannot be engaged in case of interruption due to external factors (internet outage, force majeure).</p>
        </div>
        
        <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <h5 style="color: #e50914; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Quality guarantee</h5>
          <p style="margin: 0; color: #ddd; font-size: 0.95rem;">We guarantee the quality of the service provided. In case of persistent problem, a pro rata refund may be granted.</p>
        </div>
      `;
    }
    
    // Section 7
    const section7Title = document.querySelector('#section7-title');
    if (section7Title) {
      section7Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">7</span> Support and Contact';
    }
    
    const section7Content = document.querySelector('#section7-content');
    if (section7Content) {
      section7Content.innerHTML = `
        <p style="margin-bottom: 20px;">Our French team is at your disposal for any question or technical assistance.</p>
        
        <div style="background: rgba(255,255,255,0.04); padding: 25px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <h4 style="color: #e50914; margin: 0 0 15px 0; font-size: 1.1rem; font-weight: 600;">Contact methods:</h4>
          <ul style="margin: 0; padding-left: 20px; color: #ddd;">
            <li style="margin-bottom: 8px;"><strong>Email:</strong> support@visionzone.tv (response within 2h)</li>
            <li style="margin-bottom: 8px;"><strong>Chat:</strong> Available on our website</li>
            <li style="margin-bottom: 8px;"><strong>Hours:</strong> 7/7 - Emergency technical support 24/24</li>
          </ul>
        </div>
      `;
    }
    
    // Section 8
    const section8Title = document.querySelector('#section8-title');
    if (section8Title) {
      section8Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">8</span> Terms Modification';
    }
    
    const section8Content = document.querySelector('#section8-content');
    if (section8Content) {
      section8Content.innerHTML = `
        <p style="margin-bottom: 20px;">VisionZone reserves the right to modify these terms and conditions.</p>
        
        <div style="margin-bottom: 20px;">
          <h5 style="color: #ccc; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Notification</h5>
          <p style="margin: 0 0 15px 20px; color: #ddd; font-size: 0.95rem;">Any modification will be notified by email with a minimum 30-day notice.</p>
        </div>
        
        <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <h5 style="color: #e50914; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Right to terminate</h5>
          <p style="margin: 0; color: #ddd; font-size: 0.95rem;">In case of substantial modification, the user can terminate their subscription with pro rata refund.</p>
        </div>
      `;
    }
    
    // Section 9
    const section9Title = document.querySelector('#section9-title');
    if (section9Title) {
      section9Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">9</span> Applicable Law';
    }
    
    const section9Content = document.querySelector('#section9-content');
    if (section9Content) {
      section9Content.innerHTML = `
        <p style="margin-bottom: 20px;">These terms and conditions are governed by French law.</p>
        
        <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <h5 style="color: #e50914; margin: 0 0 10px 0; font-size: 1rem; font-weight: 500;">Dispute resolution</h5>
          <p style="margin: 0; color: #ddd; font-size: 0.95rem;">In case of dispute, an amicable solution will be sought as a priority. Otherwise, French courts will have jurisdiction.</p>
        </div>
      `;
    }
    
  } else {
    // Retour au français (contenu par défaut)
    termsTitle.textContent = "Conditions Générales d'Utilisation";
    
    const termsSubtitle = document.querySelector('#terms-subtitle');
    if (termsSubtitle) {
      termsSubtitle.textContent = "Les présentes conditions générales régissent l'utilisation du service VisionZone. Elles définissent les droits et obligations de chaque partie de manière claire et transparente.";
    }
    
    const termsDate = document.querySelector('#terms-date');
    if (termsDate) termsDate.textContent = "15 décembre 2024";
    
    // Restaurer les titres français
    const section1Title = document.querySelector('#section1-title');
    if (section1Title) {
      section1Title.innerHTML = '<span style="background: #e50914; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">1</span> Objet du service';
    }
    
    // Les autres sections sont déjà en français dans le HTML
  }
}

function updateOfferPage(lang) {
  const currentPage = window.location.pathname;
  
  // Page 3 mois
  if (currentPage.includes('offre-3mois')) {
    const offerTitle = document.querySelector('.offer-title');
    const offerSubtitle = document.querySelector('.offer-subtitle');
    const offerDesc = document.querySelector('.offer-desc');
    
    if (lang === 'en') {
      // Traduction en anglais
      const offreData = translations.en.offre3mois;
      
      // Titre (géré par updateOfferTitle si elle existe), sous-titre, description
      if (typeof updateOfferTitle !== 'function' && offerTitle) {
        offerTitle.textContent = offreData.title;
      }
      if (offerSubtitle) offerSubtitle.textContent = offreData.subtitle;
      if (offerDesc) offerDesc.textContent = offreData.desc;
      
      // Accès premium
      const offerAccess = document.querySelector('.offer-access-premium');
      if (offerAccess) offerAccess.textContent = offreData.access;
      
      // Label écrans
      const screenLabel = document.querySelector('.screen-label');
      if (screenLabel) screenLabel.textContent = offreData.screenLabel;
      
      // Options du sélecteur d'écrans
      const screenOptions = document.querySelectorAll('#screen-count option');
      if (screenOptions.length > 0 && offreData.screenOptions) {
        screenOptions.forEach((option, i) => {
          if (offreData.screenOptions[i]) option.textContent = offreData.screenOptions[i];
        });
      }
      
      // Avantages
      const benefits = document.querySelectorAll('.offer-benefits li');
      if (benefits.length > 0 && offreData.benefits) {
        benefits.forEach((li, i) => {
          if (offreData.benefits[i]) li.textContent = offreData.benefits[i];
        });
      }
      
      // Section "Pourquoi choisir"
      const whyTitle = document.querySelector('.why-title');
      if (whyTitle) whyTitle.textContent = offreData.whyTitle;
      
      const whyList = document.querySelectorAll('.why-list li');
      if (whyList.length > 0 && offreData.whyList) {
        whyList.forEach((li, i) => {
          if (offreData.whyList[i]) li.textContent = offreData.whyList[i];
        });
      }
      
      // FAQ
      const faqTitle = document.querySelector('.faq-title');
      if (faqTitle) faqTitle.textContent = offreData.faqTitle;
      
      const faqItems = document.querySelectorAll('.faq-item');
      if (faqItems.length > 0 && offreData.faq) {
        faqItems.forEach((item, i) => {
          if (offreData.faq[i]) {
            item.innerHTML = `<strong>${offreData.faq[i].q}</strong><br>${offreData.faq[i].a}`;
          }
        });
      }
      
      // Bouton final
      const ctaFinal = document.querySelector('.cta-final-btn');
      if (ctaFinal) ctaFinal.textContent = offreData.ctaFinal;
      
      // Mettre à jour la durée et le titre dynamiques si elles existent (page 3 mois)
      if (typeof updateOfferDuration === 'function') {
        updateOfferDuration('en');
      }
      if (typeof updateOfferTitle === 'function') {
        updateOfferTitle('en');
      } else if (typeof updateOfferPrice === 'function') {
        updateOfferPrice('en');
      }
      
    } else {
      // Retour au français (titre géré par updateOfferTitle si elle existe)
      if (typeof updateOfferTitle !== 'function' && offerTitle) {
        offerTitle.textContent = "Offre Découverte 3 Mois à 9,99 €";
      }
      if (offerSubtitle) offerSubtitle.textContent = "L'offre imbattable !";
      if (offerDesc) offerDesc.textContent = "Profitez de 3 mois de streaming illimité avec une qualité irréprochable, sur tous vos appareils. Sans engagement, sans surprise.";
      
      const offerAccess = document.querySelector('.offer-access-premium');
      if (offerAccess) offerAccess.textContent = "Accès premium à toutes les chaînes live : Bein Sport, DAZN, Canal+, OCS, Champions League...";
      
      const screenLabel = document.querySelector('.screen-label');
      if (screenLabel) screenLabel.textContent = "Écrans simultanés :";
      
      // Remettre les options d'écrans en français
      const screenOptions = document.querySelectorAll('#screen-count option');
      const frenchScreenOptions = ["1 écran", "2 écrans", "3 écrans", "4 écrans"];
      screenOptions.forEach((option, i) => {
        if (frenchScreenOptions[i]) option.textContent = frenchScreenOptions[i];
      });
      
      const benefits = document.querySelectorAll('.offer-benefits li');
      const frenchBenefits = [
        "Qualité HD/4K sur tous vos écrans",
        "Accès aux derniers films & séries",
        "Adult Live +18",
        "Support client réactif 7j/7",
        "Sans engagement, sans frais cachés"
      ];
      benefits.forEach((li, i) => {
        if (frenchBenefits[i]) li.textContent = frenchBenefits[i];
      });
      
      // Section "Pourquoi choisir" français
      const whyTitle = document.querySelector('.why-title');
      if (whyTitle) whyTitle.textContent = "Pourquoi choisir cette offre ?";
      
      const whyList = document.querySelectorAll('.why-list li');
      const frenchWhyList = [
        "Le meilleur rapport qualité/prix du marché",
        "Streaming fluide, sans coupures, même aux heures de pointe",
        "Compatible TV, smartphone, tablette, ordinateur",
        "Activation immédiate après paiement"
      ];
      whyList.forEach((li, i) => {
        if (frenchWhyList[i]) li.textContent = frenchWhyList[i];
      });
      
      // FAQ français
      const faqTitle = document.querySelector('.faq-title');
      if (faqTitle) faqTitle.textContent = "Questions fréquemment posées";
      
      const faqItems = document.querySelectorAll('.faq-item');
      const frenchFaqItems = [
        {
          q: "Comment activer mon offre ?",
          a: "Après paiement, vous recevrez un email avec toutes les instructions pour profiter immédiatement de votre abonnement."
        },
        {
          q: "Puis-je résilier à tout moment ?",
          a: "Oui, l'offre est sans engagement. Vous pouvez arrêter quand vous voulez, sans frais."
        },
        {
          q: "Quels appareils sont compatibles ?",
          a: "Tous : Smart TV, Android, iOS, PC, Mac, box TV..."
        }
      ];
      faqItems.forEach((item, i) => {
        if (frenchFaqItems[i]) {
          item.innerHTML = `<strong>${frenchFaqItems[i].q}</strong><br>${frenchFaqItems[i].a}`;
        }
      });
      
      // Bouton final français
      const ctaFinal = document.querySelector('.cta-final-btn');
      if (ctaFinal) ctaFinal.textContent = "Profiter de l'offre 3 mois maintenant";
      
      // Mettre à jour la durée et le titre dynamiques si elles existent (page 3 mois)
      if (typeof updateOfferDuration === 'function') {
        updateOfferDuration('fr');
      }
      if (typeof updateOfferTitle === 'function') {
        updateOfferTitle('fr');
      } else if (typeof updateOfferPrice === 'function') {
        updateOfferPrice('fr');
      }
    }
    return;
  }
  
  // Page 6 mois
  if (currentPage.includes('offre-6mois')) {
    const offerTitle = document.querySelector('.offer-title');
    const offerSubtitle = document.querySelector('.offer-subtitle');
    const offerDesc = document.querySelector('.offer-desc');
    
    if (lang === 'en') {
      // Traduction en anglais
      const offreData = translations.en.offre6mois;
      
      // Titre (géré par updateOfferTitle si elle existe), sous-titre, description
      if (typeof updateOfferTitle !== 'function' && offerTitle) {
        offerTitle.textContent = offreData.title;
      }
      if (offerSubtitle) offerSubtitle.textContent = offreData.subtitle;
      if (offerDesc) offerDesc.textContent = offreData.desc;
      
      // Accès premium
      const offerAccess = document.querySelector('.offer-access-premium');
      if (offerAccess) offerAccess.textContent = offreData.access;
      
      // Label écrans
      const screenLabel = document.querySelector('.screen-label');
      if (screenLabel) screenLabel.textContent = offreData.screenLabel;
      
      // Durée
      const offerDuration = document.querySelector('.offer-duration');
      if (offerDuration) offerDuration.textContent = offreData.duration;
      
      // Options du sélecteur d'écrans
      const screenOptions = document.querySelectorAll('#screen-count option');
      if (screenOptions.length > 0 && offreData.screenOptions) {
        screenOptions.forEach((option, i) => {
          if (offreData.screenOptions[i]) option.textContent = offreData.screenOptions[i];
        });
      }
      
      // Avantages
      const benefits = document.querySelectorAll('.offer-benefits li');
      if (benefits.length > 0 && offreData.benefits) {
        benefits.forEach((li, i) => {
          if (offreData.benefits[i]) li.textContent = offreData.benefits[i];
        });
      }
      
      // Info paiement
      const paymentInfo = document.querySelector('.payment-info');
      if (paymentInfo) paymentInfo.innerHTML = offreData.paymentInfo;
      
      // Conditions paiement
      const paymentTerms = document.querySelector('.payment-terms');
      if (paymentTerms) {
        paymentTerms.innerHTML = offreData.paymentTerms
          .replace('Terms and Conditions', '<a href="contact.html">Terms and Conditions</a>')
          .replace('Privacy Policy', '<a href="contact.html">Privacy Policy</a>');
      }
      
      // Section "Pourquoi choisir"
      const whyTitle = document.querySelector('.why-title');
      if (whyTitle) whyTitle.textContent = offreData.whyTitle;
      
      const whyList = document.querySelectorAll('.why-list li');
      if (whyList.length > 0 && offreData.whyList) {
        whyList.forEach((li, i) => {
          if (offreData.whyList[i]) li.innerHTML = offreData.whyList[i];
        });
      }
      
      // FAQ
      const faqTitle = document.querySelector('.faq-title');
      if (faqTitle) faqTitle.textContent = offreData.faqTitle;
      
      const faqItems = document.querySelectorAll('.faq-section .faq-item');
      if (faqItems.length > 0 && offreData.faqItems) {
        faqItems.forEach((item, i) => {
          if (offreData.faqItems[i]) {
            item.innerHTML = `<strong>${offreData.faqItems[i].q}</strong><br>${offreData.faqItems[i].a}`;
          }
        });
      }
      
      // Bouton final
      const ctaFinal = document.querySelector('.cta-final-btn');
      if (ctaFinal) ctaFinal.textContent = offreData.ctaFinal;
      
      // Mettre à jour le prix dynamique si la fonction existe (page 6 mois)
      if (typeof updateOfferPrice === 'function') {
        updateOfferPrice('en');
      }
      
    } else {
      // Retour au français (titre géré par updateOfferTitle si elle existe)
      if (typeof updateOfferTitle !== 'function' && offerTitle) {
        offerTitle.textContent = "Offre Équilibre 6 Mois à 19,99 €";
      }
      if (offerSubtitle) offerSubtitle.textContent = "L'expérience longue durée parfaite";
      if (offerDesc) offerDesc.textContent = "Profitez de 6 mois complets d'accès premium à tout notre catalogue avec des économies substantielles. L'offre idéale pour une immersion totale dans l'univers VisionZone.";
      
      const offerAccess = document.querySelector('.offer-access-premium');
      if (offerAccess) offerAccess.textContent = "✨ Accès Premium Longue Durée Inclus";
      
      const screenLabel = document.querySelector('.screen-label');
      if (screenLabel) screenLabel.textContent = "Écrans simultanés :";
      
      const offerDuration = document.querySelector('.offer-duration');
      if (offerDuration) offerDuration.textContent = "6 mois complets";
      
      // Remettre les options d'écrans en français
      const screenOptions = document.querySelectorAll('#screen-count option');
      const frenchScreenOptions = ["1 écran", "2 écrans", "3 écrans", "4 écrans"];
      screenOptions.forEach((option, i) => {
        if (frenchScreenOptions[i]) option.textContent = frenchScreenOptions[i];
      });
      
      const benefits = document.querySelectorAll('.offer-benefits li');
      const frenchBenefits = [
        "6 mois d'accès complet sans interruption",
        "Économisez jusqu'à 25% par rapport aux offres courtes",
        "Catalogue premium complet et exclusif",
        "Streaming en Ultra HD 4K disponible",
        "Téléchargement hors ligne illimité",
        "Support prioritaire et assistance dédiée",
        "Mises à jour automatiques du contenu",
        "Aucun engagement au-delà de la période"
      ];
      benefits.forEach((li, i) => {
        if (frenchBenefits[i]) li.textContent = frenchBenefits[i];
      });
      
      const paymentInfo = document.querySelector('.payment-info');
      if (paymentInfo) paymentInfo.innerHTML = "🔒 Paiement 100% sécurisé via PayPal";
      
      const paymentTerms = document.querySelector('.payment-terms');
      if (paymentTerms) {
        paymentTerms.innerHTML = 'En effectuant ce paiement, vous acceptez nos <a href="contact.html">Conditions Générales</a> et notre <a href="contact.html">Politique de Confidentialité</a>.';
      }
      
      const whyTitle = document.querySelector('.why-title');
      if (whyTitle) whyTitle.textContent = "🎯 Pourquoi choisir l'offre 6 mois ?";
      
      const whyList = document.querySelectorAll('.why-list li');
      const frenchWhyList = [
        "<strong>Économies maximales :</strong> Jusqu'à 25% de réduction vs offres mensuelles",
        "<strong>Stabilité garantie :</strong> 6 mois sans interruption de service",
        "<strong>Contenu exclusif :</strong> Accès aux nouveautés en avant-première",
        "<strong>Flexibilité totale :</strong> Changement d'écrans possible à tout moment",
        "<strong>Support VIP :</strong> Assistance prioritaire 7j/7",
        "<strong>Mises à jour gratuites :</strong> Nouvelles fonctionnalités incluses",
        "<strong>Qualité premium :</strong> Streaming 4K Ultra HD sans limite",
        "<strong>Satisfaction garantie :</strong> Support technique dédié"
      ];
      whyList.forEach((li, i) => {
        if (frenchWhyList[i]) li.innerHTML = frenchWhyList[i];
      });
      
      const faqTitle = document.querySelector('.faq-title');
      if (faqTitle) faqTitle.textContent = "❓ Questions fréquentes - Offre 6 mois";
      
      const faqItems = document.querySelectorAll('.faq-section .faq-item');
      const frenchFaqItems = [
        {
          q: "Puis-je modifier le nombre d'écrans pendant ma période de 6 mois ?",
          a: "Oui, vous pouvez ajuster le nombre d'écrans à tout moment via votre espace client. La différence sera calculée au prorata."
        },
        {
          q: "Que se passe-t-il à la fin des 6 mois ?",
          a: "Votre accès expire automatiquement. Aucun renouvellement automatique. Vous pouvez souscrire une nouvelle offre si vous le souhaitez."
        },
        {
          q: "Y a-t-il vraiment une économie par rapport aux offres plus courtes ?",
          a: "Absolument ! L'offre 6 mois vous fait économiser jusqu'à 25% par rapport aux offres mensuelles, soit une économie significative sur la durée."
        },
        {
          q: "Le contenu est-il différent de l'offre 3 mois ?",
          a: "Non, vous avez accès au même catalogue premium complet. L'avantage est dans la durée et les économies réalisées."
        },
        {
          q: "Puis-je télécharger du contenu pour le regarder hors ligne ?",
          a: "Oui, le téléchargement hors ligne est inclus sans limitation avec votre offre 6 mois premium."
        }
      ];
      faqItems.forEach((item, i) => {
        if (frenchFaqItems[i]) {
          item.innerHTML = `<strong>${frenchFaqItems[i].q}</strong><br>${frenchFaqItems[i].a}`;
        }
      });
      
      const ctaFinal = document.querySelector('.cta-final-btn');
      if (ctaFinal) ctaFinal.textContent = "Profiter de l'offre 6 mois maintenant";
      
      // Mettre à jour le prix dynamique si la fonction existe (page 6 mois)
      if (typeof updateOfferPrice === 'function') {
        updateOfferPrice('fr');
      }
    }
    return;
  }
  
  // Page 12 mois
  if (currentPage.includes('offre-12mois')) {
    const offerTitle = document.querySelector('.offer-title');
    const offerSubtitle = document.querySelector('.offer-subtitle');
    const offerDesc = document.querySelector('.offer-desc');
    
    if (lang === 'en') {
      // Traduction en anglais
      const offreData = translations.en.offre12mois;
      
      // Titre (géré par updateOfferTitle si elle existe), sous-titre, description
      if (typeof updateOfferTitle !== 'function' && offerTitle) {
        offerTitle.textContent = offreData.title;
      }
      if (offerSubtitle) offerSubtitle.textContent = offreData.subtitle;
      if (offerDesc) offerDesc.textContent = offreData.desc;
      
      // Accès premium
      const offerAccess = document.querySelector('.offer-access-premium');
      if (offerAccess) offerAccess.textContent = offreData.access;
      
      // Label écrans
      const screenLabel = document.querySelector('.screen-label');
      if (screenLabel) screenLabel.textContent = offreData.screenLabel;
      
      // Durée
      const offerDuration = document.querySelector('.offer-duration');
      if (offerDuration) offerDuration.textContent = offreData.duration;
      
      // Options du sélecteur d'écrans
      const screenOptions = document.querySelectorAll('#screen-count option');
      if (screenOptions.length > 0 && offreData.screenOptions) {
        screenOptions.forEach((option, i) => {
          if (offreData.screenOptions[i]) option.textContent = offreData.screenOptions[i];
        });
      }
      
      // Avantages
      const benefits = document.querySelectorAll('.offer-benefits li');
      if (benefits.length > 0 && offreData.benefits) {
        benefits.forEach((li, i) => {
          if (offreData.benefits[i]) li.textContent = offreData.benefits[i];
        });
      }
      
      // Info paiement
      const paymentInfo = document.querySelector('.payment-info');
      if (paymentInfo) paymentInfo.innerHTML = offreData.paymentInfo;
      
      // Conditions paiement
      const paymentTerms = document.querySelector('.payment-terms');
      if (paymentTerms) {
        paymentTerms.innerHTML = offreData.paymentTerms
          .replace('Terms and Conditions', '<a href="contact.html">Terms and Conditions</a>')
          .replace('Privacy Policy', '<a href="contact.html">Privacy Policy</a>');
      }
      
      // Section "Pourquoi choisir"
      const whyTitle = document.querySelector('.why-title');
      if (whyTitle) whyTitle.textContent = offreData.whyTitle;
      
      const whyList = document.querySelectorAll('.why-list li');
      if (whyList.length > 0 && offreData.whyList) {
        whyList.forEach((li, i) => {
          if (offreData.whyList[i]) li.innerHTML = offreData.whyList[i];
        });
      }
      
      // FAQ
      const faqTitle = document.querySelector('.faq-title');
      if (faqTitle) faqTitle.textContent = offreData.faqTitle;
      
      const faqItems = document.querySelectorAll('.faq-section .faq-item');
      if (faqItems.length > 0 && offreData.faqItems) {
        faqItems.forEach((item, i) => {
          if (offreData.faqItems[i]) {
            item.innerHTML = `<strong>${offreData.faqItems[i].q}</strong><br>${offreData.faqItems[i].a}`;
          }
        });
      }
      
      // Bouton final
      const ctaFinal = document.querySelector('.cta-final-btn');
      if (ctaFinal) ctaFinal.textContent = offreData.ctaFinal;
      
      // Mettre à jour le prix dynamique si la fonction existe (page 12 mois)
      if (typeof updateOfferPrice === 'function') {
        updateOfferPrice('en');
      }
      
    } else {
      // Retour au français (titre géré par updateOfferTitle si elle existe)
      if (typeof updateOfferTitle !== 'function' && offerTitle) {
        offerTitle.textContent = "Offre Passion 12 Mois à 29,99 €";
      }
      if (offerSubtitle) offerSubtitle.textContent = "🏆 Notre solution la plus complète et économique";
      if (offerDesc) offerDesc.textContent = "L'expérience premium ultime avec 12 mois d'accès complet, tous les avantages exclusifs et des économies maximales. Plus de 50 000 familles nous font déjà confiance pour leur divertissement quotidien.";
      
      const offerAccess = document.querySelector('.offer-access-premium');
      if (offerAccess) offerAccess.textContent = "🎯 Accès Premium Complet - Solution Tout-en-Un";
      
      const screenLabel = document.querySelector('.screen-label');
      if (screenLabel) screenLabel.textContent = "Écrans simultanés :";
      
      const offerDuration = document.querySelector('.offer-duration');
      if (offerDuration) offerDuration.textContent = "12 mois complets";
      
      // Remettre les options d'écrans en français
      const screenOptions = document.querySelectorAll('#screen-count option');
      const frenchScreenOptions = ["1 écran", "2 écrans", "3 écrans", "4 écrans"];
      screenOptions.forEach((option, i) => {
        if (frenchScreenOptions[i]) option.textContent = frenchScreenOptions[i];
      });
      
      const benefits = document.querySelectorAll('.offer-benefits li');
      const frenchBenefits = [
        "12 mois d'accès complet sans interruption",
        "Économisez jusqu'à 40% par rapport aux offres courtes",
        "Catalogue premium complet et exclusif",
        "Streaming en Ultra HD 4K garanti",
        "Téléchargement hors ligne illimité",
        "Support client prioritaire VIP 7j/7",
        "Mises à jour automatiques du contenu",
        "Aucun engagement au-delà de la période",
        "Accès exclusif aux nouveautés en avant-première",
        "Contrôle parental avancé inclus",
        "Installation ultra-rapide en 5 minutes",
        "Compatible tous appareils (TV, mobile, tablette...)"
      ];
      benefits.forEach((li, i) => {
        if (frenchBenefits[i]) li.textContent = frenchBenefits[i];
      });
      
      const paymentInfo = document.querySelector('.payment-info');
      if (paymentInfo) paymentInfo.innerHTML = "🔒 Paiement 100% sécurisé via PayPal";
      
      const paymentTerms = document.querySelector('.payment-terms');
      if (paymentTerms) {
        paymentTerms.innerHTML = 'En effectuant ce paiement, vous acceptez nos <a href="contact.html">Conditions Générales</a> et notre <a href="contact.html">Politique de Confidentialité</a>.';
      }
      
      const whyTitle = document.querySelector('.why-title');
      if (whyTitle) whyTitle.textContent = "🏆 Pourquoi choisir l'offre Passion 12 mois ?";
      
      const whyList = document.querySelectorAll('.why-list li');
      const frenchWhyList = [
        "<strong>Économies maximales :</strong> Jusqu'à 40% de réduction vs offres mensuelles",
        "<strong>Stabilité garantie :</strong> 12 mois sans interruption de service",
        "<strong>Contenu exclusif :</strong> Accès VIP aux nouveautés en avant-première",
        "<strong>Flexibilité totale :</strong> Changement d'écrans possible à tout moment",
        "<strong>Support VIP :</strong> Assistance prioritaire dédiée 24h/24",
        "<strong>Mises à jour gratuites :</strong> Toutes les nouvelles fonctionnalités incluses",
        "<strong>Qualité premium :</strong> Streaming 4K Ultra HD sans limite",
        "<strong>Satisfaction garantie :</strong> Support technique premium dédié"
      ];
      whyList.forEach((li, i) => {
        if (frenchWhyList[i]) li.innerHTML = frenchWhyList[i];
      });
      
      const faqTitle = document.querySelector('.faq-title');
      if (faqTitle) faqTitle.textContent = "❓ Questions fréquentes - Offre Passion 12 mois";
      
      const faqItems = document.querySelectorAll('.faq-section .faq-item');
      const frenchFaqItems = [
        {
          q: "Puis-je modifier le nombre d'écrans pendant ma période de 12 mois ?",
          a: "Oui, vous pouvez ajuster le nombre d'écrans à tout moment via votre espace client. La différence sera calculée au prorata pour la période restante."
        },
        {
          q: "Que se passe-t-il à la fin des 12 mois ?",
          a: "Votre accès expire automatiquement. Aucun renouvellement automatique. Vous pouvez souscrire une nouvelle offre si vous le souhaitez avec les tarifs en vigueur."
        },
        {
          q: "Y a-t-il vraiment 40% d'économie par rapport aux offres plus courtes ?",
          a: "Absolument ! L'offre Passion 12 mois vous fait économiser jusqu'à 40% par rapport aux offres mensuelles, soit l'économie la plus importante de notre gamme."
        },
        {
          q: "Le contenu est-il différent des autres offres ?",
          a: "Vous avez accès au même catalogue premium complet, mais avec des avantages exclusifs : accès VIP aux nouveautés, support prioritaire et mises à jour en avant-première."
        },
        {
          q: "Puis-je télécharger du contenu pour le regarder hors ligne ?",
          a: "Oui, le téléchargement hors ligne est inclus sans limitation avec votre offre Passion 12 mois, parfait pour vos déplacements."
        }
      ];
      faqItems.forEach((item, i) => {
        if (frenchFaqItems[i]) {
          item.innerHTML = `<strong>${frenchFaqItems[i].q}</strong><br>${frenchFaqItems[i].a}`;
        }
      });
      
      const ctaFinal = document.querySelector('.cta-final-btn');
      if (ctaFinal) ctaFinal.textContent = "Profiter de l'offre Passion 12 mois maintenant";
      
      // Mettre à jour le prix dynamique si la fonction existe (page 12 mois)
      if (typeof updateOfferPrice === 'function') {
        updateOfferPrice('fr');
      }
    }
    return;
  }
}

// ===== SCROLL ULTRA DOUX AVEC INERTIE MAXIMALE =====
document.addEventListener('DOMContentLoaded', function() {
  let isScrolling = false;
  let scrollVelocity = 0;
  
  function handleSmoothWheel(e) {
    e.preventDefault();
    
    // Accumulation encore plus faible pour ultra douceur
    scrollVelocity += e.deltaY * 0.4;
    
    if (!isScrolling) {
      isScrolling = true;
      smoothScrollLoop();
    }
  }
  
  function smoothScrollLoop() {
    if (Math.abs(scrollVelocity) > 0.05) {
      // Scroll ultra doux et lent
      window.scrollBy(0, scrollVelocity * 0.08);
      
      // Friction ultra douce pour inertie maximale
      scrollVelocity *= 0.97;
      
      requestAnimationFrame(smoothScrollLoop);
    } else {
      // Arrêt propre
      scrollVelocity = 0;
      isScrolling = false;
    }
  }
  
  // Application du scroll ultra doux
  document.addEventListener('wheel', handleSmoothWheel, { passive: false });
  
  console.log('🪶 Scroll ultra doux avec inertie maximale activé !');
}); 