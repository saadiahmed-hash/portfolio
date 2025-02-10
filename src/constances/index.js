import {
    mobile,
    backend,
    creator,
    web,
  } from "../assets";

  import esi from '../assets/company/esi.png';
  import java from '../assets/tech/java.png'
  import Firebase from '../assets/tech/firebase.png'
  import studio from '../assets/tech/studio.png'
  import githubb from '../assets/tech/githubb.png'
  import rxJava from '../assets/tech/reactivex.png'
  import jetpack from '../assets/tech/jetpack.png'
  import retro from '../assets/tech/retro.png'
  import roomDB from '../assets/tech/roomDB.png'
  import figma from '../assets/tech/figma.png'
  import xml from '../assets/tech/xml.png'
  import SahatiCH from '../assets/SahatiCH.png'
  import saveit from '../assets/saveit.png'
  import first100 from '../assets/first100.png'
  import Albes from '../assets/Albes.png'
  import recental from '../assets/recental.png'
  import coffee from '../assets/coffee.png'
  import rafik from '../assets/rafik.jpg'
  import bilel from '../assets/bilel.jpg'
  import amine from '../assets/amine.jpg'

  import gitlab from '../assets/tech/gitlab.png'
  import appwrite from '../assets/tech/appwriteLogo.png'
  import streamlit from '../assets/tech/streamlit.png'
  import node from '../assets/tech/node.png'
  import mlflow from '/home/saadiahmed/portfolio/src/assets/tech/mlfow.svg'
  import postMan from '../assets/tech/postMan.png'
  import movieSys from '../assets/movieSys.jpeg'
  import estate from '../assets/estate.png'


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mobile application devloper",
      icon: web,
    },
    {
      title: "Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },  
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Artificial Intelligence enthusiast",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
    {
      name: "Android studio",
      icon: studio,
    },
    {
      name: "github",
      icon: githubb,
    },
    {
      name: "RxJava",
      icon: rxJava,
    },
    {
      name: "jetpack",
      icon: jetpack,
    },
  
    {
      name: "RoomDB",
      icon: roomDB,
    }
    , 
    {
      name: "xml",
      icon: xml,
    },
    {
      name: "postman",
      icon: postMan,
    },
    {
      name: "appwrite",
      icon: appwrite,
    }
    ,
    {
      name: "node",
      icon: node,
    }
    ,
    {
      name: "gitlab",
      icon: gitlab,
    }
    ,
    {
      name: "mlflow",
      icon: mlflow,
    }
    ,
    {
      name: "streamlit",
      icon: streamlit,
    }

    // here you can add technologies that u can use 


  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "Multidisciplinary project at ESI SBA",
      icon: esi,
      iconBg: "#E6DEDD",
      date: "January 2023 - June 2023",
      points: [
        "Developing and maintaining mobile applications using Java , Firebase and other related technologies.",
        "Collaborating with cross-functional teams including designer, project manager, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        ,"Participating in defining project scope, goals, requirements gathering, and creating a roadmap for the project." , 
        "Collaborated within a team to meticulously analyze requirements, comprehensively understanding end-user needs, evaluating business processes, and assessing technical feasibility." , 
      ],
    } ,
    {
      "title": "Backend Developer & Technical Documentation",
      "company_name": "Gestion des Travaux Sociaux (Multidisciplinary project) - ESI SBA",
      "icon": esi,
      "iconBg": "#E6DEDD",
      "date": "February 2024 - June 2024",
      "points": [
        "Developing and maintaining the backend of a web application for social work management using modern backend technologies.",
        "Designing and implementing secure API endpoints to facilitate seamless communication between the frontend and database.",
        "Writing comprehensive technical documentation, including the project’s functional and technical specifications.",
        "Collaborating with a cross-functional team, including developers and project stakeholders, to ensure the successful delivery of the system.",
        "Creating UML diagrams, use case models, and system architecture documentation to support the project's design and implementation.",
        "Participating in the definition of project scope, requirement gathering, and system analysis to ensure alignment with user needs."
      ]
    } , 
    {
      "title": "Full-Stack Android Developer",
      "company_name": "Estate - Real Estate App",
      "icon": estate, // Replace with actual icon variable
      "iconBg": "#E6DEDD",
      "date": "March 2024 - June 2024",
      "points": [
        "Developed a custom real estate application tailored to client requirements using Java and Jetpack Compose.",
        "Implemented advanced search and filtering features based on location, budget, and property type.",
        "Built a secure, email-verified authentication system for user management.",
        "Designed and integrated property listing and reservation functionalities, enabling users to book properties for flexible durations.",
        "Provided dual functionality for property owners to seamlessly post, manage, and update listings.",
        "Leveraged Firebase for real-time database management and authentication, ensuring a smooth user experience."
      ]
    }
    
    


    // here you can add your work project whene ever you want to 


  ];
  
  const testimonials = [
    {
      testimonial:
        "Ahmed is one of the few persons that i find talented, hard working, and has a true leadership potential. By working with him, things went too smooth because of his awesome team spirit. I highly recommend him in any field he might join and I'm sure he will manage to exceed in it!",
      name: "Khaldi Mohamed rafik",
      designation: "UI/UX designer",
      company: "SahatiCH",
      image: rafik,
    },
    {
      testimonial:
        "I have known ahmed for 3 years. He is a very serious, organized, and ambitious person in his work. My friend has proven himself in the field of computer science, specifically in Java and Firebase. We worked together on a project in the second preparatory class, where he built interactive and scalable applications using Java and Firebase",
      name: "Lakhmi hichem bilel",
      designation: "Backend devloper",
      company: "SahatiCH",
      image: bilel,
    },
    {
      testimonial:
        "I studied with Saadi Ahmed for 3 years. His proficiency as a mobile developer is exceptional, showcasing dedication and impressive skills. Ahmed stands out in the field, and it was a privilege to witness his capabilities",
      name: "Benbekriti amine",
      designation: "Flutter devloper",
      company: "Esi-check",
      image: amine,
    },
    
  ];
  
  const projects = [
    {
      name: "SahatiCH",
      description:
        "mobile application revolutionizes healthcare communication by providing a comprehensive platform for doctors and nurses to collaborate effectively while prioritizing patient care",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "androidstudio",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: SahatiCH,
      source_code_link: "https://github.com/",
      applicationLink: "https://drive.google.com/file/d/1qTsElVBa8aTzXjIMTTBxLVKBKka3mi9h/view?usp=drive_link",
    },
    {
      name: "SaveIT",
      description:
        "An offline note-taking app supporting Arabic and English ,enabling users to write notes, add links, and save images without an internet connection. Offering seamless bilingual note management search....",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "androidstudio",
          color: "green-text-gradient",
        },
        {
          name: "RoomDB",
          color: "pink-text-gradient",
        },
      ],
      image: saveit,
      source_code_link: "https://github.com/",
      applicationLink: "https://drive.google.com/file/d/1CZgGhLxY_2AH-SYPTNoOgzTk2tgpt1Ia/view?usp=drive_link",
    },
    {
      name: "First100 game",
      description:
        "accumulate points strategically to reach 100 in the global score. Manage risk, avoid rolling a 1 to preserve your round score, and be the first to hit the 100 in this thrilling game blending strategy and chance.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "androidstudio",
          color: "green-text-gradient",
        },
        ,
      ],
      image: first100,
      source_code_link: "https://github.com/saadiahmed-hash/Game100.git",
      applicationLink: "https://drive.google.com/file/d/1Q36UOtneqtsmBc-9S2eL6JYqgA0l3qvo/view?usp=drive_link",
    },
    {
      name: "Albes",
      description:
        "Revolutionize fashion retail: Admins effortlessly add products while users seamlessly explore and shop. A user-centric mobile fashion platform transforming the shopping experience. (not completed) ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "androidstudio",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: Albes,
      source_code_link: "https://github.com/",
      applicationLink: "https://drive.google.com/file/d/1M-Mh98mJp3onHmGpnqSHjcXIqBna38BJ/view?usp=drive_link",
    }, 
    {
      name: "Recental",
      description:
        "Revolutionizing car rentals: Admins effortlessly add vehicles via the interface, while users seamlessly browse , search and book cars through the application.  (not completed) ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "androidstudio",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: recental,
      source_code_link: "https://github.com/",
      applicationLink: "https://drive.google.com/file/d/1M-Mh98mJp3onHmGpnqSHjcXIqBna38BJ/view?usp=drive_link",
    },
    {
      name: "CoffeeHeaven",
      description:
        " Enhancing cafeteria reservations: Admins effortlessly update the cafeteria gallery, allowing users to seamlessly explore and book tables via the app, revolutionizing the dining reservation process (lost project).",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "androidstudio",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: coffee,
      source_code_link: "https://github.com/",
      applicationLink: "https://drive.google.com/file/d/1M-Mh98mJp3onHmGpnqSHjcXIqBna38BJ/view?usp=drive_link",
    }, 



    {
      name: "Movie Recommendation System",
      description:
        "Built a movie recommendation system using Association Rules (Apriori & FPGrowth) with MLflow for MLOps-driven hyperparameter optimization. Integrated Streamlit for an interactive UI and TMDB API for movie posters, enhancing the user experience.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MLflow",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
        {
          name: "Apriori",
          color: "yellow-text-gradient",
        },
        {
          name: "FPGrowth",
          color: "purple-text-gradient",
        },
      ],
      image: movieSys, // Replace with the actual image variable
      source_code_link: "https://github.com/saadiahmed-hash/movieRec.git", // Replace with actual GitHub link
      applicationLink: "https://github.com/saadiahmed-hash/movieRec.git", // Replace with actual deployment link
    },
    
  ];
  



  export { services, technologies, experiences, testimonials, projects };