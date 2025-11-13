export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-primary/5 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <a
            href="#top"
            className="flex items-center gap-2 group cursor-pointer focus-visible-ring rounded"
            aria-label="Back to top"
          >
            <svg className="h-7 w-7 transition-colors duration-200 group-hover:fill-accent" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="transition-colors group-hover:fill-primary"
                d="M0 16C0 7.16344 7.16344 0 16 0H184C192.837 0 200 7.16344 200 16V184C200 192.837 192.837 200 184 200H16C7.16344 200 0 192.837 0 184V16Z" fill="#1B263B"/>
              <path
                className="transition-colors group-hover:fill-accent"
                d="M88.9403 168L67.7756 95.2727H87.2003L98.1733 142.929H98.777L111.312 95.2727H127.151L139.686 143.036H140.29L151.298 95.2727H170.688L149.558 168H132.619L119.516 123.895H118.947L105.844 168H88.9403Z" fill="#6CABDD" fillOpacity="0.75"/>
              <path
                className="transition-colors group-hover:fill-accent"
                d="M73.8153 55.0767C73.5786 52.4725 72.5251 50.4484 70.6548 49.0043C68.8082 47.5365 66.1686 46.8026 62.7358 46.8026C60.4631 46.8026 58.5691 47.0985 57.054 47.6903C55.5388 48.2822 54.4025 49.099 53.6449 50.1406C52.8873 51.1586 52.4967 52.3305 52.473 53.6562C52.4257 54.7453 52.6387 55.7041 53.1122 56.5327C53.6094 57.3613 54.3196 58.0952 55.2429 58.7344C56.1899 59.3499 57.3262 59.8944 58.652 60.3679C59.9777 60.8414 61.4692 61.2557 63.1264 61.6108L69.3764 63.0312C72.9749 63.8125 76.1473 64.8542 78.8935 66.1562C81.6634 67.4583 83.9834 69.009 85.8537 70.8082C87.7476 72.6075 89.1799 74.679 90.1506 77.0227C91.1212 79.3665 91.6184 81.9943 91.6421 84.9062C91.6184 89.4991 90.4583 93.4408 88.1619 96.7315C85.8655 100.022 82.563 102.544 78.2543 104.295C73.9692 106.047 68.7964 106.923 62.7358 106.923C56.6515 106.923 51.3485 106.012 46.8267 104.189C42.3049 102.366 38.7893 99.5961 36.2798 95.8793C33.7704 92.1624 32.4801 87.4631 32.4091 81.7812H49.2415C49.3835 84.125 50.0109 86.0781 51.1236 87.6406C52.2363 89.2031 53.7633 90.3868 55.7045 91.1918C57.6695 91.9967 59.9422 92.3991 62.5227 92.3991C64.8902 92.3991 66.9025 92.0795 68.5597 91.4403C70.2405 90.8011 71.5308 89.9133 72.4304 88.777C73.33 87.6406 73.7917 86.3385 73.8153 84.8707C73.7917 83.4976 73.3655 82.3258 72.5369 81.3551C71.7083 80.3608 70.4299 79.5085 68.7017 78.7983C66.9972 78.0644 64.8191 77.3897 62.1676 76.7741L54.5682 74.9986C48.2708 73.5545 43.3111 71.2225 39.6889 68.0028C36.0668 64.7595 34.2675 60.3797 34.2912 54.8636C34.2675 50.3655 35.4749 46.4238 37.9134 43.0383C40.3518 39.6529 43.7254 37.0133 48.0341 35.1193C52.3428 33.2254 57.2552 32.2784 62.7713 32.2784C68.4058 32.2784 73.2945 33.2372 77.4375 35.1548C81.6042 37.0488 84.8357 39.7121 87.1321 43.1449C89.4285 46.5776 90.6004 50.5549 90.6477 55.0767H73.8153Z" fill="#6CABDD"/>
            </svg>
            <span className="text-sm text-primary/90 group-hover:text-accent transition-colors">
              Sean Wotherspoon
            </span>
          </a>
        </div>
        <nav className="hidden gap-6 text-sm text-primary/70 md:flex">
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#experience" className="hover:text-accent">Experience</a>
          <a href="#education" className="hover:text-accent">Education</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
      </div>
    </header>
  );
}