export const siteConfig = {
  name: "PHORIAN",
  email: "phorianstudio@gmail.com",
  year: new Date().getFullYear(),
} as const;

/**
 * Structural data only — human-readable strings live in the i18n
 * dictionaries (see /i18n/locales). Platform/social names double as the
 * keys used to look up their localized descriptions.
 */
export const streamingPlatforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/74mQ30zM7z480FlfSxODvv",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/br/artist/phorian/6770760724",
  },
  {
    name: "YouTube",
    href: "https://music.youtube.com/channel/UC7hL-8dQKyBW3R4WvIkQm5A",
  },
  { name: "SoundCloud", href: "https://www.soundcloud.com/phorian" },
] as const;

export const headerSocialLinks = [
  { name: "TikTok", href: "https://www.tiktok.com/@phorianlive?lang=en" },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/74mQ30zM7z480FlfSxODvv",
  },
  {
    name: "YouTube",
    href: "https://music.youtube.com/channel/UC7hL-8dQKyBW3R4WvIkQm5A",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/br/artist/phorian/6770760724",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/phorianmusic/",
  },
  { name: "SoundCloud", href: "https://www.soundcloud.com/phorian" },
] as const;

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/phorianmusic/",
    label: "@phorianmusic",
  },
  {
    name: "YouTube",
    href: "https://music.youtube.com/channel/UC7hL-8dQKyBW3R4WvIkQm5A",
    label: "PHORIAN",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/74mQ30zM7z480FlfSxODvv",
    label: "PHORIAN",
  },
] as const;
