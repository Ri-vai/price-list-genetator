import { Page } from "@/types/landing";

export const page: Page = {
  template: "salient",
  theme: "light",
  header: {
    brand: {
      title: "PriceListTemplate",
      avatar: {
        src: "/imgs/logo.png",
        title: "PriceListTemplate",
      },
      url: "/",
    },
    nav: {
      items: [
        // {
        //   title: "Pricing",
        //   url: "https://PriceListTemplate.so/pricing",
        //   target: "_blank",
        // },
        // {
        //   title: "Templates",
        //   url: "https://PriceListTemplate.so/price-list-template",
        //   target: "_blank",
        // },
        // {
        //   title: "Showcases",
        //   url: "https://PriceListTemplate.so/showcases",
        //   target: "_blank",
        // },
      ],
    },
    buttons: [
      {
        title: "Sign In",
        url: "https://PriceListTemplate.so/api/auth/signin?callbackUrl=%2Fprice-list-template",
        target: "_blank",
      },
    ],
  },
  hero: {
    title: "Create Your Price List with AI Power",
    description:
      "Design and launch high-converting price lists with ease using PriceListTemplate AI. Ship Fast with your ideas.",
    image: {
      src: "/imgs/pet.png",
    },
    image_position: "right",
    text_align: "left",
    buttons: [
      {
        title: "Start for free",
        // url: "https://PriceListTemplate.so/price-list-template",
        target: "_blank",
      },
    ],
    show_happy_users: true,
    show_proof: false,
  },
  section: {
    items: [
      {
        name: "what",
        title: "What is PriceListTemplate",
        description:
          "PriceListTemplate is an AI price list generator that simplifies the process of creating effective price lists. With its intuitive interface and smart algorithms, you can generate lists that convert visitors into customers.",
        image: {
          src: "/imgs/bar.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "Price List Generator",
            description:
              "PriceListTemplate can help to generate price lists quickly from your idea",
          },
          {
            title: "List Content Generator",
            description:
              "PriceListTemplate can help to generate high-quality list content with AI",
          },
          {
            title: "Variety Templates",
            description:
              "PriceListTemplate has multiple built-in price list templates to make your lists look great",
          },
        ],
      },
      {
        name: "why",
        title: "Why Choose PriceListTemplate",
        description:
          "PriceListTemplate stands out with its user-friendly design, powerful AI capabilities, and customizable templates that cater to various industries. It saves you time and enhances your marketing efforts.",
        image: {
          src: "/imgs/barber-shop.png",
        },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "Ship Fast",
            description: "Create price lists in seconds",
          },
          {
            title: "Easy to use",
            description: "Just need a product name from your idea",
          },
          {
            title: "AI Powered",
            description: "Generate high-quality list content with AI",
          },
        ],
      },
      {
        name: "how",
        title: "How to Use PriceListTemplate",
        description:
          "Getting started with PriceListTemplate is simple and quick. Follow these steps to create your first price list:",
        image: {
          src: "/imgs/snakes.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "1. Describe your Idea",
            description:
              "Give a product name and a simple description to PriceListTemplate.",
          },
          {
            title: "2. Choose a Template",
            description:
              "Select from a variety of professionally designed templates that suit your needs.",
          },
          {
            title: "3. Customize Your List",
            description:
              "Use our AI tools to personalize your price list with text, images, and branding.",
          },
        ],
        buttons: [
          {
            title: "Ready to try 👉",
            url: "https://PriceListTemplate.so/price-list-template",
            target: "_blank",
          },
        ],
      },
    ],
  },
  feature: {
    title: "Key Features of PriceListTemplate",
    description:
      "Explore the powerful features that make PriceListTemplate the best choice for price list creation.",
    items: [
      {
        title: "AI-Powered Design",
        description:
          "Harness the power of AI to automatically generate beautiful and responsive price list designs tailored to your brand and target audience.",
        avatar: {
          src: "/imgs/icons/1.svg",
        },
      },
      {
        title: "Customizable Templates",
        description:
          "Choose from a wide range of customizable templates that fit your brand's style and message.",
        avatar: {
          src: "/imgs/icons/2.svg",
        },
      },
      {
        title: "Quick Generation",
        description:
          "Leverage AI technology to quickly generate professional price lists, saving you time and enhancing efficiency.",
        avatar: {
          src: "/imgs/icons/3.svg",
        },
      },
      {
        title: "Analytics Integration",
        description:
          "Track the performance of your price lists with integrated analytics tools to optimize your campaigns.",
        avatar: {
          src: "/imgs/icons/4.svg",
        },
      },
      {
        title: "Mobile Responsiveness",
        description:
          "All price lists created with PriceListTemplate are fully responsive, ensuring a seamless experience on any device.",
        avatar: {
          src: "/imgs/icons/5.svg",
        },
      },
      {
        title: "User-Friendly Interface",
        description:
          "An intuitive drag-and-drop interface that makes it easy for anyone to create stunning price lists without any coding skills.",
        avatar: {
          src: "/imgs/icons/6.svg",
        },
      },
    ],
  },
  cta: {
    title: "Can't wait to use PriceListTemplate?",
    description: "Just start from here, make your idea to be seen",
    buttons: [
      {
        title: "Try Now",
        url: "https://PriceListTemplate.so/price-list-template",
        target: "_blank",
      },
    ],
  },
  testimonial: {
    title: "What Users Say About PriceListTemplate",
    description:
      "Hear from our satisfied users who have transformed their price list creation process.",
    items: [
      {
        name: "Mike Jordan",
        title: "Full-stack Developer",
        description:
          "I love this tool so much, it's awesome! PriceListTemplate has made my price list creation process so much easier.",
        avatar: {
          src: "/imgs/user/1.png",
        },
      },
      {
        name: "Sarah Lee",
        title: "Marketing Manager",
        description:
          "PriceListTemplate's AI technology is a game changer. I can create price lists in minutes!",
        avatar: {
          src: "/imgs/user/2.png",
        },
      },
      {
        name: "Tom Smith",
        title: "Entrepreneur",
        description:
          "The templates are beautiful and customizable. I highly recommend PriceListTemplate!",
        avatar: {
          src: "/imgs/user/3.png",
        },
      },
      {
        name: "Emily Davis",
        title: "Content Creator",
        description:
          "PriceListTemplate has helped me increase my conversion rates significantly. It's a must-have tool!",
        avatar: {
          src: "/imgs/user/4.png",
        },
      },
      {
        name: "John Doe",
        title: "Business Owner",
        description:
          "I was able to create a professional price list without any design skills. Thank you, PriceListTemplate!",
        avatar: {
          src: "/imgs/user/5.png",
        },
      },
      {
        name: "Lisa White",
        title: "Freelancer",
        description:
          "The user interface is so easy to navigate. I love using PriceListTemplate for my projects!",
        avatar: {
          src: "/imgs/user/6.png",
        },
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions About PriceListTemplate",
    description: "Find answers to common questions about using PriceListTemplate.",
    items: [
      {
        title: "How many lists can I generate using PriceListTemplate?",
        description:
          "You can generate 3 lists as default, get more credits for list generation when you upgrade to Pro.",
      },
      {
        title: "Is there a free trial available?",
        description:
          "Yes, PriceListTemplate offers a free trial so you can explore its features before committing.",
      },
      {
        title: "Can I integrate PriceListTemplate with other tools?",
        description:
          "Absolutely! PriceListTemplate integrates seamlessly with various marketing and analytics tools.",
      },
      {
        title: "What types of businesses can benefit from PriceListTemplate?",
        description:
          "PriceListTemplate is perfect for marketers, startups, e-commerce businesses, and anyone looking to create effective price lists.",
      },
      {
        title: "Do I need coding skills to use PriceListTemplate?",
        description:
          "No coding skills are required! PriceListTemplate is designed for users of all skill levels.",
      },
      {
        title: "What support options are available?",
        description:
          "PriceListTemplate offers customer support via email and a comprehensive knowledge base for self-help.",
      },
    ],
  },
  footer: {
    brand: {
      title: "PriceListTemplate",
      description:
        "PriceListTemplate is a price list generator powered by AI, it's designed to help businesses and marketers effortlessly create high-converting price lists that drive results.",
      avatar: {
        src: "/imgs/logo.png",
        title: "PriceListTemplate",
      },
      url: "https://PriceListTemplate.so",
    },
    badge_disabled: false,
    copyright: "© 2024 • PriceListTemplate All rights reserved.",
    social: {
      items: [
        {
          title: "Twitter",
          url: "https://x.com/aiPriceListTemplate",
          target: "_blank",
        },
        {
          title: "ProductHunt",
          url: "https://www.producthunt.com/posts/PriceListTemplate",
          target: "_blank",
        },
        {
          title: "Discord",
          url: "https://discord.gg/ZUSutBR4Pv",
          target: "_blank",
        },
        {
          title: "Telegram",
          url: "https://t.me/+PCy10CEWOvA3Zjdl",
          target: "_blank",
        },
        {
          title: "Email",
          url: "mailto:support@PriceListTemplate.so",
          target: "_self",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "Products",
          children: [
            {
              title: "Price List Generator",
              url: "https://PriceListTemplate.so/price-list-template",
              target: "_blank",
            },
          ],
        },
        {
          title: "Friends",
          children: [
            {
              title: "ThinkAny",
              url: "https://thinkany.ai",
              target: "_blank",
            },
            {
              title: "HeyBeauty",
              url: "https://heybeauty.ai",
              target: "_blank",
            },
            {
              title: "GPTs Works",
              url: "https://gpts.works",
              target: "_blank",
            },
          ],
        },
        {
          title: "Services",
          children: [
            {
              title: "Privacy Policy",
              url: "/privacy-policy",
            },
            {
              title: "Terms of Service",
              url: "/terms-of-service",
            },
          ],
        },
      ],
    },
  },
};
