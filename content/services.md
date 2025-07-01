+++
path = "services"
+++

<script src="https://code.iconify.design/2/2.2.1/iconify.min.js" defer></script>
<style>.card {
      width: 200px;
      height: 200px;
      border-radius: 16px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #333;
      background: #fff;
      transition: transform 0.15s, box-shadow 0.15s;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    .card .icon {
      font-size: 64px;
      margin-bottom: 12px;
    }
    .card .label {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }</style>
Blitzwing Services
------------------

These are services I host on subdomains of this site, through VPSes, and simple pages.

I had some misadventures beforehand, before I realized a VPS with Caddy and Docker would be easier. (and easier it was!)
#### Usage Policy
By using the services, you agree that you will not use them for:

* exploitation of others, such as malware

* DDoS/memory flooding/unauthorized uptime checks

* data scraping or commercial activities (host your own instead!)

* purposes related to harmful structures, such as policing

* immoral content; this includes CSAM (including of fictional characters), conspiracy theories, hate ideologies, and other nasty content.

<details><summary>Privacy</summary>
By design, I do not log your usage of the services at all. The only things I log related to them are anonymous analytics of visits to this page via Umami, which can not personally identify you and are used to benefit the services via checking if they're being served fairly.

Anubis logs your IP, but can not see what pages you actually visit.

For encrypted services, I don't even know what's in the paste/upload/etc. I can only respond to a takedown if you have the full URL.

For anything under frontends, takedown requests will be ignored as I have no control on what's on them. They're proxies.</details>

#### _Squawk!_

<span style="float:right;">![squawktalk](/squawktalk.png)</span> Squawktalk from Transformers, the [honorary canary](https://www.eff.org/deeplinks/2014/04/warrant-canary-faq), would like to inform you that my services have not been served a warrant, subpoena, or forced to do any modifications by law enforcement. Pay attention; if Squawktalk leaves, run. This canary is valid as of the most recent commit to this repository, which is <span id="commit-date"></span>.

### Services

<script defer>
  const services = [
    { name: 'Redlib', icon: 'logos:reddit', url: 'https://rl.blitzw.in' },
    { name: 'Privatebin', icon: 'mdi:paste', url: 'https://bin.blitzw.in' },
    { name: 'Mozhi', icon: 'mdi:translate', url: 'https://moz.blitzw.in' },
    { name: 'Wikimore', icon: 'mdi:wikipedia', url: 'https://wikimore.blitzw.in' },
    { name: 'Invidious', icon: 'mdi:youtube', url: 'https://tube.blitzw.in' },
    { name: 'SafeTwitch', icon: 'mdi:twitch', url: 'https://twitch.blitzw.in' },
    { name: 'Binternet', icon: 'mdi:pinterest', url: 'https://pin.blitzw.in' },
    { name: 'Intellectual', icon: 'mdi:genius', url: 'https://genius.blitzw.in' }
  ];

  const container = document.body;

  services.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url;
    a.target = '_blank';
    a.className = 'card';

    const icon = document.createElement('span');
    icon.className = 'icon iconify';
    icon.setAttribute('data-icon', s.icon);
    a.appendChild(icon);

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = s.name;
    a.appendChild(label);

    container.appendChild(a);
  });
</script>

### Donations
Consider contributing to [my wishlist](https://throne.com/gigirassy) so I can have more money left to pay for the services. It helps a ton as me and my family have virtually no income at the moment, and it's anonymous as well. Costs for my services total to around 15 USD a month. [You can also buy me books from Bookshop.org](https://bookshop.org/wishlists/61ca8d380887896314d43867300b67839f0ef315) if you'd like.

<script src="/js/canarydate.js" defer></script>
