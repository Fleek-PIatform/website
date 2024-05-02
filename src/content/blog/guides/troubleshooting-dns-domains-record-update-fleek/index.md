---
title: 'Troubleshooting Custom DNS Domains & DNS Configuration Upgrades'
date: 2020-01-09
desc: 'Are you having issues when updating your DNS configuration, or setting up your DNS records for your sites on Fleek? Here are some tips.'
thumbnail: './Home-Meta-Banner-Pic.png'
image: './Home-Meta-Banner-Pic.png'
---

Whether you are adding your custom DNS domain for the first time, or upgrading your previous configuration to Fleek’s [recent BunnyCDN upgrade](https://blog.fleek.co/posts/troubleshooting-dns-domains-record-update-fleek), here are the **most common questions/issues you might encounter** and the answers to them:

## **I have a site with a custom DNS domain, and it is not working!**

The first thing you can check is if your site is visible on the **“Verify on IPFS”** link on your Fleek dashboard. Visit your Fleek dashboard (the hosting tab) and select your affected site to find this button. See the gif below for a reference.

Can you access your site via the IPFS link? Then the most possible scenario is **you’re using our old DNS configuration and need to upgrade**. Follow the steps [on this documentation](https://docs.fleek.co/domain-management/custom-dns-domains/#upgrading-to-new-dns-configuration) to update your domain records.

Another quick way for verifying if this is the problem is visiting the **domain management tab** on your site and seeing if the “Upgrade DNS Configuration” message is present.

If that is the case, you will need to set new ANAME/ALIAS records for your main root domain, and CNAME record for your subdomains. **If you have DNSLINK** **activated**, you will also need to update those records as well to the new configuration.

## **What type of records will I need to set on my DNS provider to use a custom domain?**

You will need to set an ANAME/ALIAS record for the root domain, and CNAME records for your subdomains (www or other subdomains). If you have DNSLINK activated, it will also ask you to configure a CNAME record.

ANAME and ALIAS are interchangeable terms, and you might see one platform name the record either way. In both cases, it would work.

## **Can I set a custom domain using an IP address?**

No, we no longer support configuring custom domains using IP addresses. We only work with ANAME/ALIAS and CNAME records. If you use Google Domains, there is an exception mentioned below.

## **Can I use an A record instead of ANAME/ALIAS?**

No. A records are not the same as ANAME/ALIAS, and trying to configure your DNS domain with one will fail the verification process in Fleek.

## **What can I do if my provider doesn’t support ANAME/ALIAS records?**

Some providers, like **Google Domains and GoDaddy** don’t support ANAME/ALIAS records. You have two options to resolve this.

### **1) Transfer your domain to a compatible provider.**

If your Domain Registrar / DNS provider doesn’t support ANAME/ALIAS records, you can **transfer** your domain to a different platform that does support them. Some services facilitate this, [like Namecheap](https://www.namecheap.com/domains/transfer/transfer-from-godaddy). But the transfer process varies, and **it can take time.**

### **2) Change your domain’s nameserver to Cloudflare. (Recommended)**

This is our recommended solution. Instead of initiating a domain transfer process, you can instead **change your domain’s** nameserver to **point to Cloudflare and manage your DNS settings in Cloudflare**.

Cloudflare supports ANAME/ALIAS records. They need to be set as CNAME in Cloudflare, but they are auto-detected, and work properly.

This **doesn’t require you to transfer** your domain, it is quicker, and free.

## **How do I change my domain’s nameserver and use Cloudflare to set up my Fleek DNS records?**

First things first. You need to sign up for a [free Cloudflare account](https://www.cloudflare.com/).

Cloudflare provides a detailed guide on how to configure your nameserver on your other providers to point to Cloudflare. Here is a [step-by-step guide](https://support.cloudflare.com/hc/en-us/articles/205195708-Changing-your-domain-nameservers-to-Cloudflare), with specific guides for all different DNS provider platforms (see the table at the bottom of this article).

Once you have **updated your domain’s nameserver on your old provider to Cloudflare’s**, you can start managing your DNS records from the DNS app in your Cloudflare account. [Here is a guide from Cloudflare](https://support.cloudflare.com/hc/en-us/articles/360019093151-Managing-DNS-records-in-Cloudflare) on how to do so.

Ready to add your new Fleek DNS records in Cloudflare? **There are two important details you need to follow:**

1. ANAME/ALIAS records are set as CNAME on Cloudflare (Cloudflare will detect them)
2. When you set up a record on Cloudflare, disable the **Proxied feature** (HTTP proxy).

It is important that you **disable the Proxy (or orange cloud)** in all of the DNS records you set on Cloudflare for your Fleek sites/apps. If not, your custom domain will **fail verification** on Fleek. To turn it OFF, edit the record and click the toggle next to the cloud.

This is because when the Proxy is ON, Cloudflare proxies your site through their CDN. Fleek already uses BunnyCDN to handle custom domains, and provide DDOS protection and CDN benefits in speed, caching, and routing. So they are not compatible, but you won’t miss the benefits!

**Remember to go back to Fleek** after setting your DNS records on Cloudflare, and click on the “Verify DNS configuration button” for each of the domains you configured to complete the process. It might take a couple minutes for your site to reflect the change.

## **I set up my DNS records on Cloudflare, but it Fails verification?**

Review the last step from the question above. It is important that you disable the proxy feature in Cloudflare’s DNS app **for all your Fleek DNS records.** Fleek can’t verify your domain if Cloudflare is proxying your domain to their CDN.

## **I use Google Domains, and don’t want to have to use Cloudflare.**

There is a workaround for people using Google Domains that don’t want to use Cloudflare. This trick could apply to other providers that offer domain forwarding to sub domain from apex domain.

Here is a a [detailed guide on how to do so](https://support.getshifter.io/en/articles/3080501-domain-forwarding-on-google-domains-zone-apex-naked-domain-to-www-prefixed-domain). The idea is that Google Domains doesn’t support ANAME/ALIAS records for apex domains (domain.com). But what **you can do** on Google Domains is forward that apex domain to a sub domain (www.domain.com).

In Fleek, subdomains use CNAME records, therefore you could verify it doing this trick, making www. your main point of entry for your website.

## **Still need help? ☎️**

Tried everything above, and your domain still fails verification, or there is another error/issue that isn’t solved by this guide?

Reach out to us through the Fleek’ dashboard chat bubble, or [join our public Discord](https://discord.com/invite/fleek) and send a message in the support channel to share your issue. Make sure you have some screenshots and details ready, the team will be happy to help!
