import { ArrowUpRight } from "lucide-react";
import { navigation } from "../portfolio-data";

export function SiteNav() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="wordmark" href="#top" aria-label="Akshaya B, home">
          <span className="wordmark__mark" aria-hidden="true">
            A<span>.</span>
          </span>
          <span>Akshaya B</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="#contact">
          Get in touch <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>

      <nav className="mobile-nav-bar" aria-label="Mobile navigation">
        <div className="mobile-nav-bar__track">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="mobile-nav-bar__link">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
