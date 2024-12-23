import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"

const manifestForPlugIn ={
  registerType: "prompt",
  includeAssests: ["favicon.ico", "apple-touch-icon-180x180.png", "logo.svg"],
  manifest: {
    name: "MYPWA",
    short_name: "MYPWA",
    description: "A Fundraising Platform for Nonprofits",
    icons: [
      {
        src: "icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },

      {
        src: "icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
}

export default defineConfig({
  base: "/",
  plugins: [react(), VitePWA(manifestForPlugIn)],
})