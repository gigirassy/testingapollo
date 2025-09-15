+++
path = "services"
+++

<script src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js" defer></script>
Blitzwing Services
------------------

These are services I host on subdomains of this site, through VPSes, and simple pages.

I had some misadventures beforehand, before I realized a VPS with Caddy and Docker would be easier. (and easier it was!)
#### Usage Policy
There used to be something longer here, but basically: follow basic moral standards. Don't be the reason why our friend Squawktalk leaves.

<details><summary>Privacy</summary>
By design, I do not log your usage of the services at all. The only things I log related to them are anonymous analytics of visits to this page via Umami, which can not personally identify you and are used to benefit the services via checking if they're being served fairly.

Anubis logs your IP, but can not see what pages you actually visit.

For encrypted services, I don't even know what's in the paste/upload/etc. I can only respond to a takedown if you have the full URL.

For anything under frontends, takedown requests will be ignored as I have no control on what's on them. They're proxies.</details>

#### _Squawk!_

<span style="float:right;">![squawktalk](/squawktalk.png)</span> Squawktalk from Transformers, the [honorary canary](https://www.eff.org/deeplinks/2014/04/warrant-canary-faq), would like to inform you that my services have not been served a warrant, subpoena, or forced to do any modifications by law enforcement. Pay attention; if Squawktalk leaves, run. This canary is valid as of the most recent commit to this repository, which is <span id="commit-date"></span>.

### Services

Are you using Tor? Also <a href="https://seekers.blitzw.in/">check out the Seeker relay</a>!

A purple heart means it's protected by Anubis.

<div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;text-align:center;color:#eee;">
  <!-- Redlib: icon only, no label -->
    <a href="https://searxng.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <iconify-icon icon="rivet-icons:magnifying-glass" style="font-size:8rem;" inline></iconify-icon>
    <span>SearXNG 💜💙</span>
  </a>    

  <a href="https://rl.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <iconify-icon icon="mdi:reddit" style="font-size:8rem;" inline></iconify-icon>
    <span>Redlib 💜💙</span>
  </a>

  <a href="https://mirage.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <span>Mirage (experimental)💙</span>
  </a>

  <a href="https://guest:ladd!r1234@ladder.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <span>Ladder (because paywalls are terrible)💙</span>
  </a>  

  <a href="https://fan.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <iconify-icon icon="picon:fandom" style="font-size:8rem;" inline></iconify-icon>
    <span>Breezewiki 💜💙</span>
  </a>   

  <!-- Privatebin -->
  <a href="https://bin.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <iconify-icon icon="mdi:pastebin" style="font-size:8rem;" inline></iconify-icon>
    <span>Privatebin 🧡</span>
  </a>

  <!-- Mozhi -->
  <a href="https://moz.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <iconify-icon icon="mdi:translate" style="font-size:8rem;" inline></iconify-icon>
    <span>Mozhi 💙</span>
  </a>

  <!-- Wikimore -->
  <a href="https://wikimore.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <iconify-icon icon="mdi:wikipedia" style="font-size:8rem;" inline></iconify-icon>
    <span>Wikimore 💜💙</span>
  </a>

  <!-- SafeTwitch -->
  <a href="https://twitch.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <iconify-icon icon="mdi:twitch" style="font-size:8rem;" inline></iconify-icon>
    <span>SafeTwitch 💙</span>
  </a>

  <!-- Binternet -->
  <a href="https://pin.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <iconify-icon icon="mdi:pinterest" style="font-size:8rem;" inline></iconify-icon>
    <span>Binternet 💜💙</span>
  </a>

  <!-- Intellectual -->
  <a href="https://genius.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <iconify-icon icon="mdi:lightbulb-outline" style="font-size:8rem;" inline></iconify-icon>
    <span>Intellectual 💙</span>
  </a>

  <a href="https://rens.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <span>Rens (Google Lens) 💙</span>
  </a>

  <a href="https://guest:soundcloud@sc.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <span>Soundcloak 💙</span>
  </a>

  <a href="https://pad.blitzw.in" target="_blank"
     style="width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <span>CryptPad (e2e collab suite) 🧡</span>
  </a>
</div>


### Servers
#### Home server ❤️
An HP Compaq from long ago with 2GB RAM and a Pentium CPU. Because of how dated it is, it hosts only a few small things. It runs AntiX Linux.
#### NixOS Gleebus Machine 💙
An ARM64 VPS from Hetzner, converted to NixOS. Costs 3.79 Euro a month.
#### Ub*ntu Gleebus Machine 🧡
My old longtime VPS that I've downgraded a lot.

<script src="/js/canarydate.js" defer></script>
