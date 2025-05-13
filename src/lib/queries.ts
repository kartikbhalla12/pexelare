export const heroQuery = `*[_type == "hero"][0] {
  title,
  titleHighlight,
  subtitle,
  image {
    image,
    title,
    subtitle,
    cardTitle,
    cardSubtitle
  },
  ctaPrimary {
    text,
    link,
    icon
  },
  ctaSecondary {
    text,
    link,
    icon
  },
  trustedCompanies {
    title,
    description,
    companies[]
  }
}`;

export const visionQuery = `*[_type == "vision"][0] {
  title,
  titleHighlight,
  subtitle,
  image {
    image,
    title,
    subtitle
  },
  features[] {
    title,
    description,
    icon
  },
  ctaPrimary {
    text,
    link,
    icon
  },
  ctaSecondary {
    text,
    link,
    icon
  }
}`;

export const linkedinQuery = `*[_type == "linkedin"][0] {
  title,
  titleHighlight,
  description,
  ctaButton {
    text,
    link,
    icon
  }
}`;

export const testimonialsQuery = `*[_type == "testimonial"][0] {
  title,
  titleHighlight,
  subtitle,
  testimonials[] {
    name,
    designation,
    company,
    image,
    testimonial,
    rating
  },
  ctaButton {
    text,
    link,
    icon
  }
}`;

export const servicesQuery = `*[_type == "services"][0] {
  title,
  titleHighlight,
  subtitle,
  serviceItems[] {
    title,
    description,
    icon
  },
  ctaButton {
    text,
    link,
    icon
  }
}`;

export const projectsQuery = `*[_type == "projects"][0] {
  title,
  titleHighlight,
  subtitle,
  ctaButton {
    text,
    link,
    icon
  }
}`;

export const projectListQuery = `*[_type == "project"] {
  title,
  slug,
  image,
  techStack,
  shortDescription,
  projectLink
}`;

export const projectQuery = `*[_type == "project" && slug.current == $slug][0] {
  title,
  slug,
  image,
  techStack,
  longDescription,
  projectLink,
}`;
