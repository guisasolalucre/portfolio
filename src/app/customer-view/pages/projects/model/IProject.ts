export interface Project {
   id: string,
   title: string,
   url: string,
   repository: string,
   coverImageUrl: string,
   tecnologies: string[],
   description: string,
}

export let projectsArray: Project[] = [
   {
      id: `2`,
      title: `Xavier's School`,
      url: `https://guisasolalucre.github.io/PF-angular-guisasola/`,
      repository: `https://github.com/guisasolalucre/PF-angular-guisasola`,
      coverImageUrl: `https://i.ibb.co/fzHr3HfQ/wall.jpg`,
      tecnologies: [
         'Angular',
         'TypeScript',
         'HTML',
         'SCSS',
         'Redux',
         'API Rest',
         'Mock API',
         'Angular Material',
         'Bootstrap',
         'Unit Testing',
         'Jasmine',
         'Karma',
      ],
      description: `
      <br>
      <p><strong>Angular project</strong> developed as the final project 
      for the Angular course at Coderhouse. It serves as an administrative 
      system for an educational institution, specifically Xavier's School for 
      Gifted Youngsters (X-MEN).
      </p>

      <p>The system allows users to log in as an administrator or assistant.</p>

      <strong>Administrator</strong>
      <ul>
         <li>Create, modify, delete, send emails, and view student details.</li>
         <li>Create, modify, delete, and view course details.</li>
         <li>Create or delete an enrollment.</li>
         <li>Create, delete, and change roles of other users.</li>
      </ul>

      <strong>Assistant</strong>
      <ul>
         <li>Create, modify, send emails, and view student details.</li>
         <li>View course details.</li>
         <li>Create or delete an enrollment.</li>
      </ul>
      `
   },
   {
      id: `1`,
      title: `La Crème de la Crème`,
      url: `https://guisasolalucre.github.io/ecommerce/`,
      repository: `https://github.com/guisasolalucre/ecommerce`,
      coverImageUrl: `https://i.ibb.co/gQ1J85J/logo-con-fondo.jpg`,
      tecnologies: [
         'JavaScript',
         'HTML',
         'CSS',
         'Bootstrap',
         'Toastify',
         'SweetAlert'
      ],
      description: `
         <br>
         <p><strong>A JavaScript-based e-commerce website</strong> 
         developed to showcase basic online shopping functionality.</p>
         <p>It provides an intuitive and responsive user interface 
         with simple interactions for browsing and purchasing products.</p>
         <p>A customer can:</p>
         <ul>
            <li>Add, subtract, or delete products from the shopping cart.</li>
            <li>Search for products by name.</li>
            <li>Filter products by category.</li>
            <li>Confirm the purchase.</li>
         </ul>
      `
   },
   {
      id: `0`,
      title: `My portfolio`,
      url: `https://guisasolalucre.github.io/portfolio/`,
      repository: `https://github.com/guisasolalucre/portfolio`,
      coverImageUrl: `https://i.ibb.co/0jGDdcnN/lg.webp`,
      tecnologies: [
         'Angular',
         'TypeScript',
         'HTML',
         'SCSS',
         'Angular Material',
         'Bootstrap',
         'SweetAlert'
      ],
      description: `
      <br>
      <p>Last but not least, this project itself.
      </p>
      <p>
      It showcases my web development skills and the projects I've worked on. 
      It gives you an overview of my work along with the opportunity to explore 
      live demos and code repositories.
      </p>
      <p>
      This portfolio is a reflection of my growth as a developer 
      and a space to share my passion for creating meaningful web experiences.
      </p>
      `
   },
]