<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jennifertakagi/ignews">
    <img src="docs/logo.png" alt="Logo" width="80" height="50">
  </a>

  <h3 align="center">ignews</h3>

  <p align="center">
    An awesome paid Blog Model, using Next.js, Prismic CMS and Stripe as payment method!
    <br />
    <a href="https://github.com/jennifertakagi/ignews"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jennifertakagi/ignews/issues">Report Bug</a>
    ·
    <a href="https://github.com/jennifertakagi/ignews/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](#)

An awesome paid Blog Model, using Next.js, Prismic CMS and Stripe as payment method.

Features:
* Login using GitHub authentication
* Get posts from Prismic CMS API
* Show partial post's content to not subscribed users
* Handle with payments with Stripe API 



### Built With

* [React JS](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Next.js](https://nextjs.org/learn/basics/create-nextjs-app)
* [Stripe](https://stripe.com/docs)
* [Fauna DB](https://docs.fauna.com/fauna/current/start/index.html)
* [Prismic](https://prismic.io/docs)
* [Axios](https://github.com/axios/axios)
* [React Icons](https://react-icons.github.io/react-icons/)
* [SASS](https://sass-lang.com/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

1. Get a free API Key to Stripe, GitHub, Fauna DB and Primic CMS (check the list on .env.sample)
2. Create the file .env.local on your project and set all the API Keys
3. Clone the repo
   ```sh
   git clone https://github.com/jennifertakagi/ignews.git
   ```
4. Install packages
   ```sh
   yarn | npm install
   ```
5. Start the project on root file
   ```sh
   yarn | npm dev
   ```



<!-- USAGE EXAMPLES -->
## Usage

* Working application
<p align="left">
   <img src="docs/ignews.gif" width="500"/>
</p>



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jennifertakagi/ignews/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Jennifer Takagi - [@jennitakagi](https://twitter.com/jennitakagi)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jennifertakagi/ignews.svg?style=for-the-badge
[contributors-url]: https://github.com/jennifertakagi/ignews/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jennifertakagi/ignews.svg?style=for-the-badge
[forks-url]: https://github.com/jennifertakagi/ignews/network/members
[stars-shield]: https://img.shields.io/github/stars/jennifertakagi/ignews.svg?style=for-the-badge
[stars-url]: https://github.com/jennifertakagi/ignews/stargazers
[issues-shield]: https://img.shields.io/github/issues/jennifertakagi/ignews.svg?style=for-the-badge
[issues-url]: https://github.com/jennifertakagi/ignews/issues
[license-shield]: https://img.shields.io/github/license/jennifertakagi/ignews.svg?style=for-the-badge
[license-url]: https://github.com/jennifertakagi/ignews/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jennifertakagi
[product-screenshot]: docs/screenshot.png